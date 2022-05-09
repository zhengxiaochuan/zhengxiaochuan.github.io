(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1691:function(s,t,a){"use strict";a.r(t);var e=a(62),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos7安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装docker"}},[s._v("#")]),s._v(" Centos7安装Docker")]),s._v(" "),e("p",[s._v("Docker 分为 CE 和 EE 两大版本。CE 即社区版（免费，支持周期 7 个月），EE 即企业版，强调安全，付费使用，支持周期 24 个月。")]),s._v(" "),e("p",[s._v("Docker CE 分为 "),e("code",[s._v("stable")]),s._v(" "),e("code",[s._v("test")]),s._v(" 和 "),e("code",[s._v("nightly")]),s._v(" 三个更新频道。")]),s._v(" "),e("p",[s._v("官方网站上有各种环境下的 "),e("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装指南"),e("OutboundLink")],1),s._v("，这里主要介绍 Docker CE 在 CentOS上的安装。")]),s._v(" "),e("h1",{attrs:{id:"_1-centos安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-centos安装docker"}},[s._v("#")]),s._v(" 1.CentOS安装Docker")]),s._v(" "),e("p",[s._v("Docker CE 支持 64 位版本 CentOS 7，并且要求内核版本不低于 3.10， CentOS 7 满足最低内核的要求，所以我们在CentOS 7安装Docker。")]),s._v(" "),e("h2",{attrs:{id:"_1-1-卸载-可选"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-卸载-可选"}},[s._v("#")]),s._v(" 1.1.卸载（可选）")]),s._v(" "),e("p",[s._v("如果之前安装过旧版本的Docker，可以使用下面命令卸载：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum remove docker \\\n                  docker-client \\\n                  docker-client-latest \\\n                  docker-common \\\n                  docker-latest \\\n                  docker-latest-logrotate \\\n                  docker-logrotate \\\n                  docker-selinux \\\n                  docker-engine-selinux \\\n                  docker-engine \\\n                  docker-ce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"_1-2-安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-安装docker"}},[s._v("#")]),s._v(" 1.2.安装docker")]),s._v(" "),e("p",[s._v("首先需要大家虚拟机联网，安装yum工具")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n           device-mapper-persistent-data "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n           lvm2 --skip-broken\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后更新本地镜像源：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置docker镜像源")]),s._v("\nyum-config-manager "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --add-repo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n    \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/download.docker.com/mirrors.aliyun.com\\/docker-ce/g'")]),s._v(" /etc/yum.repos.d/docker-ce.repo\n\nyum makecache fast\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("然后输入命令：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("docker-ce为社区免费版本。稍等片刻，docker即可安装成功。")]),s._v(" "),e("h2",{attrs:{id:"_1-3-启动docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-启动docker"}},[s._v("#")]),s._v(" 1.3.启动docker")]),s._v(" "),e("p",[s._v("Docker应用需要用到各种端口，逐一去修改防火墙设置。非常麻烦，因此建议大家直接关闭防火墙！")]),s._v(" "),e("p",[s._v("启动docker前，一定要关闭防火墙后！！")]),s._v(" "),e("p",[s._v("启动docker前，一定要关闭防火墙后！！")]),s._v(" "),e("p",[s._v("启动docker前，一定要关闭防火墙后！！")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\nsystemctl stop firewalld\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止开机启动防火墙")]),s._v("\nsystemctl disable firewalld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("通过命令启动docker：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("systemctl start "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker服务")]),s._v("\n\nsystemctl stop "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止docker服务")]),s._v("\n\nsystemctl restart "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker服务")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("然后输入命令，可以查看docker版本：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如图：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(640),alt:"image-20210418154704436"}})]),s._v(" "),e("h2",{attrs:{id:"_1-4-配置镜像加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-配置镜像加速"}},[s._v("#")]),s._v(" 1.4.配置镜像加速")]),s._v(" "),e("p",[s._v("docker官方镜像仓库网速较差，我们需要设置国内镜像服务：")]),s._v(" "),e("p",[s._v("参考阿里云的镜像加速文档：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors")]),s._v(" "),e("h1",{attrs:{id:"_2-centos7安装dockercompose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-centos7安装dockercompose"}},[s._v("#")]),s._v(" 2.CentOS7安装DockerCompose")]),s._v(" "),e("h2",{attrs:{id:"_2-1-下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-下载"}},[s._v("#")]),s._v(" 2.1.下载")]),s._v(" "),e("p",[s._v("Linux下需要通过命令下载：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://github.com/docker/compose/releases/download/1.23.1/docker-compose-"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/bin/docker-compose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果下载速度较慢，或者下载失败，可以使用课前资料提供的docker-compose文件：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(641),alt:"image-20210417133020614"}})]),s._v(" "),e("p",[s._v("上传到"),e("code",[s._v("/usr/local/bin/")]),s._v("目录也可以。")]),s._v(" "),e("h2",{attrs:{id:"_2-2-修改文件权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-修改文件权限"}},[s._v("#")]),s._v(" 2.2.修改文件权限")]),s._v(" "),e("p",[s._v("修改文件权限：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改权限")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_2-3-base自动补全命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-base自动补全命令"}},[s._v("#")]),s._v(" 2.3.Base自动补全命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 补全命令")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://raw.githubusercontent.com/docker/compose/1.29.1/contrib/completion/bash/docker-compose "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/bash_completion.d/docker-compose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果这里出现错误，需要修改自己的hosts文件：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"199.232.68.133 raw.githubusercontent.com"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h1",{attrs:{id:"_3-docker镜像仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-docker镜像仓库"}},[s._v("#")]),s._v(" 3.Docker镜像仓库")]),s._v(" "),e("p",[s._v("搭建镜像仓库可以基于Docker官方提供的DockerRegistry来实现。")]),s._v(" "),e("p",[s._v("官网地址：https://hub.docker.com/_/registry")]),s._v(" "),e("h2",{attrs:{id:"_3-1-简化版镜像仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-简化版镜像仓库"}},[s._v("#")]),s._v(" 3.1.简化版镜像仓库")]),s._v(" "),e("p",[s._v("Docker官方的Docker Registry是一个基础版本的Docker镜像仓库，具备仓库管理的完整功能，但是没有图形化界面。")]),s._v(" "),e("p",[s._v("搭建方式比较简单，命令如下：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --name registry\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v registry-data:/var/lib/registry "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    registry\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("命令中挂载了一个数据卷registry-data到容器内的/var/lib/registry 目录，这是私有镜像库存放数据的目录。")]),s._v(" "),e("p",[s._v("访问http://YourIp:5000/v2/_catalog 可以查看当前私有镜像服务中包含的镜像")]),s._v(" "),e("h2",{attrs:{id:"_3-2-带有图形化界面版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-带有图形化界面版本"}},[s._v("#")]),s._v(" 3.2.带有图形化界面版本")]),s._v(" "),e("p",[s._v("使用DockerCompose部署带有图象界面的DockerRegistry，命令如下：")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.0'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("registry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/registry\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ui")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" joxit/docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("static\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8080"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" REGISTRY_TITLE=传智教育私有仓库\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" REGISTRY_URL=http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" registry\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h2",{attrs:{id:"_3-3-配置docker信任地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-配置docker信任地址"}},[s._v("#")]),s._v(" 3.3.配置Docker信任地址")]),s._v(" "),e("p",[s._v("我们的私服采用的是http协议，默认不被Docker信任，所以需要做一个配置：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开要修改的文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/docker/daemon.json\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加内容：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),s._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://192.168.150.101:8080"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重加载")]),s._v("\nsystemctl daemon-reload\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker")]),s._v("\nsystemctl restart "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports},640:function(s,t){s.exports="data:image/png;base64,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"},641:function(s,t,a){s.exports=a.p+"assets/img/image-20210417133020614.ccec62f3.png"}}]);