(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1156:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_07-dubbo-外部化配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_07-dubbo-外部化配置"}},[s._v("#")]),s._v(" 07-Dubbo 外部化配置")]),s._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),n("p",[s._v("由于我们已经使用了 Nacos Server 作为我们的注册中心，所以此处依然使用 Nacos Config 实现 Dubbo 的外部化配置")]),s._v(" "),n("h2",{attrs:{id:"接入配置中心"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接入配置中心"}},[s._v("#")]),s._v(" 接入配置中心")]),s._v(" "),n("h3",{attrs:{id:"pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[s._v("#")]),s._v(" POM")]),s._v(" "),n("p",[s._v("我们以 "),n("code",[s._v("dubbo-consumer")]),s._v(" 项目为例，修改 "),n("code",[s._v("pom.xml")]),s._v(" ，引入 "),n("strong",[s._v("Nacos Config Starter")])]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-alibaba-nacos-config"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"controller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[s._v("#")]),s._v(" Controller")]),s._v(" "),n("p",[s._v("完成上述两步后，应用会从 Nacos Config 中获取相应的配置，并添加在 Spring Environment 的 PropertySources 中。这里我们使用 "),n("code",[s._v("@Value")]),s._v(" 注解来将对应的配置注入到 "),n("code",[s._v("EchoController")]),s._v(" 的 "),n("code",[s._v("username")]),s._v("字段，并添加 "),n("code",[s._v("@RefreshScope")]),s._v(" 打开动态刷新功能")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("funtl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dubbo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("controller")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("funtl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dubbo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("provider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("api")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EchoService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dubbo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Reference")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("beans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RefreshScope")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PathVariable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RestController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RefreshScope")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EchoController")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Reference")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("version "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EchoService")]),s._v(" echoService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${user.name}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/echo/{string}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PathVariable")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" echoService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h3",{attrs:{id:"使用控制台发布配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用控制台发布配置"}},[s._v("#")]),s._v(" 使用控制台发布配置")]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("注意：")]),s._v(" Data ID 的默认扩展名为 "),n("code",[s._v(".properties")]),s._v(" ，希望使用 YAML 配置，此处必须指明是 "),n("code",[s._v(".yaml")])])]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dubbo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("consumer\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("allow-bean-definition-overriding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dubbo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scan")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("base-packages")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" com.funtl.apache.dubbo.consumer.controller\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dubbo\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serialization")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kryo\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("registry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("address")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nacos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//192.168.141.132"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dubbo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("management")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("health")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dubbo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("status")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaults")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" memory\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("extras")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" threadpool\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exposure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"唯我成幸"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h3",{attrs:{id:"修改客户端配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改客户端配置"}},[s._v("#")]),s._v(" 修改客户端配置")]),s._v(" "),n("p",[s._v("创建名为 "),n("code",[s._v("bootstrap.properties")]),s._v(" 的配置文件并删除之前创建的 "),n("code",[s._v("application.yml")]),s._v(" 配置文件")]),s._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.application.name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("dubbo-consumer-config")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.server-addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.141.132:8848")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.file-extension")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("yaml")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("通过浏览器访问 "),n("a",{attrs:{href:"http://www.qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cDovL2xvY2FsaG9zdDo4MDgwL2VjaG8vaGk=",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080/echo/hi"),n("OutboundLink")],1),s._v(" ，浏览器输出如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Echo Hello Dubbo hi i am from port: -1 唯我成幸\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"动态刷新配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态刷新配置"}},[s._v("#")]),s._v(" 动态刷新配置")]),s._v(" "),n("p",[s._v("在 Nacos Server 控制台修改配置文件，将 "),n("code",[s._v("user.name")]),s._v(" 属性修改为 "),n("code",[s._v("桐须真冬")]),s._v("，此时观察控制台日志，你会发现我们已经成功刷新了配置")]),s._v(" "),n("p",[n("img",{attrs:{src:t(682),alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"验证是否成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证是否成功"}},[s._v("#")]),s._v(" 验证是否成功")]),s._v(" "),n("p",[s._v("通过浏览器访问 "),n("a",{attrs:{href:"http://www.qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cDovL2xvY2FsaG9zdDo4MDgwL2VjaG8vaGk=",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080/echo/hi"),n("OutboundLink")],1),s._v(" ，浏览器输出如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Echo Hello Dubbo hi i am from port: -1 桐须真冬\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[n("strong",[s._v("提示：")]),s._v(" 你可以使用 "),n("code",[s._v("spring.cloud.nacos.config.refresh.enabled=false")]),s._v(" 来关闭动态刷新")])])])}),[],!1,null,null,null);a.default=e.exports},682:function(s,a,t){s.exports=t.p+"assets/img/a2aba035cf4a0c2.527f0a85.png"}}]);