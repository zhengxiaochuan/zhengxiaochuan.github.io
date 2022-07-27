(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1643:function(s,a,n){"use strict";n.r(a);var t=n(62),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"进入容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[s._v("#")]),s._v(" 进入容器")]),s._v(" "),n("p",[s._v("在使用 "),n("code",[s._v("-d")]),s._v(" 参数时，容器启动后会进入后台。")]),s._v(" "),n("p",[s._v("某些时候需要进入容器进行操作，包括使用 "),n("code",[s._v("docker attach")]),s._v(" 命令或 "),n("code",[s._v("docker exec")]),s._v(" 命令，推荐大家使用 "),n("code",[s._v("docker exec")]),s._v(" 命令，原因会在下面说明。")]),s._v(" "),n("h2",{attrs:{id:"attach-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attach-命令"}},[s._v("#")]),s._v(" "),n("code",[s._v("attach")]),s._v(" 命令")]),s._v(" "),n("p",[n("code",[s._v("docker attach")]),s._v(" 是 Docker 自带的命令。下面示例如何使用该命令。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -dit ubuntu\n243c32535da7d142fb0e6df616a3c3ada0b8ab417937c853a9e1c251f499f550\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n243c32535da7        ubuntu:latest       "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" seconds ago      Up "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" seconds                           nostalgic_hypatia\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" attach 243c\nroot@243c32535da7:/"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[n("em",[s._v("注意：")]),s._v(" 如果从这个 stdin 中 exit，会导致容器的停止。")]),s._v(" "),n("h2",{attrs:{id:"exec-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#exec-命令"}},[s._v("#")]),s._v(" "),n("code",[s._v("exec")]),s._v(" 命令")]),s._v(" "),n("h3",{attrs:{id:"i-t-参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#i-t-参数"}},[s._v("#")]),s._v(" -i -t 参数")]),s._v(" "),n("p",[n("code",[s._v("docker exec")]),s._v(" 后边可以跟多个参数，这里主要说明 "),n("code",[s._v("-i")]),s._v(" "),n("code",[s._v("-t")]),s._v(" 参数。")]),s._v(" "),n("p",[s._v("只用 "),n("code",[s._v("-i")]),s._v(" 参数时，由于没有分配伪终端，界面没有我们熟悉的 Linux 命令提示符，但命令执行结果仍然可以返回。")]),s._v(" "),n("p",[s._v("当 "),n("code",[s._v("-i")]),s._v(" "),n("code",[s._v("-t")]),s._v(" 参数一起使用时，则可以看到我们熟悉的 Linux 命令提示符。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -dit ubuntu\n69d137adef7a8a689cbcb059e94da5489d3cddd240ff675c640c8d96e84fe1f6\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n69d137adef7a        ubuntu:latest       "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" seconds ago      Up "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" seconds                           zealous_swirles\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -i 69d1 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nbin\nboot\ndev\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 69d1 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\nroot@69d137adef7a:/"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("如果从这个 stdin 中 exit，不会导致容器的停止。这就是为什么推荐大家使用 "),n("code",[s._v("docker exec")]),s._v(" 的原因。")]),s._v(" "),n("p",[s._v("更多参数说明请使用 "),n("code",[s._v("docker exec --help")]),s._v(" 查看。")])])}),[],!1,null,null,null);a.default=e.exports}}]);