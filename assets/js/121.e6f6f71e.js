(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1101:function(s,a,t){s.exports=t.p+"assets/img/c2232aa74a8e4c6.428a22cf.png"},1775:function(s,a,t){"use strict";t.r(a);var n=t(62),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_11-sentinel-客户端接入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-sentinel-客户端接入"}},[s._v("#")]),s._v(" 11-Sentinel 客户端接入")]),s._v(" "),n("h2",{attrs:{id:"pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[s._v("#")]),s._v(" POM")]),s._v(" "),n("p",[s._v("如果要在您的项目中引入 Sentinel，需要增加 "),n("code",[s._v("org.springframework.cloud:spring-cloud-starter-alibaba-sentinel")]),s._v(" Starter POM")]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-alibaba-sentinel"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"修改配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),n("p",[s._v("在 Nacos 控制台修改配置文件，增加对 Sentinel 的支持")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("consumer\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务注册中心")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.141.132"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务配置中心")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.141.132"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 熔断限流")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sentinel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("transport")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dashboard")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启 Feign 对 Sentinel 的支持")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("feign")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sentinel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端口")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("management")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端点检查（健康检查）")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exposure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"灶门祢豆子"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h2",{attrs:{id:"配置熔断类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置熔断类"}},[s._v("#")]),s._v(" 配置熔断类")]),s._v(" "),n("p",[s._v("编写一个 Feign 接口的实现类并增加 "),n("code",[s._v("@Component")]),s._v(" 注解")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("funtl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token import"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("funtl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EchoService")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token import"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stereotype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Component")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EchoServiceFallback")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EchoService")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo fallback"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lb")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lb fallback"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"修改-feign-接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改-feign-接口"}},[s._v("#")]),s._v(" 修改 Feign 接口")]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("@FeignClient")]),s._v(" 接口上增加 "),n("code",[s._v("fallback")]),s._v(" 属性指定熔断类即可")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("funtl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token import"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("funtl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fallback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EchoServiceFallback")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token import"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("openfeign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FeignClient")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token import"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetMapping")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token import"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PathVariable")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@FeignClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"service-provider"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fallback "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EchoServiceFallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EchoService")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/echo/{string}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PathVariable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/lb"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lb")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h2",{attrs:{id:"测试熔断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试熔断"}},[s._v("#")]),s._v(" 测试熔断")]),s._v(" "),n("p",[s._v("启动 "),n("code",[s._v("service-consumer")]),s._v(" 服务并停止 "),n("code",[s._v("service-provider")]),s._v(" 服务，通过浏览器访问 "),n("a",{attrs:{href:"http://www.qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cDovL2xvY2FsaG9zdDo4MDgwL2ZlaWduL2VjaG8vaGk=",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080/feign/echo/hi"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("echo fallback\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(1101),alt:"img"}})]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("注意：")]),s._v(" 必须至少请求过一次才能在 Sentinel 控制台看到对应的服务")])])])}),[],!1,null,null,null);a.default=e.exports}}]);