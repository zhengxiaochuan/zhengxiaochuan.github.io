(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1070:function(t,s,a){"use strict";a.r(s);var _=a(42),v=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_10-微服务设计模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-微服务设计模式"}},[t._v("#")]),t._v(" 10-微服务设计模式")]),t._v(" "),_("h2",{attrs:{id:"微服务架构需要考虑的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构需要考虑的问题"}},[t._v("#")]),t._v(" 微服务架构需要考虑的问题")]),t._v(" "),_("ul",[_("li",[t._v("API Gateway")]),t._v(" "),_("li",[t._v("服务间调用")]),t._v(" "),_("li",[t._v("服务发现")]),t._v(" "),_("li",[t._v("服务容错")]),t._v(" "),_("li",[t._v("服务部署")]),t._v(" "),_("li",[t._v("数据调用")])]),t._v(" "),_("p",[_("img",{attrs:{src:a(494),alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"聚合器微服务设计模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#聚合器微服务设计模式"}},[t._v("#")]),t._v(" 聚合器微服务设计模式")]),t._v(" "),_("p",[t._v("这是一种最常见也最简单的设计模式")]),t._v(" "),_("p",[_("img",{attrs:{src:a(495),alt:"img"}})]),t._v(" "),_("p",[t._v("聚合器调用多个服务实现应用程序所需的功能。它可以是一个简单的 WEB 页面，将检索到的数据进行处理展示。它也可以是一个更高层次的组合微服务，对检索到的数据增加业务逻辑后进一步发布成一个新的微服务，这符合 "),_("strong",[t._v("DRY")]),t._v(" 原则。另外，每个服务都有自己的缓存和数据库。如果聚合器是一个组合服务，那么它也有自己的缓存和数据库。聚合器可以沿 "),_("code",[t._v("X轴")]),t._v(" 和 "),_("code",[t._v("Z轴")]),t._v(" 独立扩展。")]),t._v(" "),_("h2",{attrs:{id:"代理微服务设计模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代理微服务设计模式"}},[t._v("#")]),t._v(" 代理微服务设计模式")]),t._v(" "),_("p",[t._v("这是聚合模式的一个变种，如下图所示")]),t._v(" "),_("p",[_("img",{attrs:{src:a(496),alt:"img"}})]),t._v(" "),_("p",[t._v("在这种情况下，客户端并不聚合数据，但会根据业务需求的差别调用不同的微服务。代理可以仅仅委派请求，也可以进行数据转换工作。")]),t._v(" "),_("h2",{attrs:{id:"链式微服务设计模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#链式微服务设计模式"}},[t._v("#")]),t._v(" 链式微服务设计模式")]),t._v(" "),_("p",[t._v("这种模式在接收到请求后会产生一个经过合并的响应，如下图所示")]),t._v(" "),_("p",[_("img",{attrs:{src:a(497),alt:"img"}})]),t._v(" "),_("p",[t._v("在这种情况下，"),_("code",[t._v("服务A")]),t._v(" 接收到请求后会与 "),_("code",[t._v("服务B")]),t._v(" 进行通信，类似地，"),_("code",[t._v("服务B")]),t._v(" 会同 "),_("code",[t._v("服务C")]),t._v(" 进行通信。所有服务都使用同步消息传递。在整个链式调用完成之前，客户端会一直阻塞。因此，服务调用链不宜过长，以免客户端长时间等待。")]),t._v(" "),_("h2",{attrs:{id:"分支微服务设计模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分支微服务设计模式"}},[t._v("#")]),t._v(" 分支微服务设计模式")]),t._v(" "),_("p",[t._v("这种模式是聚合器模式的扩展，允许同时调用两个微服务链，如下图所示")]),t._v(" "),_("p",[_("img",{attrs:{src:a(498),alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"数据共享微服务设计模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据共享微服务设计模式"}},[t._v("#")]),t._v(" 数据共享微服务设计模式")]),t._v(" "),_("p",[t._v("自治是微服务的设计原则之一，就是说微服务是全栈式服务。但在重构现有的“单体应用（Monolithic Application）”时，SQL 数据库反规范化可能会导致数据重复和不一致。因此，在单体应用到微服务架构的过渡阶段，可以使用这种设计模式，如下图所示")]),t._v(" "),_("p",[_("img",{attrs:{src:a(499),alt:"img"}})]),t._v(" "),_("p",[t._v("在这种情况下，部分微服务可能会共享缓存和数据库存储。不过，这只有在两个服务之间存在强耦合关系时才可以。对于基于微服务的新建应用程序而言，这是一种反模式。")]),t._v(" "),_("h2",{attrs:{id:"异步消息传递微服务设计模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步消息传递微服务设计模式"}},[t._v("#")]),t._v(" 异步消息传递微服务设计模式")]),t._v(" "),_("p",[t._v("虽然 REST 设计模式非常流行，但它是同步的，会造成阻塞。因此部分基于微服务的架构可能会选择使用消息队列代替 REST 请求/响应，如下图所示")]),t._v(" "),_("p",[_("img",{attrs:{src:a(500),alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"新架构新起点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新架构新起点"}},[t._v("#")]),t._v(" 新架构新起点")]),t._v(" "),_("p",[t._v("对于微服务架构，最重要的是思维上的转变，技术不是问题，思想才是王道（"),_("strong",[t._v("有道无术，术尚可求，有术无道，止于术")]),t._v("），对于做微服务开发的几点建议：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("应用程序的核心是业务逻辑，按照业务或客户需求组织资源（这是最难的）")])]),t._v(" "),_("li",[_("strong",[t._v("做有生命的产品，而不是项目")])]),t._v(" "),_("li",[_("strong",[t._v("全栈化")])]),t._v(" "),_("li",[_("strong",[t._v("后台服务贯彻 Single Responsibility Principle（单一职责原则）")])]),t._v(" "),_("li",[_("strong",[t._v("VM -> Docker -> Kubernetes -> Istio")])]),t._v(" "),_("li",[_("strong",[t._v("DevOps")])])])])}),[],!1,null,null,null);s.default=v.exports},494:function(t,s,a){t.exports=a.p+"assets/img/7675668c72ecca7.0c4f9ffe.png"},495:function(t,s,a){t.exports=a.p+"assets/img/1be74b339f4f463.2618c101.png"},496:function(t,s,a){t.exports=a.p+"assets/img/b1ad95d35154757.10e2ffe6.png"},497:function(t,s,a){t.exports=a.p+"assets/img/1ffb0b18a4ae5d7.a5f1e6a5.png"},498:function(t,s,a){t.exports=a.p+"assets/img/61beba13cfab369.c7b92c32.png"},499:function(t,s,a){t.exports=a.p+"assets/img/b9d5d2dd958921b.eb11f2e5.png"},500:function(t,s,a){t.exports=a.p+"assets/img/e80395ce2d985e0.fb91f174.png"}}]);