(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1566:function(s,a,n){s.exports=n.p+"assets/img/1625373590853-2aaaa76e-d5b5-446b-850a-f6cfa26ac70a.cbd26cbc.png"},1936:function(s,a,n){"use strict";n.r(a);var t=n(62),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker命令实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker命令实战"}},[s._v("#")]),s._v(" Docker命令实战")]),s._v(" "),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("p",[t("img",{attrs:{src:n(1566),alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"基础实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础实战"}},[s._v("#")]),s._v(" 基础实战")]),s._v(" "),t("h3",{attrs:{id:"_1、寻找镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、寻找镜像"}},[s._v("#")]),s._v(" 1、寻找镜像")]),s._v(" "),t("p",[s._v("去"),t("a",{attrs:{href:"http://hub.docker.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker hub"),t("OutboundLink")],1),s._v("，找到nginx镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull nginx  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载最新版")]),s._v("\n\n镜像名:版本名（标签）\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull nginx:1.20.1\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull redis  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载最新")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull redis:6.2.4\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 下载来的镜像都在本地")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有镜像")]),s._v("\n\nredis "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redis:latest\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi 镜像名:版本号/镜像id\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"_2、启动容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、启动容器"}},[s._v("#")]),s._v(" 2、启动容器")]),s._v(" "),t("p",[s._v("启动nginx应用容器，并映射88端口，测试的访问")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" IMAGE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMAND"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ARG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n【docker run  设置项   镜像名  】 镜像启动运行的命令（镜像里面默认有的，一般不会写）\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d：后台运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --restart=always: 开机自启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mynginx   -d  --restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always -p  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v(":80   nginx\n\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看正在运行的容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除停止的容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("  容器id/名字\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f mynginx   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#强制删除正在运行中的")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop 容器id/名字\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#再次启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" start 容器id/名字\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#应用开机自启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" update 容器id/名字 --restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h3",{attrs:{id:"_3、修改容器内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、修改容器内容"}},[s._v("#")]),s._v(" 3、修改容器内容")]),s._v(" "),t("p",[s._v("修改默认的index.html 页面")]),s._v(" "),t("h4",{attrs:{id:"_1、进容器内部修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、进容器内部修改"}},[s._v("#")]),s._v(" 1、进容器内部修改")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器内部的系统，修改容器内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器id  /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"_2、挂载数据到外部修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、挂载数据到外部修改"}},[s._v("#")]),s._v(" 2、挂载数据到外部修改")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mynginx   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d  --restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v(":80 -v /data/html:/usr/share/nginx/html:ro  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nnginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改页面只需要去 主机的 /data/html")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_4、提交改变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、提交改变"}},[s._v("#")]),s._v(" 4、提交改变")]),s._v(" "),t("p",[s._v("将自己修改好的镜像提交")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" CONTAINER "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("REPOSITORY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":TAG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"leifengyang"')]),s._v("  -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"首页变化"')]),s._v(" 341d81f7504f guignginx:v1.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"_1、镜像传输"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、镜像传输"}},[s._v("#")]),s._v(" 1、镜像传输")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将镜像保存成压缩包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" save -o abc.tar guignginx:v1.0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 别的机器加载这个镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" load -i abc.tar\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 离线安装")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_5、推送远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、推送远程仓库"}},[s._v("#")]),s._v(" 5、推送远程仓库")]),s._v(" "),t("p",[s._v("推送镜像到docker hub；应用市场")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag local-image:tagname new-repo:tagname\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push new-repo:tagname\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把旧镜像的名字，改成仓库要求的新版名字")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag guignginx:v1.0 leifengyang/guignginx:v1.0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录到docker hub")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login       \n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logout（推送完成镜像后退出）\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push leifengyang/guignginx:v1.0\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 别的机器下载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull leifengyang/guignginx:v1.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"_6、补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、补充"}},[s._v("#")]),s._v(" 6、补充")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs 容器名/id   排错\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器id /bin/bash\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker 经常修改nginx配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/html:/usr/share/nginx/html:ro "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/conf/nginx.conf:/etc/nginx/nginx.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name mynginx-02 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nnginx\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把容器指定位置的东西复制出来 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 5eff66eec7e1:/etc/nginx/nginx.conf  /data/conf/nginx.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把外面的内容复制到容器里面")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v("  /data/conf/nginx.conf  5eff66eec7e1:/etc/nginx/nginx.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"进阶实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进阶实战"}},[s._v("#")]),s._v(" 进阶实战")]),s._v(" "),t("h3",{attrs:{id:"_1、编写自己的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、编写自己的应用"}},[s._v("#")]),s._v(" 1、编写自己的应用")]),s._v(" "),t("p",[s._v("编写一个HelloWorld应用")]),s._v(" "),t("p",[s._v("https://start.spring.io/")]),s._v(" "),t("p",[s._v("示例代码：  https://gitee.com/leifengyang/java-demo.git")]),s._v(" "),t("h3",{attrs:{id:"_2、将应用打包成镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、将应用打包成镜像"}},[s._v("#")]),s._v(" 2、将应用打包成镜像")]),s._v(" "),t("p",[s._v("编写Dockerfile将自己的应用打包镜像")]),s._v(" "),t("h4",{attrs:{id:"_1、以前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、以前"}},[s._v("#")]),s._v(" 1、以前")]),s._v(" "),t("p",[s._v("Java为例")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("SpringBoot打包成可执行jar")])]),s._v(" "),t("li",[t("p",[s._v("把jar包上传给服务")])]),s._v(" "),t("li",[t("p",[s._v("服务器运行java -jar")])])]),s._v(" "),t("h4",{attrs:{id:"_2、现在"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、现在"}},[s._v("#")]),s._v(" 2、现在")]),s._v(" "),t("p",[s._v("所有机器都安装Docker，任何应用都是镜像，所有机器都可以运行")]),s._v(" "),t("h4",{attrs:{id:"_3、怎么打包-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、怎么打包-dockerfile"}},[s._v("#")]),s._v(" 3、怎么打包-Dockerfile")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" openjdk:8-jdk-slim")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" maintainer=leifengyang")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" target/*.jar   /app.jar")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app.jar"')]),s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t java-demo:v1.0 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("思考：")]),s._v(" "),t("p",[s._v("每个应用每次打包，都需要本地编译、再上传服务器、再进行docker构建，如果有1000个应用要打包镜像怎么办？有没有更好的方式？")]),s._v(" "),t("h3",{attrs:{id:"_3、启动容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、启动容器"}},[s._v("#")]),s._v(" 3、启动容器")]),s._v(" "),t("p",[s._v("启动应用容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 --name myjava-app java-demo:v1.0 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("分享镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录docker hub")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#给旧镜像起名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag java-demo:v1.0  leifengyang/java-demo:v1.0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到docker hub")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push leifengyang/java-demo:v1.0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 别的机器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull leifengyang/java-demo:v1.0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 别的机器运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 --name myjava-app java-demo:v1.0 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"_4、部署中间件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、部署中间件"}},[s._v("#")]),s._v(" 4、部署中间件")]),s._v(" "),t("p",[s._v("部署一个Redis+应用，尝试应用操作Redis产生数据")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" IMAGE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMAND"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ARG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redis使用自定义配置文件启动")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -v /data/redis/redis.conf:/etc/redis/redis.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/redis/data:/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d --name myredis "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nredis:latest  redis-server /etc/redis/redis.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);