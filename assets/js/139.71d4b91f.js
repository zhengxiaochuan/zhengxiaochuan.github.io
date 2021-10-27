(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1493:function(t,s,a){"use strict";a.r(s);var n=a(51),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"尚医通项目上云"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尚医通项目上云"}},[t._v("#")]),t._v(" 尚医通项目上云")]),t._v(" "),a("h1",{attrs:{id:"_1、项目架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、项目架构"}},[t._v("#")]),t._v(" 1、项目架构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/1613913/1632189649799-e486abb0-5195-4282-aef0-c8a3692c0054.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_34%2Ctext_YXRndWlndS5jb20gIOWwmuehheiwtw%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("yygh-parent\n|---common                                  //通用模块\n|---hospital-manage                         //医院后台\t\t\t\t[9999]   \n|---model\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t//数据模型\n|---server-gateway\t\t\t\t\t\t\t\t\t\t\t\t\t//网关    \t\t\t\t[80]\n|---service\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t//微服务层\n|-------service-cmn\t\t\t\t\t\t\t\t\t\t\t\t\t//公共服务\t\t\t\t[8202]\n|-------service-hosp\t\t\t\t\t\t\t\t\t\t\t\t//医院数据服务\t\t[8201]\n|-------service-order\t\t\t\t\t\t\t\t\t\t\t\t//预约下单服务\t\t[8206]\n|-------service-oss\t\t\t\t\t\t\t\t\t\t\t\t\t//对象存储服务\t\t[8205]\n|-------service-sms\t\t\t\t\t\t\t\t\t\t\t\t\t//短信服务\t\t\t\t[8204]\n|-------service-statistics\t\t\t\t\t\t\t\t\t//统计服务\t\t\t\t[8208]\n|-------service-task\t\t\t\t\t\t\t\t\t\t\t\t//定时服务\t\t\t\t[8207]\n|-------service-user\t\t\t\t\t\t\t\t\t\t\t\t//会员服务\t\t\t\t[8203]\n\n\n====================================================================\n\nyygh-admin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t//医院管理后台\t\t[9528]\nyygh-site\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t//挂号平台\t\t\t\t[3000]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h1",{attrs:{id:"_2、中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、中间件"}},[t._v("#")]),t._v(" 2、中间件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("中间件")]),t._v(" "),a("th",[t._v("集群内地址")]),t._v(" "),a("th",[t._v("外部访问地址")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Nacos")]),t._v(" "),a("td",[t._v("his-nacos.his:8848")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://139.198.165.238/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://139.198.165.238:30349/"),a("OutboundLink")],1),t._v("nacos")])]),t._v(" "),a("tr",[a("td",[t._v("MySQL")]),t._v(" "),a("td",[t._v("his-mysql.his:3306")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://139.198.165.238",target:"_blank",rel:"noopener noreferrer"}},[t._v("139.198.165.238"),a("OutboundLink")],1),t._v(":31840")])]),t._v(" "),a("tr",[a("td",[t._v("Redis")]),t._v(" "),a("td",[t._v("his-redis.his:6379")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://139.198.165.238",target:"_blank",rel:"noopener noreferrer"}},[t._v("139.198.165.238"),a("OutboundLink")],1),t._v(":31968")])]),t._v(" "),a("tr",[a("td",[t._v("Sentinel")]),t._v(" "),a("td",[t._v("his-sentinel.his:8080")]),t._v(" "),a("td",[t._v("http://139.198.165.238:31523/")])]),t._v(" "),a("tr",[a("td",[t._v("MongoDB")]),t._v(" "),a("td",[t._v("mongodb.his:"),a("strong",[t._v("27017")])]),t._v(" "),a("td",[a("a",{attrs:{href:"http://139.198.165.238",target:"_blank",rel:"noopener noreferrer"}},[t._v("139.198.165.238"),a("OutboundLink")],1),a("strong",[t._v(":32693")])])]),t._v(" "),a("tr",[a("td",[t._v("RabbitMQ")]),t._v(" "),a("td",[t._v("rabbitm-yp1tx4-rabbitmq.his:5672")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://139.198.165.238",target:"_blank",rel:"noopener noreferrer"}},[t._v("139.198.165.238"),a("OutboundLink")],1),t._v(":30375")])]),t._v(" "),a("tr",[a("td",[t._v("ElasticSearch")]),t._v(" "),a("td",[t._v("his-es.his:9200")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://139.198.165.238",target:"_blank",rel:"noopener noreferrer"}},[t._v("139.198.165.238"),a("OutboundLink")],1),t._v(":31300")])])])]),t._v(" "),a("h1",{attrs:{id:"_3、流水线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、流水线"}},[t._v("#")]),t._v(" 3、流水线")]),t._v(" "),a("h2",{attrs:{id:"_1、项目地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、项目地址"}},[t._v("#")]),t._v(" 1、项目地址")]),t._v(" "),a("p",[t._v("https://gitee.com/leifengyang/yygh-parent")]),t._v(" "),a("p",[t._v("https://gitee.com/leifengyang/yygh-admin")]),t._v(" "),a("p",[t._v("https://gitee.com/leifengyang/yygh-site")]),t._v(" "),a("h2",{attrs:{id:"_2、项目默认规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、项目默认规则"}},[t._v("#")]),t._v(" 2、项目默认规则")]),t._v(" "),a("ul",[a("li",[t._v("每个微服务项目，在生产环境时，会自动获取   "),a("code",[t._v("微服务名-prod.yml")]),t._v(" 作为自己的核心配置文件")]),t._v(" "),a("li",[t._v("每个微服务项目，在生产环境时，默认都是使用 "),a("code",[t._v("8080")]),t._v(" 端口")])]),t._v(" "),a("h2",{attrs:{id:"_3、生产与开发配置隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、生产与开发配置隔离"}},[t._v("#")]),t._v(" 3、生产与开发配置隔离")]),t._v(" "),a("h2",{attrs:{id:"_4、deploy-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、deploy-yaml"}},[t._v("#")]),t._v(" 4、deploy.yaml")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cart\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cart\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" his   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#一定要写名称空间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("progressDeadlineSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cart\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rollingUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSurge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxUnavailable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RollingUpdate\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cart\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullSecrets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aliyun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hub  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#提前在项目下配置访问阿里云的账号密码")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $REGISTRY/$ALIYUNHUB_NAMESPACE/service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cart\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("readinessProbe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /actuator/health\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeoutSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("failureThreshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("periodSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Always\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("limits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300m\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600Mi\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("terminationMessagePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /dev/termination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("log\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("terminationMessagePolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" File\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dnsPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterFirst\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restartPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Always\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("terminationGracePeriodSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cart\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cart\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" his\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cart\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sessionAffinity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" None\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIP\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br")])]),a("h1",{attrs:{id:"_4、devops实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、devops实战"}},[t._v("#")]),t._v(" 4、devops实战")]),t._v(" "),a("h2",{attrs:{id:"_1、修改maven让他从阿里云下载镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、修改maven让他从阿里云下载镜像"}},[t._v("#")]),t._v(" 1、修改maven让他从阿里云下载镜像")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用admin登陆ks")])]),t._v(" "),a("li",[a("p",[t._v("进入集群管理")])]),t._v(" "),a("li",[a("p",[t._v("进入配置中心")])]),t._v(" "),a("li",[a("p",[t._v("找到配置")])]),t._v(" "),a("li",[a("ul",[a("li",[a("a",{attrs:{href:"http://139.198.165.238:30880/clusters/default/projects/kubesphere-devops-system/configmaps/ks-devops-agent",target:"_blank",rel:"noopener noreferrer"}},[t._v("ks-devops-agent"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("修改这个配置。加入maven阿里云镜像加速地址")])])])]),t._v(" "),a("h2",{attrs:{id:"_2、缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、缓存机制"}},[t._v("#")]),t._v(" 2、缓存机制")]),t._v(" "),a("p",[t._v("已经下载过的jar包，下一次流水线的启动，不会重复下载")]),t._v(" "),a("h2",{attrs:{id:"_3、部署到k8s集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、部署到k8s集群"}},[t._v("#")]),t._v(" 3、部署到k8s集群")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("给每一个微服务准备一个 deploy.yaml（k8s的部署配置文件）")])]),t._v(" "),a("li",[a("p",[t._v("执行以下步骤")])]),t._v(" "),a("li",[a("ul",[a("li",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/1613913/1632621832761-6b97bf12-8e06-49ee-8fcb-6db23e28bf4d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_13%2Ctext_YXRndWlndS5jb20gIOWwmuehheiwtw%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})])])]),t._v(" "),a("li",[a("p",[t._v("传入 deploy.yaml 的位置就能部署")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("kubectl apply -f xxxx")])])]),t._v(" "),a("li",[a("p",[t._v("一定在项目里面（his，不是流水线项目），找到配置--密钥，配置一个阿里云的访问账号密码")])]),t._v(" "),a("li",[a("ul",[a("li",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/1613913/1632622552560-210f5aca-3b1c-44ee-8aa1-501af7fb47c3.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_54%2Ctext_YXRndWlndS5jb20gIOWwmuehheiwtw%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})])])])]),t._v(" "),a("h2",{attrs:{id:"_4、前端项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、前端项目"}},[t._v("#")]),t._v(" 4、前端项目")]),t._v(" "),a("h3",{attrs:{id:"_1、yygh-admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、yygh-admin"}},[t._v("#")]),t._v(" 1、yygh-admin")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("npm run build")]),t._v(" 会生成"),a("code",[t._v("dist")]),t._v("目录，放到nginx的html下，即可运行")])]),t._v(" "),a("h3",{attrs:{id:"_2、yygh-site"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、yygh-site"}},[t._v("#")]),t._v(" 2、yygh-site")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("npm install --registry=https://registry.npm.taobao.org")]),t._v(" 安装项目依赖")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("npm run build")]),t._v(" 对项目打包，")])]),t._v(" "),a("li",[a("p",[t._v("打包完成后把 "),a("code",[t._v(".nuxt ,static, nuxt.config.js, package.json")]),t._v(" 这四个关键文件复制到 "),a("code",[t._v("node")]),t._v("环境。先"),a("code",[t._v("npm install")]),t._v("再使用"),a("code",[t._v("npm run start")]),t._v(" 即可运行")])])]),t._v(" "),a("h3",{attrs:{id:"_3、思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、思考"}},[t._v("#")]),t._v(" 3、思考")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("admin的镜像和site的镜像大小为何差距那么大？")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("如何对镜像进行瘦身？")])])])]),t._v(" "),a("h2",{attrs:{id:"_5、webhook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、webhook"}},[t._v("#")]),t._v(" 5、webhook")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1、每个项目，都有流水线文件")])]),t._v(" "),a("li",[a("p",[t._v("2、每次修改完项目，手动点击运行")])]),t._v(" "),a("li",[a("p",[t._v("3、希望，每次修改完项目，代码推送，流水线能自动运行")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("写代码并提交------\x3e gitee ---------\x3e 给指定的地方发请求（webhook）------\x3e kubesphere平台感知到 -----\x3e 自动启动流水线继续运行")]),t._v(" "),a("li",[t._v("http://139.198.165.238:30880/devops_webhook/git/?url=https://gitee.com/leifengyang/yygh-admin.git")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);