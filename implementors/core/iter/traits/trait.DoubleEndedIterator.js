(function() {var implementors = {};
implementors["arrayvec"] = [{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"arrayvec/struct.IntoIter.html\" title=\"struct arrayvec::IntoIter\">IntoIter</a>&lt;A&gt;",synthetic:false,types:["arrayvec::IntoIter"]},{text:"impl&lt;'a, A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"arrayvec/struct.Drain.html\" title=\"struct arrayvec::Drain\">Drain</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"arrayvec/trait.Array.html#associatedtype.Item\" title=\"type arrayvec::Array::Item\">Item</a>: 'a,&nbsp;</span>",synthetic:false,types:["arrayvec::Drain"]},];
implementors["bit_vec"] = [{text:"impl&lt;'a, B:&nbsp;<a class=\"trait\" href=\"bit_vec/trait.BitBlock.html\" title=\"trait bit_vec::BitBlock\">BitBlock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"bit_vec/struct.Iter.html\" title=\"struct bit_vec::Iter\">Iter</a>&lt;'a, B&gt;",synthetic:false,types:["bit_vec::Iter"]},{text:"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bit_vec/trait.BitBlock.html\" title=\"trait bit_vec::BitBlock\">BitBlock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"bit_vec/struct.IntoIter.html\" title=\"struct bit_vec::IntoIter\">IntoIter</a>&lt;B&gt;",synthetic:false,types:["bit_vec::IntoIter"]},{text:"impl&lt;'a, B:&nbsp;<a class=\"trait\" href=\"bit_vec/trait.BitBlock.html\" title=\"trait bit_vec::BitBlock\">BitBlock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"bit_vec/struct.Blocks.html\" title=\"struct bit_vec::Blocks\">Blocks</a>&lt;'a, B&gt;",synthetic:false,types:["bit_vec::Blocks"]},];
implementors["either"] = [{text:"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = L::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::iterator::Iterator::Item\">Item</a>&gt;,&nbsp;</span>",synthetic:false,types:["either::Either"]},];
implementors["interval_heap"] = [{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"interval_heap/struct.Iter.html\" title=\"struct interval_heap::Iter\">Iter</a>&lt;'a, T&gt;",synthetic:false,types:["interval_heap::Iter"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"interval_heap/struct.IntoIter.html\" title=\"struct interval_heap::IntoIter\">IntoIter</a>&lt;T&gt;",synthetic:false,types:["interval_heap::IntoIter"]},];
implementors["itertools"] = [{text:"impl&lt;I, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Positions.html\" title=\"struct itertools::structs::Positions\">Positions</a>&lt;I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::ExactSizeIterator\">ExactSizeIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(I::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::iterator::Iterator::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>,&nbsp;</span>",synthetic:false,types:["itertools::adaptors::Positions"]},{text:"impl&lt;I, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Update.html\" title=\"struct itertools::structs::Update\">Update</a>&lt;I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;mut I::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::iterator::Iterator::Item\">Item</a>),&nbsp;</span>",synthetic:false,types:["itertools::adaptors::Update"]},{text:"impl&lt;X, Iter, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;X, Iter, F, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;X, Iter, E, F, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;X, Iter, D, E, F, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;X, Iter, C, D, E, F, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>C, D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>C, D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;X, Iter, B, C, D, E, F, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>B, C, D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>B, C, D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;I, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.PadUsing.html\" title=\"struct itertools::structs::PadUsing\">PadUsing</a>&lt;I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::ExactSizeIterator\">ExactSizeIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; I::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::iterator::Iterator::Item\">Item</a>,&nbsp;</span>",synthetic:false,types:["itertools::pad_tail::PadUsing"]},{text:"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.RcIter.html\" title=\"struct itertools::structs::RcIter\">RcIter</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>,&nbsp;</span>",synthetic:false,types:["itertools::rciter_impl::RcIter"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.RepeatN.html\" title=\"struct itertools::structs::RepeatN\">RepeatN</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>",synthetic:false,types:["itertools::repeatn::RepeatN"]},{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ZipLongest.html\" title=\"struct itertools::structs::ZipLongest\">ZipLongest</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::ExactSizeIterator\">ExactSizeIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::ExactSizeIterator\">ExactSizeIterator</a>,&nbsp;</span>",synthetic:false,types:["itertools::zip_longest::ZipLongest"]},];
implementors["linked_hash_map"] = [{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"linked_hash_map/struct.Iter.html\" title=\"struct linked_hash_map::Iter\">Iter</a>&lt;'a, K, V&gt;",synthetic:false,types:["linked_hash_map::Iter"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"linked_hash_map/struct.IterMut.html\" title=\"struct linked_hash_map::IterMut\">IterMut</a>&lt;'a, K, V&gt;",synthetic:false,types:["linked_hash_map::IterMut"]},{text:"impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"linked_hash_map/struct.IntoIter.html\" title=\"struct linked_hash_map::IntoIter\">IntoIter</a>&lt;K, V&gt;",synthetic:false,types:["linked_hash_map::IntoIter"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"linked_hash_map/struct.Keys.html\" title=\"struct linked_hash_map::Keys\">Keys</a>&lt;'a, K, V&gt;",synthetic:false,types:["linked_hash_map::Keys"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"linked_hash_map/struct.Values.html\" title=\"struct linked_hash_map::Values\">Values</a>&lt;'a, K, V&gt;",synthetic:false,types:["linked_hash_map::Values"]},];
implementors["linked_list"] = [{text:"impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"linked_list/struct.Iter.html\" title=\"struct linked_list::Iter\">Iter</a>&lt;'a, A&gt;",synthetic:false,types:["linked_list::Iter"]},{text:"impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"linked_list/struct.IterMut.html\" title=\"struct linked_list::IterMut\">IterMut</a>&lt;'a, A&gt;",synthetic:false,types:["linked_list::IterMut"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"linked_list/struct.IntoIter.html\" title=\"struct linked_list::IntoIter\">IntoIter</a>&lt;A&gt;",synthetic:false,types:["linked_list::IntoIter"]},];
implementors["memchr"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"memchr/struct.Memchr.html\" title=\"struct memchr::Memchr\">Memchr</a>&lt;'a&gt;",synthetic:false,types:["memchr::Memchr"]},];
implementors["ndarray"] = [{text:"impl&lt;'a, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"ndarray/iter/struct.Axes.html\" title=\"struct ndarray::iter::Axes\">Axes</a>&lt;'a, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>",synthetic:false,types:["ndarray::dimension::axes::Axes"]},{text:"impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"ndarray/iter/struct.Iter.html\" title=\"struct ndarray::iter::Iter\">Iter</a>&lt;'a, A, <a class=\"type\" href=\"ndarray/type.Ix1.html\" title=\"type ndarray::Ix1\">Ix1</a>&gt;",synthetic:false,types:["ndarray::iterators::Iter"]},{text:"impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"ndarray/iter/struct.IterMut.html\" title=\"struct ndarray::iter::IterMut\">IterMut</a>&lt;'a, A, <a class=\"type\" href=\"ndarray/type.Ix1.html\" title=\"type ndarray::Ix1\">Ix1</a>&gt;",synthetic:false,types:["ndarray::iterators::IterMut"]},{text:"impl&lt;'a, A, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"ndarray/iter/struct.AxisIter.html\" title=\"struct ndarray::iter::AxisIter\">AxisIter</a>&lt;'a, A, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>",synthetic:false,types:["ndarray::iterators::AxisIter"]},{text:"impl&lt;'a, A, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"ndarray/iter/struct.AxisIterMut.html\" title=\"struct ndarray::iter::AxisIterMut\">AxisIterMut</a>&lt;'a, A, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>",synthetic:false,types:["ndarray::iterators::AxisIterMut"]},{text:"impl&lt;'a, A, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"ndarray/iter/struct.AxisChunksIter.html\" title=\"struct ndarray::iter::AxisChunksIter\">AxisChunksIter</a>&lt;'a, A, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>",synthetic:false,types:["ndarray::iterators::AxisChunksIter"]},{text:"impl&lt;'a, A, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"ndarray/iter/struct.AxisChunksIterMut.html\" title=\"struct ndarray::iter::AxisChunksIterMut\">AxisChunksIterMut</a>&lt;'a, A, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>",synthetic:false,types:["ndarray::iterators::AxisChunksIterMut"]},];
implementors["num_iter"] = [{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"num_iter/struct.Range.html\" title=\"struct num_iter::Range\">Range</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_traits/cast/trait.ToPrimitive.html\" title=\"trait num_traits::cast::ToPrimitive\">ToPrimitive</a>,&nbsp;</span>",synthetic:false,types:["num_iter::Range"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"num_iter/struct.RangeInclusive.html\" title=\"struct num_iter::RangeInclusive\">RangeInclusive</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;A, Output = A&gt; + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_traits/cast/trait.ToPrimitive.html\" title=\"trait num_traits::cast::ToPrimitive\">ToPrimitive</a>,&nbsp;</span>",synthetic:false,types:["num_iter::RangeInclusive"]},];
implementors["regex"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"regex/struct.SetMatchesIntoIter.html\" title=\"struct regex::SetMatchesIntoIter\">SetMatchesIntoIter</a>",synthetic:false,types:["regex::re_set::unicode::SetMatchesIntoIter"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"regex/struct.SetMatchesIter.html\" title=\"struct regex::SetMatchesIter\">SetMatchesIter</a>&lt;'a&gt;",synthetic:false,types:["regex::re_set::unicode::SetMatchesIter"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"regex/bytes/struct.SetMatchesIntoIter.html\" title=\"struct regex::bytes::SetMatchesIntoIter\">SetMatchesIntoIter</a>",synthetic:false,types:["regex::re_set::bytes::SetMatchesIntoIter"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"regex/bytes/struct.SetMatchesIter.html\" title=\"struct regex::bytes::SetMatchesIter\">SetMatchesIter</a>&lt;'a&gt;",synthetic:false,types:["regex::re_set::bytes::SetMatchesIter"]},];
implementors["serde_json"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Iter.html\" title=\"struct serde_json::map::Iter\">Iter</a>&lt;'a&gt;",synthetic:false,types:["serde_json::map::Iter"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IterMut.html\" title=\"struct serde_json::map::IterMut\">IterMut</a>&lt;'a&gt;",synthetic:false,types:["serde_json::map::IterMut"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IntoIter.html\" title=\"struct serde_json::map::IntoIter\">IntoIter</a>",synthetic:false,types:["serde_json::map::IntoIter"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Keys.html\" title=\"struct serde_json::map::Keys\">Keys</a>&lt;'a&gt;",synthetic:false,types:["serde_json::map::Keys"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Values.html\" title=\"struct serde_json::map::Values\">Values</a>&lt;'a&gt;",synthetic:false,types:["serde_json::map::Values"]},];
implementors["smallvec"] = [{text:"impl&lt;'a, T:&nbsp;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"smallvec/struct.Drain.html\" title=\"struct smallvec::Drain\">Drain</a>&lt;'a, T&gt;",synthetic:false,types:["smallvec::Drain"]},{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"smallvec/struct.IntoIter.html\" title=\"struct smallvec::IntoIter\">IntoIter</a>&lt;A&gt;",synthetic:false,types:["smallvec::IntoIter"]},];
implementors["unicode_segmentation"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.GraphemeIndices.html\" title=\"struct unicode_segmentation::GraphemeIndices\">GraphemeIndices</a>&lt;'a&gt;",synthetic:false,types:["unicode_segmentation::grapheme::GraphemeIndices"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.Graphemes.html\" title=\"struct unicode_segmentation::Graphemes\">Graphemes</a>&lt;'a&gt;",synthetic:false,types:["unicode_segmentation::grapheme::Graphemes"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.UnicodeWords.html\" title=\"struct unicode_segmentation::UnicodeWords\">UnicodeWords</a>&lt;'a&gt;",synthetic:false,types:["unicode_segmentation::word::UnicodeWords"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.UWordBoundIndices.html\" title=\"struct unicode_segmentation::UWordBoundIndices\">UWordBoundIndices</a>&lt;'a&gt;",synthetic:false,types:["unicode_segmentation::word::UWordBoundIndices"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.UWordBounds.html\" title=\"struct unicode_segmentation::UWordBounds\">UWordBounds</a>&lt;'a&gt;",synthetic:false,types:["unicode_segmentation::word::UWordBounds"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
