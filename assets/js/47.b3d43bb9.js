(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1023:function(s,a,t){s.exports=t.p+"assets/img/9f13cfc86553e42.ddbf3ad0.png"},1024:function(s,a,t){s.exports=t.p+"assets/img/4b3a6218bb3e3a7.59160c8b.png"},1025:function(s,a,t){s.exports=t.p+"assets/img/14fdadbbd525f56.d9b45249.png"},1026:function(s,a,t){s.exports=t.p+"assets/img/822050d9ae3c47f.77ad91d0.png"},1027:function(s,a,t){s.exports=t.p+"assets/img/339a57d16284b3a.0084e14a.png"},1657:function(s,a,t){"use strict";t.r(a);var n=t(45),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_05-dubbo-实现高速序列化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_05-dubbo-实现高速序列化"}},[s._v("#")]),s._v(" 05-Dubbo 实现高速序列化")]),s._v(" "),n("h2",{attrs:{id:"dubbo-中的序列化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-中的序列化"}},[s._v("#")]),s._v(" Dubbo 中的序列化")]),s._v(" "),n("p",[s._v("Dubbo RPC 是 Dubbo 体系中最核心的一种高性能、高吞吐量的远程调用方式，可以称之为多路复用的 TCP 长连接调用：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("长连接：")]),s._v(" 避免了每次调用新建 TCP 连接，提高了调用的响应速度")]),s._v(" "),n("li",[n("strong",[s._v("多路复用：")]),s._v(" 单个 TCP 连接可交替传输多个请求和响应的消息，降低了连接的等待闲置时间，从而减少了同样并发数下的网络连接数，提高了系统吞吐量")])]),s._v(" "),n("p",[s._v("Dubbo RPC 主要用于两个 Dubbo 系统之间的远程调用，特别适合高并发、小数据的互联网场景。而序列化对于远程调用的响应速度、吞吐量、网络带宽消耗等同样也起着至关重要的作用，是我们提升分布式系统性能的最关键因素之一。")]),s._v(" "),n("p",[s._v("Dubbo 中支持的序列化方式：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("dubbo 序列化：")]),s._v(" 阿里尚未开发成熟的高效 Java 序列化实现，阿里不建议在生产环境使用它")]),s._v(" "),n("li",[n("strong",[s._v("hessian2 序列化：")]),s._v(" hessian 是一种跨语言的高效二进制序列化方式。但这里实际不是原生的 hessian2 序列化，而是阿里修改过的 hessian lite，它是 dubbo RPC 默认启用的序列化方式")]),s._v(" "),n("li",[n("strong",[s._v("json 序列化：")]),s._v(" 目前有两种实现，一种是采用的阿里的 fastjson 库，另一种是采用 dubbo 中自己实现的简单 json 库，但其实现都不是特别成熟，而且 json 这种文本序列化性能一般不如上面两种二进制序列化。")]),s._v(" "),n("li",[n("strong",[s._v("java 序列化：")]),s._v(" 主要是采用 JDK 自带的 Java 序列化实现，性能很不理想。")])]),s._v(" "),n("p",[s._v("在通常情况下，这四种主要序列化方式的性能从上到下依次递减。对于 dubbo RPC 这种追求高性能的远程调用方式来说，实际上只有 1、2 两种高效序列化方式比较般配，而第 1 个 dubbo 序列化由于还不成熟，所以实际只剩下 2 可用，所以 dubbo RPC 默认采用 hessian2 序列化。")]),s._v(" "),n("p",[s._v("但 hessian 是一个比较老的序列化实现了，而且它是跨语言的，所以不是单独针对 Java 进行优化的。而 dubbo RPC 实际上完全是一种 Java to Java 的远程调用，其实没有必要采用跨语言的序列化方式（当然肯定也不排斥跨语言的序列化）。")]),s._v(" "),n("p",[s._v("最近几年，各种新的高效序列化方式层出不穷，不断刷新序列化性能的上限，最典型的包括：")]),s._v(" "),n("ul",[n("li",[s._v("专门针对 Java 语言的："),n("strong",[s._v("Kryo")]),s._v("，FST 等等")]),s._v(" "),n("li",[s._v("跨语言的：Protostuff，ProtoBuf，"),n("strong",[s._v("Thrift")]),s._v("，Avro，MsgPack 等等")])]),s._v(" "),n("p",[s._v("这些序列化方式的性能多数都显著优于 hessian2（甚至包括尚未成熟的 dubbo 序列化），有鉴于此，我们为 dubbo 引入 Kryo 和 FST 这两种高效 Java 序列化实现，来逐步取代 hessian2。")]),s._v(" "),n("p",[s._v("其中，Kryo 是一种非常成熟的序列化实现，已经在 Twitter、Groupon、Yahoo 以及多个著名开源项目（如 Hive、Storm）中广泛的使用。而 FST 是一种较新的序列化实现，目前还缺乏足够多的成熟使用案例。")]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("注意：")]),s._v(" 在面向生产环境的应用中，目前更优先选择 Kryo")])]),s._v(" "),n("h2",{attrs:{id:"启用-kryo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启用-kryo"}},[s._v("#")]),s._v(" 启用 Kryo")]),s._v(" "),n("p",[s._v("在 Provider 和 Consumer 项目启用 Kryo 高速序列化功能，两个项目的配置方式相同")]),s._v(" "),n("h3",{attrs:{id:"pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[s._v("#")]),s._v(" POM")]),s._v(" "),n("p",[s._v("增加 "),n("code",[s._v("org.apache.dubbo:dubbo-serialization-kryo")]),s._v(" 依赖")]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("properties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dubbo-kryo.version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2.7.2"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dubbo-kryo.version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("properties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.apache.dubbo"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("dubbo-serialization-kryo"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("${dubbo-kryo.version}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"application-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-yml"}},[s._v("#")]),s._v(" application.yml")]),s._v(" "),n("p",[s._v("增加 "),n("code",[s._v("dubbo.protocol.serialization=kryo")]),s._v(" 配置")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dubbo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serialization")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kryo\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"序列化类说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#序列化类说明"}},[s._v("#")]),s._v(" 序列化类说明")]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("注意：")]),s._v(" 想要使用 Kryo 序列化只需要 DTO/Domain/Entity 这类传输对象实现序列化接口即可，无需额外再做配置，如："),n("code",[s._v("public class User implements Serializable{}")])])]),s._v(" "),n("p",[s._v("在对一个类做序列化的时候，可能还级联引用到很多类，比如 Java 集合类。针对这种情况，Dubbo 已经自动将 JDK 中的常用类进行了注册，包括：")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GregorianCalendar")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InvocationHandler")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BigDecimal")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BigInteger")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pattern")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BitSet")]),s._v("\nURI\nUUID\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedList")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashSet")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeSet")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Hashtable")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Calendar")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConcurrentHashMap")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SimpleDateFormat")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BitSet")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringBuffer")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringBuilder")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("由于注册被序列化的类仅仅是出于性能优化的目的，所以即使你忘记注册某些类也没有关系。事实上，即使不注册任何类，Kryo 和 FST 的性能依然普遍优于 hessian 和 dubbo 序列化。")]),s._v(" "),n("h2",{attrs:{id:"附-扩展阅读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-扩展阅读"}},[s._v("#")]),s._v(" 附：扩展阅读")]),s._v(" "),n("h3",{attrs:{id:"序列化性能分析与测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#序列化性能分析与测试"}},[s._v("#")]),s._v(" 序列化性能分析与测试")]),s._v(" "),n("h4",{attrs:{id:"测试环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试环境"}},[s._v("#")]),s._v(" 测试环境")]),s._v(" "),n("ul",[n("li",[s._v("两台独立服务器")]),s._v(" "),n("li",[s._v("4 核 Intel(R) Xeon(R) CPU E5-2603 0 @ 1.80GHz")]),s._v(" "),n("li",[s._v("8G 内存")]),s._v(" "),n("li",[s._v("虚拟机之间网络通过百兆交换机")]),s._v(" "),n("li",[s._v("CentOS 5")]),s._v(" "),n("li",[s._v("JDK 7")]),s._v(" "),n("li",[s._v("Tomcat 7")]),s._v(" "),n("li",[s._v("JVM 参数 "),n("code",[s._v("-server -Xms1g -Xmx1g -XX:PermSize=64M -XX:+UseConcMarkSweepGC")])])]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("注意：")]),s._v(" 当然这个测试环境较有局限，故当前测试结果未必有非常权威的代表性")])]),s._v(" "),n("h4",{attrs:{id:"测试脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试脚本"}},[s._v("#")]),s._v(" 测试脚本")]),s._v(" "),n("p",[s._v("和 dubbo 自身的基准测试保持接近，10 个并发客户端持续不断发出请求：")]),s._v(" "),n("ul",[n("li",[s._v("传入嵌套复杂对象（但单个数据量很小），不做任何处理，原样返回")]),s._v(" "),n("li",[s._v("传入 50K 字符串，不做任何处理，原样返回（TODO：结果尚未列出）")])]),s._v(" "),n("p",[s._v("进行 5 分钟性能测试。（引用 dubbo 自身测试的考虑：“主要考察序列化和网络 IO 的性能，因此服务端无任何业务逻辑。"),n("strong",[s._v("取 10 并发是考虑到 HTTP 协议在高并发下对 CPU 的使用率较高可能会先达到瓶颈。")]),s._v("”）")]),s._v(" "),n("h4",{attrs:{id:"dubbo-rpc-中不同序列化生成字节大小比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-rpc-中不同序列化生成字节大小比较"}},[s._v("#")]),s._v(" Dubbo RPC 中不同序列化生成字节大小比较")]),s._v(" "),n("p",[s._v("序列化生成字节码的大小是一个比较有确定性的指标，它决定了远程调用的网络传输时间和带宽占用。针对复杂对象的结果如下（数值越小越好）：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1023),alt:"img"}})]),s._v(" "),n("p",[n("img",{attrs:{src:t(1024),alt:"img"}})]),s._v(" "),n("h4",{attrs:{id:"dubbo-rpc-中不同序列化响应时间和吞吐量对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-rpc-中不同序列化响应时间和吞吐量对比"}},[s._v("#")]),s._v(" Dubbo RPC 中不同序列化响应时间和吞吐量对比")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1025),alt:"img"}})]),s._v(" "),n("p",[n("img",{attrs:{src:t(1026),alt:"img"}})]),s._v(" "),n("p",[n("img",{attrs:{src:t(1027),alt:"img"}})]),s._v(" "),n("h4",{attrs:{id:"结论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[s._v("#")]),s._v(" 结论")]),s._v(" "),n("p",[s._v("就目前结果而言，我们可以看到不管从生成字节的大小，还是平均响应时间和平均 TPS，Kryo 和 FST 相比 Dubbo RPC 中原有的序列化方式都有非常显著的改进。")])])}),[],!1,null,null,null);a.default=e.exports}}]);