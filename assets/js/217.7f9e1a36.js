(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1152:function(t,e,r){"use strict";r.r(e);var o=r(42),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"导读-课程概要"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导读-课程概要"}},[t._v("#")]),t._v(" 导读：课程概要")]),t._v(" "),r("h3",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),r("p",[t._v("大家都知道，Spring Framework 是 Java/Spring 应用程序跨平台开发框架，也是 Java EE（Java Enterprise Edition） 轻量级框架，其 Spring 平台为 Java 开发者提供了全面的基础设施支持，虽然 Spring 基础组件的代码是轻量级，但其配置依旧是重量级的。")]),t._v(" "),r("p",[t._v("那是怎么解决了呢？当然是 Spring Boot，Spring Boot 提供了新的编程模式，让开发 Spring 应用变得更加简单方便。本课将会由各个最佳实践工程出发，涉及 Spring Boot 开发相关的各方面，下面先了解下 Spring Boot 框架。")]),t._v(" "),r("h3",{attrs:{id:"spring-boot-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-是什么"}},[t._v("#")]),t._v(" Spring Boot 是什么")]),t._v(" "),r("p",[t._v("Spring Boot（Boot 顾名思义，是引导的意思）框架是用于简化 Spring 应用从搭建到开发的过程。应用开箱即用，只要通过一个指令，包括命令行 java -jar、SpringApplication 应用启动类、Spring Boot Maven 插件等，就可以启动应用了。另外，Spring Boot 强调只需要很少的配置文件，所以在开发生产级 Spring 应用中，让开发变得更加高效和简易。目前，Spring Boot 版本是 2.x 版本。")]),t._v(" "),r("p",[r("img",{attrs:{src:"assets/87db53c0-b936-11e7-b969-cb3cfaf54002.jpg",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"spring-boot-webflux-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-webflux-是什么"}},[t._v("#")]),t._v(" Spring Boot WebFlux 是什么")]),t._v(" "),r("p",[t._v("可以看到上面的图，WebFlux 相对 MVC 一样重要。大多数场景使用 MVC 都是阻塞式的，WebFlux 使用的场景是异步非阻塞的，那什么是响应式编程（Reactive Programming）？")]),t._v(" "),r("p",[t._v("官方文档这样描述：响应式编程是基于异步和事件驱动的非阻塞程序，只是垂直通过在 JVM 内启动少量线程扩展，而不是水平通过集群扩展。")]),t._v(" "),r("p",[t._v("Spring Boot 2.0 包括一个新的 spring-webflux 模块，该模块包含对响应式 HTTP 和 WebSocket 客户端的支持，以及对 REST、HTML 和 WebSocket 交互等程序的支持。")]),t._v(" "),r("h3",{attrs:{id:"为什么学习-spring-boot-webflux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么学习-spring-boot-webflux"}},[t._v("#")]),t._v(" 为什么学习 Spring Boot WebFlux")]),t._v(" "),r("ul",[r("li",[t._v("微服务架构越来越火，Spring Boot 是一大趋势，因为 Spring Cloud 是基于 Spring Boot 的，所以学好 Spring Boot WebFlux 会受益匪浅。")]),t._v(" "),r("li",[t._v("从编程来讲，虽然阻塞式编程是避免不了的，但是 Reactive 编程在大多数场景，能够提高资源利用率。所以，学习 WebFlux，尤其某些 IO 密集型场景很刚需。")])]),t._v(" "),r("h3",{attrs:{id:"本课程可以学到什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本课程可以学到什么"}},[t._v("#")]),t._v(" 本课程可以学到什么")]),t._v(" "),r("p",[t._v("本课程是一个系列基础教程，目标是带领读者上手实战，课程以新版本 Spring Boot 2.0 WebFlux 的核心概念作为主线。围绕 Spring Boot 2.0 WebFlux 技术栈的系列教程，目标是带领读者了解 Spring Boot 2.0 WebFlux 各种特性，并学会使用 Spring Boot 相关技术栈上手开发项目。尤其对于微服务下，如果是 IO 密集型等场景，可以考虑使用 WebFlux 去实现。")]),t._v(" "),r("p",[t._v("主要包含知识点：快速入门、CRUD 、MongoDB Reactive、Thymeleaf、Redis、WebSocket 等，一步一步了解每个组件的使用方式，最后综合演练。")]),t._v(" "),r("p",[t._v("认真学完这个系列文章之后，会对 Spring Boot 2.0 WebFlux 有进一步的了解，具备使用 Spring Boot 2.0 WebFlux 上手进行开发的基本能力。")]),t._v(" "),r("p",[t._v("我早期写的文章可以看我的 "),r("a",{attrs:{href:"https://gitbook.cn/gitchat/column/5acda6f6d7966c5ae1086f2b/topic/github.com/JeffLi1993",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"适合阅读的人群"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#适合阅读的人群"}},[t._v("#")]),t._v(" 适合阅读的人群")]),t._v(" "),r("p",[t._v("本 GitChat 课程适合以下人群阅读：")]),t._v(" "),r("ul",[r("li",[t._v("Spring Boot 2.0 WebFlux 新版本的初学人员")]),t._v(" "),r("li",[t._v("对 Spring Boot 2.0 WebFlux 开发感兴趣的开发人员")]),t._v(" "),r("li",[t._v("希望了解 Spring Boot 2.0 WebFlux 的研发人员")])]),t._v(" "),r("p",[t._v("版本使用 Spring Boot 2.0.1.RELEASE 版本进行开发演示，技术人员需要具备 Maven、Git 基本技能。")]),t._v(" "),r("p",[r("strong",[t._v("开发运行环境：")])]),t._v(" "),r("ul",[r("li",[t._v("JDK 1.8 + Spring Boot 2.x 要求 JDK 1.8 环境及以上版本。另外，Spring Boot 2.x 只兼容 Spring Framework 5.0 及以上版本。")]),t._v(" "),r("li",[t._v("Maven 3.2+ 为 Spring Boot 2.x 提供了相关依赖构建工具是 Maven，版本需要 3.2 及以上版本，使用 Gradle 则需要 1.12 及以上版本。Maven 和 Gradle 大家各自挑选下喜欢的就好。")]),t._v(" "),r("li",[t._v("IntelliJ IDEA IntelliJ IDEA （简称 IDEA）是常用的开发工具，也是本书推荐使用的，同样使用 Eclipse IDE 自然也是可以的。")])]),t._v(" "),r("p",[r("strong",[t._v("开发使用框架：")])]),t._v(" "),r("ul",[r("li",[t._v("MongoDB")]),t._v(" "),r("li",[t._v("Redis")]),t._v(" "),r("li",[t._v("Thymeleaf")]),t._v(" "),r("li",[t._v("WebSocket")])]),t._v(" "),r("h3",{attrs:{id:"课程目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#课程目录"}},[t._v("#")]),t._v(" 课程目录")]),t._v(" "),r("ul",[r("li",[t._v("《导读：课程概要》")]),t._v(" "),r("li",[t._v("《第01课：WebFlux 快速入门实践》")]),t._v(" "),r("li",[t._v("《第02课：WebFlux Web CRUD 实践》")]),t._v(" "),r("li",[t._v("《第03课：WebFlux 整合 MongoDB》")]),t._v(" "),r("li",[t._v("《第04课：WebFlux 整合 Thymeleaf》")]),t._v(" "),r("li",[t._v("《第05课：WebFlux 中 Thymeleaf 和 MongoDB 实践》")]),t._v(" "),r("li",[t._v("《第06课：WebFlux 整合 Redis》")]),t._v(" "),r("li",[t._v("《第07课：WebFlux 中 Redis 实现缓存》")]),t._v(" "),r("li",[t._v("《第08课：WebFlux 中 WebSocket 实现通信》")]),t._v(" "),r("li",[t._v("《第09课：WebFlux 集成测试及部署》")]),t._v(" "),r("li",[t._v("《第10课：WebFlux 实战图书管理系统》")])])])}),[],!1,null,null,null);e.default=i.exports}}]);