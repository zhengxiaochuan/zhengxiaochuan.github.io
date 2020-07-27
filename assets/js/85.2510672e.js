(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1266:function(v,_,i){"use strict";i.r(_);var t=i(42),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"堆叠顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆叠顺序"}},[v._v("#")]),v._v(" 堆叠顺序")]),v._v(" "),t("p",[v._v("网页是有图层的，也就涉及到了图层堆叠(显示)的顺序：")]),v._v(" "),t("ul",[t("li",[v._v("堆叠顺序\n"),t("ol",[t("li",[v._v("background")]),v._v(" "),t("li",[v._v("border")]),v._v(" "),t("li",[v._v("块级")]),v._v(" "),t("li",[v._v("浮动")]),v._v(" "),t("li",[v._v("内联")]),v._v(" "),t("li",[v._v("z-index: 0")]),v._v(" "),t("li",[v._v("z-index: +")])])])]),v._v(" "),t("p",[v._v("如果是兄弟元素重叠，那么后面的盖在前面的身上；数字大的层级会盖住数字小的层级，如下图所示：(最右边表示人眼方向，比如"),t("code",[v._v("z-index:1")]),v._v("是人眼最先看到的层级)")]),v._v(" "),t("img-wrapper",[t("img",{attrs:{src:i(957)}})]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),t("p",[v._v("上图是在元素在没有触发堆叠上下文，图层的显示情况；一旦触发了堆叠上下文，"),t("code",[v._v("z-index:负数")]),v._v("位置会发生改变。")])]),v._v(" "),t("h2",{attrs:{id:"堆叠上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆叠上下文"}},[v._v("#")]),v._v(" 堆叠上下文")]),v._v(" "),t("p",[v._v("堆叠上下文可以理解为堆叠作用域，跟 BFC 一样，我们只知道一些属性会触发堆叠上下文，但并不知道堆叠上下文具体是什么。以下属性会触发堆叠上下文：")]),v._v(" "),t("ul",[t("li",[v._v("堆叠上下文\n"),t("ol",[t("li",[v._v("z-index 值不为 auto 的 flex 项(父元素 display:flex | inline-flex)")]),v._v(" "),t("li",[v._v("元素的透明度 opacity 值不等于 1")]),v._v(" "),t("li",[v._v("元素的变形 transform 不是 none")]),v._v(" "),t("li",[v._v("元素的 mix-blend-mode 值不是 normal")]),v._v(" "),t("li",[v._v("元素的 filter 值不是 none")]),v._v(" "),t("li",[v._v("元素的 isolation 值是 isolate")]),v._v(" "),t("li",[v._v("will-change 指定的属性值为上面的任意一个")]),v._v(" "),t("li",[v._v("元素的-webkit-overflow-scrolling 设置为 touch")]),v._v(" "),t("li",[v._v("元素的 mask 属性不是 none")]),v._v(" "),t("li",[v._v("根元素 HTML")])])])]),v._v(" "),t("p",[v._v("比如，给父元素设置了"),t("code",[v._v("position:relative;z-index:0;")]),v._v(",那么这个父元素所有的子元素，不管"),t("code",[v._v("z-index")]),v._v("设置的是多少(负数和正数)，所有子元素的图层都会在父元素的"),t("code",[v._v("border")]),v._v("层上方；也就是说一旦一个元素触发了上下文，就会形成一个自己的图层作用域，该元素所有的后代元素，都将显示在该元素的上方。根元素"),t("code",[v._v("HTML")]),v._v("就是最底层的触发了上下文的元素。")]),v._v(" "),t("img-wrapper",[t("img",{attrs:{src:i(958)}})])],1)}),[],!1,null,null,null);_.default=e.exports},957:function(v,_,i){v.exports=i.p+"assets/img/堆叠顺序.5e15ab39.jpg"},958:function(v,_,i){v.exports=i.p+"assets/img/堆叠上下文.62f0cc8c.jpg"}}]);