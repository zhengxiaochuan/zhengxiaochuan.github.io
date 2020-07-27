(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1268:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"媒体查询-media"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询-media"}},[t._v("#")]),t._v(" 媒体查询 @media")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("@media (max-width: 400px) { body { background: red; } }\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("当屏幕宽度在 0-400px 时，页面的背景色为红色。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("@media (min-width: 500px) { body { background: blue; } }\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("当屏幕宽度在 500px 以上时，页面的背景色为蓝色。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("@media (min-width: 800px) and (max-width:1000px){ body { background: green; } }\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("当屏幕宽度在 800-1000px 时，页面的背景色为绿色。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("screen and (max-width:960px)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("页面宽度小于 960px 的执行指定的样式文件")]),t._v(" "),s("h2",{attrs:{id:"viewport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewport"}},[t._v("#")]),t._v(" viewport")]),t._v(" "),s("p",[t._v("在手机端浏览页面的时候，为了防止页面被缩放，需要加\n"),s("code",[t._v('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minmum-scale=1.0"')])]),t._v(" "),s("p",[t._v("比如 iphone6，当页面不加"),s("code",[t._v("viewport")]),t._v("的时候，"),s("code",[t._v("document.documentElement.clientWidth")]),t._v("\n的值为"),s("code",[t._v("980")]),t._v("，而不是 iphone6 的屏幕实际宽度"),s("code",[t._v("375")]),t._v(",页面的元素也被相应的缩小了"),s("code",[t._v("980/375")]),t._v("倍。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("如果装了 emmet 插件，输入"),s("code",[t._v("meta:vp")]),t._v("就可以快速打出 viewport")])]),t._v(" "),s("h2",{attrs:{id:"手机端与移动端交互方式的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手机端与移动端交互方式的区别"}},[t._v("#")]),t._v(" 手机端与移动端交互方式的区别")]),t._v(" "),s("ul",[s("li",[t._v("没有 hover 事件")]),t._v(" "),s("li",[t._v("有 touch 事件")]),t._v(" "),s("li",[t._v("没有 resize 事件")]),t._v(" "),s("li",[t._v("没有滚动条(只有在滑动的时候会出现提示位置的滚动条)")])])])}),[],!1,null,null,null);a.default=n.exports}}]);