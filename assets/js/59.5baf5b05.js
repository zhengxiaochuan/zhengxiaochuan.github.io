(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1157:function(s,a,t){"use strict";t.r(a);var e=t(45),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"jenkins-docker-自动部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-docker-自动部署"}},[s._v("#")]),s._v(" jenkins + docker 自动部署")]),s._v(" "),e("h3",{attrs:{id:"推送方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送方案"}},[s._v("#")]),s._v(" 推送方案")]),s._v(" "),e("p",[s._v("目前已经使用 docker 搭建了 gitlab + jenkins，并且 gitlab 会将 tag 推送事件回调至 jenkins，jenkins 收到推送事件之后就会从 gitlab 仓库中拉取代码，然后将代码构建生成 docker 镜像并推送至 阿里云 registry")]),s._v(" "),e("ol",[e("li",[s._v("构建过程实际就是 jenkins 执行一个我们编写完成的 shell 脚本，所以完成构建之后，可以直接在 shell中编写远程ssh连接服务的脚本，然后构建完成之后就直接执行")]),s._v(" "),e("li",[s._v("jenkins 有一个 "),e("strong",[s._v("Publish Over SSH")]),s._v(" 插件，这个插件可以在jenkins的事件中通过配置，自动通过ssh完成脚本的执行，简化一个ssh的连接过程，而且多个节点的话不需要重复的编写shell脚本而是以配置的形式添加Server")])]),s._v(" "),e("h3",{attrs:{id:"publish-over-ssh-插件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publish-over-ssh-插件配置"}},[s._v("#")]),s._v(" Publish Over SSH 插件配置")]),s._v(" "),e("p",[s._v("在系统管理 > 插件 下，搜索这个插件，然后安装完成并启用")]),s._v(" "),e("p",[e("img",{attrs:{src:t(399),alt:"img"}})]),s._v(" "),e("p",[s._v("然后再 系统管理 > 系统设置下，Publish over SSH 功能块内，配置需要ssh连接的节点，这里测试就先添加一台，可以添加多个，这里添加的目的是在 jenkins 的 task 配置中快速使用服务器的ssh连接信息来复用")]),s._v(" "),e("p",[s._v("这里配置可以使用账号密码来连接，也可以使用密钥来连接，这里我直接添加了一个账号密码连接的服务器信息，然后可以使用 test configuration 来测试连接是否成功，连接信息中需要配置一个 Remote Directory，这个目录配置后，就是之后脚本执行的当前目录")]),s._v(" "),e("p",[e("img",{attrs:{src:t(400),alt:"img"}})]),s._v(" "),e("h3",{attrs:{id:"publish-over-ssh-插件使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publish-over-ssh-插件使用"}},[s._v("#")]),s._v(" Publish Over SSH 插件使用")]),s._v(" "),e("p",[s._v("在之前添加的 task 的配置中进行修改，首先修改之前的构建的 shell 脚本")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONTAINER_NAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"citest"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GIT_TAG")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" describe --always --tag"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONTAINER_FULL_NAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CONTAINER_NAME}")]),s._v("-"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GIT_TAG}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REPOSITORY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry.cn-shanghai.aliyuncs.com/xxx/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CONTAINER_NAME}")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GIT_TAG}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建Docker镜像")]),s._v("\ndocker build -t "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),s._v(" -f Dockerfile "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送Docker镜像")]),s._v("\ndocker login --username"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx --password"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password registry.cn-shanghai.aliyuncs.com\ndocker push "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除生成的image")]),s._v("\ndocker images "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" citest "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1\":\"$2}'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" docker rmi "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除名称或标签为none的镜像")]),s._v("\ndocker rmi -f  "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker images "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<none>'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $3}'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ./release "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f ./release/repository "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"docker ps | grep citest | awk '{print \\"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}' | xargs docker kill || true"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"docker images | grep citest | awk '{print \\"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}' | xargs docker rmi -f || true"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker login --username=xxx --password=password registry.cn-shanghai.aliyuncs.com'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker pull '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker run -d '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),s._v('"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./release/repull\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("这里在原来清理现场之后，增加输出一个shell脚本到本地，这个shell脚本就是之后要ssh发送到其他节点执行的脚本，这里我是通过构建脚本自动生成这个其他节点部署的脚本，因为里面需要每次拉取的仓库地址都是不一样的，这样处理比较方便")]),s._v(" "),e("p",[s._v("其他节点部署的脚本主要工作是，关闭正在执行的 container，然后将这个项目相关的 image 全部移除，再连接阿里云的 registry 将最新的 image pull 下来并且运行")]),s._v(" "),e("p",[s._v("然后在构建步骤中再创建一个 "),e("strong",[s._v("Send files or execute commands over SSH")]),s._v(" 类型的步骤，这个步骤就是 ssh 连接其他节点的步骤，添加后在 ssh Server 中选择之前全局配置的节点 ssh 信息 03.png")]),s._v(" "),e("p",[e("img",{attrs:{src:t(401),alt:"img"}})]),s._v(" "),e("p",[s._v("这里 Source files 就是要传输的文件信息，Remove prefix是需要过滤的目录，文件传输完成之后会添加在配置ssh信息时填写的 data 目录下，然后再运行 Exec command 下配置的命令")]),s._v(" "),e("p",[s._v("这里几个配置项的用法，可以点后面的帮助信息了解，他不止支持配置文件路径，也可以配置带通配符的目录路径，也可以配置多个传输路径，可以灵活使用")]),s._v(" "),e("h3",{attrs:{id:"ssh推送节点自动部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh推送节点自动部署"}},[s._v("#")]),s._v(" ssh推送节点自动部署")]),s._v(" "),e("p",[s._v("这个时候基本配置已经完成，在 gitlab 中创建一个新的 tag，然后回调到 jenkins 后会自动触发构建，构建完成会将自动部署脚本传输到配置节点进行自动部署任务")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/11/16c7faa660a1fbe2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/11/16c7faa3c918df84?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),e("p",[s._v("以上是测试服务器在创建 tag 之前的 docker 的运行信息 3.png")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/11/16c7fab0075a9861?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/11/16c7fab14df389b2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),e("p",[s._v("以上是完成自动部署之后的 docker 的运行信息，已经完成镜像的自动部署")]),s._v(" "),e("h3",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),e("p",[s._v("目前完整流程已经全部完成，但是还是有几个问题")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("版本回退功能未实现")]),s._v(" "),e("p",[s._v("实现自动部署之后，如果有轻微的bug，可以紧急修复或者下个版本修复，但是对于严重的运行问题则需要整个版本回退，所以目前实现的功能上，需要增加版本回退的功能，可以考虑再建一个参数化手动构建或回退的task 来实现此功能")])]),s._v(" "),e("li",[e("p",[s._v("回退版本记录")]),s._v(" "),e("p",[s._v("通过 gitlab 的 tag推送 时间触发构建，构建的镜像名称是以 tag 名称来创建的，此时的 image 名称可读性比较好，但是如果想要回退版本时，必须要知道上一次的 image 的名称才可以 pull 上一次的 image，所以要完成回退一种是必须要在本地跟写入自动部署脚本一样，写入一个回退的脚本，然后需要回退时执行回退功能")]),s._v(" "),e("p",[s._v("或者就需要修改 image 命名规则，将使用构建记录编号作为image的名称，这时候直接去阿里云的 registry中查看不是很容易理解，但是可以利用jenkins自带的构建记录协助完成版本的前进和回退")])]),s._v(" "),e("li",[e("p",[s._v("各个节点状态的管理")]),s._v(" "),e("p",[s._v("利用目前的方式完成功能没有问题，但是想查看各个节点的 container 运行情况则比较困难，各个服务的部署情况对于配置 task 的人可能比较清楚，但是对于使用的研发人员则不是很了解，如果提供一个各个节点的状态查看及管理的工具则比较方便，后续继续了解 k8s 工具或其他的工具能够解决这个问题")])])]),s._v(" "),e("p",[s._v("后续会首先解决前面两个问题，完成版本的回退功能")])])}),[],!1,null,null,null);a.default=r.exports},399:function(s,a,t){s.exports=t.p+"assets/img/16c7fa89cbab7516.webp.8e273831.jpg"},400:function(s,a,t){s.exports=t.p+"assets/img/16c7fa91e43af7e5.webp.82c1233c.jpg"},401:function(s,a,t){s.exports=t.p+"assets/img/16c7fa990c856ab6.webp.7dc2e134.jpg"}}]);