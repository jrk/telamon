use libc;
use std::ffi::CString;
use telajax;

const VEC_LENGTH: usize = 16;

const OCL_WRAPPER: &str ="
void _vec_add(int n, __global float* x, __global float* y, unsigned long* timestamp_in, unsigned long* timestamp_out);

__kernel void vec_add(int n, __global float* x, __global float* y){
	unsigned long timestamp_in, timestamp_out;
	_vec_add(n, x, y, &timestamp_in, &timestamp_out);
	printf(\"[OCL] Exec time of _vec_add is %d cycles\\n\", timestamp_out - timestamp_in);
} ";

const KERNEL_CODE: &str = "
 #include <stdio.h>

void _vec_add(int n, float* x, float* y, unsigned long* timestamp_in, unsigned long* timestamp_out){ 
	
	*timestamp_in = __k1_read_dsu_timestamp(); 
	for(int i = 0; i < n; i++){
		y[i] += x[i];
	}
	*timestamp_out = __k1_read_dsu_timestamp();
	
}" ;

const CFLAGS: &str = "-std=c99";

const EMPTY: &str = "";

#[test]
fn simple_telajax() {
    let executor = telajax::Device::get();

    let mut host_x: Vec<f32> = vec![0.; VEC_LENGTH];
    let mut host_y: Vec<f32> = vec![0.; VEC_LENGTH];
    for i in 0..VEC_LENGTH {
        host_x[i] = i as f32;
        host_y[i] = (i as f32) / 2.;
    }
    let expected_res: Vec<f32> = host_y
        .iter()
        .zip(host_x.iter())
        .map(|(x, y)| x + y)
        .collect();

    let buf_x = executor.allocate_array::<f32>(VEC_LENGTH);
    let buf_y = executor.allocate_array::<f32>(VEC_LENGTH);
    buf_x.write(&host_x[..]).unwrap();
    buf_y.write(&host_y[..]).unwrap();

    // Wrapper build
    let name = CString::new("vec_add").unwrap();
    let wrapper_code = CString::new(OCL_WRAPPER).unwrap();
    let wrapper = executor.build_wrapper(&name, &wrapper_code).unwrap();

    // Kernel build
    let kernel_code = CString::new(KERNEL_CODE).unwrap();
    let cflags = CString::new(CFLAGS).unwrap();
    let lflags = CString::new(EMPTY).unwrap();
    let mut kernel = executor
        .build_kernel(&kernel_code, &cflags, &lflags, &wrapper)
        .unwrap();

    // Setting arguments
    let sizes = [
        std::mem::size_of::<usize>(),
        telajax::Mem::get_mem_size(),
        telajax::Mem::get_mem_size(),
    ];
    let arg_ptrs = [
        &VEC_LENGTH as *const _ as *const libc::c_void,
        buf_x.raw_ptr(),
        buf_y.raw_ptr(),
    ];
    kernel.set_args(&sizes[..], &arg_ptrs[..]).unwrap();

    //Executing
    executor.execute_kernel(&mut kernel).unwrap();

    // Checking
    let res_y: Vec<f32> = buf_y.read().unwrap();
    assert_eq!(res_y, expected_res);
}
