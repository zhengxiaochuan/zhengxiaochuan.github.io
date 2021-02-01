(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1013:function(v,e,_){"use strict";_.r(e);var s=_(42),o=Object(s.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"docker-compose-命令说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-命令说明"}},[v._v("#")]),v._v(" Docker Compose 命令说明")]),v._v(" "),_("h2",{attrs:{id:"命令对象与格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令对象与格式"}},[v._v("#")]),v._v(" 命令对象与格式")]),v._v(" "),_("p",[v._v("对于 Compose 来说，大部分命令的对象既可以是项目本身，也可以指定为项目中的服务或者容器。如果没有特别的说明，命令对象将是项目，这意味着项目中所有的服务都会受到命令影响。")]),v._v(" "),_("p",[v._v("执行 "),_("code",[v._v("docker-compose [COMMAND] --help")]),v._v(" 或者 "),_("code",[v._v("docker-compose help [COMMAND]")]),v._v(" 可以查看具体某个命令的使用格式。")]),v._v(" "),_("p",[_("code",[v._v("docker-compose")]),v._v(" 命令的基本的使用格式是")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("docker-compose "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("-f"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("arg"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("..")]),v._v("."),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("options"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("COMMAND"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("ARGS"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("..")]),v._v("."),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("h2",{attrs:{id:"命令选项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令选项"}},[v._v("#")]),v._v(" 命令选项")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-f, --file FILE")]),v._v(" 指定使用的 Compose 模板文件，默认为 "),_("code",[v._v("docker-compose.yml")]),v._v("，可以多次指定。")]),v._v(" "),_("li",[_("code",[v._v("-p, --project-name NAME")]),v._v(" 指定项目名称，默认将使用所在目录名称作为项目名。")]),v._v(" "),_("li",[_("code",[v._v("--x-networking")]),v._v(" 使用 Docker 的可拔插网络后端特性")]),v._v(" "),_("li",[_("code",[v._v("--x-network-driver DRIVER")]),v._v(" 指定网络后端的驱动，默认为 "),_("code",[v._v("bridge")])]),v._v(" "),_("li",[_("code",[v._v("--verbose")]),v._v(" 输出更多调试信息。")]),v._v(" "),_("li",[_("code",[v._v("-v, --version")]),v._v(" 打印版本并退出。")])]),v._v(" "),_("h2",{attrs:{id:"build"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[v._v("#")]),v._v(" "),_("code",[v._v("build")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose build [options] [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("构建（重新构建）项目中的服务容器。")]),v._v(" "),_("p",[v._v("服务容器一旦构建后，将会带上一个标记名，例如对于 web 项目中的一个 db 容器，可能是 web_db。")]),v._v(" "),_("p",[v._v("可以随时在项目目录下运行 "),_("code",[v._v("docker-compose build")]),v._v(" 来重新构建服务。")]),v._v(" "),_("p",[v._v("选项包括：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("--force-rm")]),v._v(" 删除构建过程中的临时容器。")]),v._v(" "),_("li",[_("code",[v._v("--no-cache")]),v._v(" 构建镜像过程中不使用 cache（这将加长构建过程）。")]),v._v(" "),_("li",[_("code",[v._v("--pull")]),v._v(" 始终尝试通过 pull 来获取更新版本的镜像。")])]),v._v(" "),_("h2",{attrs:{id:"config"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[v._v("#")]),v._v(" "),_("code",[v._v("config")])]),v._v(" "),_("p",[v._v("验证 Compose 文件格式是否正确，若正确则显示配置，若格式错误显示错误原因。")]),v._v(" "),_("h2",{attrs:{id:"down"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#down"}},[v._v("#")]),v._v(" "),_("code",[v._v("down")])]),v._v(" "),_("p",[v._v("此命令将会停止 "),_("code",[v._v("up")]),v._v(" 命令所启动的容器，并移除网络")]),v._v(" "),_("h2",{attrs:{id:"exec"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#exec"}},[v._v("#")]),v._v(" "),_("code",[v._v("exec")])]),v._v(" "),_("p",[v._v("进入指定的容器。")]),v._v(" "),_("h2",{attrs:{id:"help"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[v._v("#")]),v._v(" "),_("code",[v._v("help")])]),v._v(" "),_("p",[v._v("获得一个命令的帮助。")]),v._v(" "),_("h2",{attrs:{id:"images"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#images"}},[v._v("#")]),v._v(" "),_("code",[v._v("images")])]),v._v(" "),_("p",[v._v("列出 Compose 文件中包含的镜像。")]),v._v(" "),_("h2",{attrs:{id:"kill"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kill"}},[v._v("#")]),v._v(" "),_("code",[v._v("kill")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose kill [options] [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("通过发送 "),_("code",[v._v("SIGKILL")]),v._v(" 信号来强制停止服务容器。")]),v._v(" "),_("p",[v._v("支持通过 "),_("code",[v._v("-s")]),v._v(" 参数来指定发送的信号，例如通过如下指令发送 "),_("code",[v._v("SIGINT")]),v._v(" 信号。")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("$ docker-compose "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("kill")]),v._v(" -s SIGINT\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("h2",{attrs:{id:"logs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[v._v("#")]),v._v(" "),_("code",[v._v("logs")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose logs [options] [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("查看服务容器的输出。默认情况下，docker-compose 将对不同的服务输出使用不同的颜色来区分。可以通过 "),_("code",[v._v("--no-color")]),v._v(" 来关闭颜色。")]),v._v(" "),_("p",[v._v("该命令在调试问题的时候十分有用。")]),v._v(" "),_("h2",{attrs:{id:"pause"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pause"}},[v._v("#")]),v._v(" "),_("code",[v._v("pause")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose pause [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("暂停一个服务容器。")]),v._v(" "),_("h2",{attrs:{id:"port"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[v._v("#")]),v._v(" "),_("code",[v._v("port")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose port [options] SERVICE PRIVATE_PORT")]),v._v("。")]),v._v(" "),_("p",[v._v("打印某个容器端口所映射的公共端口。")]),v._v(" "),_("p",[v._v("选项：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("--protocol=proto")]),v._v(" 指定端口协议，tcp（默认值）或者 udp。")]),v._v(" "),_("li",[_("code",[v._v("--index=index")]),v._v(" 如果同一服务存在多个容器，指定命令对象容器的序号（默认为 1）。")])]),v._v(" "),_("h2",{attrs:{id:"ps"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[v._v("#")]),v._v(" "),_("code",[v._v("ps")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose ps [options] [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("列出项目中目前的所有容器。")]),v._v(" "),_("p",[v._v("选项：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-q")]),v._v(" 只打印容器的 ID 信息。")])]),v._v(" "),_("h2",{attrs:{id:"pull"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[v._v("#")]),v._v(" "),_("code",[v._v("pull")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose pull [options] [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("拉取服务依赖的镜像。")]),v._v(" "),_("p",[v._v("选项：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("--ignore-pull-failures")]),v._v(" 忽略拉取镜像过程中的错误。")])]),v._v(" "),_("h2",{attrs:{id:"push"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[v._v("#")]),v._v(" "),_("code",[v._v("push")])]),v._v(" "),_("p",[v._v("推送服务依赖的镜像到 Docker 镜像仓库。")]),v._v(" "),_("h2",{attrs:{id:"restart"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#restart"}},[v._v("#")]),v._v(" "),_("code",[v._v("restart")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose restart [options] [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("重启项目中的服务。")]),v._v(" "),_("p",[v._v("选项：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-t, --timeout TIMEOUT")]),v._v(" 指定重启前停止容器的超时（默认为 10 秒）。")])]),v._v(" "),_("h2",{attrs:{id:"rm"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rm"}},[v._v("#")]),v._v(" "),_("code",[v._v("rm")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose rm [options] [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("删除所有（停止状态的）服务容器。推荐先执行 "),_("code",[v._v("docker-compose stop")]),v._v(" 命令来停止容器。")]),v._v(" "),_("p",[v._v("选项：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-f, --force")]),v._v(" 强制直接删除，包括非停止状态的容器。一般尽量不要使用该选项。")]),v._v(" "),_("li",[_("code",[v._v("-v")]),v._v(" 删除容器所挂载的数据卷。")])]),v._v(" "),_("h2",{attrs:{id:"run"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[v._v("#")]),v._v(" "),_("code",[v._v("run")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose run [options] [-p PORT...] [-e KEY=VAL...] SERVICE [COMMAND] [ARGS...]")]),v._v("。")]),v._v(" "),_("p",[v._v("在指定服务上执行一个命令。")]),v._v(" "),_("p",[v._v("例如：")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("$ docker-compose run ubuntu "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("ping")]),v._v(" docker.com\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("将会启动一个 ubuntu 服务容器，并执行 "),_("code",[v._v("ping docker.com")]),v._v(" 命令。")]),v._v(" "),_("p",[v._v("默认情况下，如果存在关联，则所有关联的服务将会自动被启动，除非这些服务已经在运行中。")]),v._v(" "),_("p",[v._v("该命令类似启动容器后运行指定的命令，相关卷、链接等等都将会按照配置自动创建。")]),v._v(" "),_("p",[v._v("两个不同点：")]),v._v(" "),_("ul",[_("li",[v._v("给定命令将会覆盖原有的自动运行命令；")]),v._v(" "),_("li",[v._v("不会自动创建端口，以避免冲突。")])]),v._v(" "),_("p",[v._v("如果不希望自动启动关联的容器，可以使用 "),_("code",[v._v("--no-deps")]),v._v(" 选项，例如")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("$ docker-compose run --no-deps web python manage.py shell\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("将不会启动 web 容器所关联的其它容器。")]),v._v(" "),_("p",[v._v("选项：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-d")]),v._v(" 后台运行容器。")]),v._v(" "),_("li",[_("code",[v._v("--name NAME")]),v._v(" 为容器指定一个名字。")]),v._v(" "),_("li",[_("code",[v._v("--entrypoint CMD")]),v._v(" 覆盖默认的容器启动指令。")]),v._v(" "),_("li",[_("code",[v._v("-e KEY=VAL")]),v._v(" 设置环境变量值，可多次使用选项来设置多个环境变量。")]),v._v(" "),_("li",[_("code",[v._v('-u, --user=""')]),v._v(" 指定运行容器的用户名或者 uid。")]),v._v(" "),_("li",[_("code",[v._v("--no-deps")]),v._v(" 不自动启动关联的服务容器。")]),v._v(" "),_("li",[_("code",[v._v("--rm")]),v._v(" 运行命令后自动删除容器，"),_("code",[v._v("d")]),v._v(" 模式下将忽略。")]),v._v(" "),_("li",[_("code",[v._v("-p, --publish=[]")]),v._v(" 映射容器端口到本地主机。")]),v._v(" "),_("li",[_("code",[v._v("--service-ports")]),v._v(" 配置服务端口并映射到本地主机。")]),v._v(" "),_("li",[_("code",[v._v("-T")]),v._v(" 不分配伪 tty，意味着依赖 tty 的指令将无法运行。")])]),v._v(" "),_("h2",{attrs:{id:"scale"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#scale"}},[v._v("#")]),v._v(" "),_("code",[v._v("scale")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose scale [options] [SERVICE=NUM...]")]),v._v("。")]),v._v(" "),_("p",[v._v("设置指定服务运行的容器个数。")]),v._v(" "),_("p",[v._v("通过 "),_("code",[v._v("service=num")]),v._v(" 的参数来设置数量。例如：")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("$ docker-compose scale "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[v._v("web")]),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("3")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[v._v("db")]),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("2")]),v._v("\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("将启动 3 个容器运行 web 服务，2 个容器运行 db 服务。")]),v._v(" "),_("p",[v._v("一般的，当指定数目多于该服务当前实际运行容器，将新创建并启动容器；反之，将停止容器。")]),v._v(" "),_("p",[v._v("选项：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-t, --timeout TIMEOUT")]),v._v(" 停止容器时候的超时（默认为 10 秒）。")])]),v._v(" "),_("h2",{attrs:{id:"start"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[v._v("#")]),v._v(" "),_("code",[v._v("start")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose start [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("启动已经存在的服务容器。")]),v._v(" "),_("h2",{attrs:{id:"stop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[v._v("#")]),v._v(" "),_("code",[v._v("stop")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose stop [options] [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("停止已经处于运行状态的容器，但不删除它。通过 "),_("code",[v._v("docker-compose start")]),v._v(" 可以再次启动这些容器。")]),v._v(" "),_("p",[v._v("选项：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-t, --timeout TIMEOUT")]),v._v(" 停止容器时候的超时（默认为 10 秒）。")])]),v._v(" "),_("h2",{attrs:{id:"top"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[v._v("#")]),v._v(" "),_("code",[v._v("top")])]),v._v(" "),_("p",[v._v("查看各个服务容器内运行的进程。")]),v._v(" "),_("h2",{attrs:{id:"unpause"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#unpause"}},[v._v("#")]),v._v(" "),_("code",[v._v("unpause")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose unpause [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("恢复处于暂停状态中的服务。")]),v._v(" "),_("h2",{attrs:{id:"up"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#up"}},[v._v("#")]),v._v(" "),_("code",[v._v("up")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose up [options] [SERVICE...]")]),v._v("。")]),v._v(" "),_("p",[v._v("该命令十分强大，它将尝试自动完成包括构建镜像，（重新）创建服务，启动服务，并关联服务相关容器的一系列操作。")]),v._v(" "),_("p",[v._v("链接的服务都将会被自动启动，除非已经处于运行状态。")]),v._v(" "),_("p",[v._v("可以说，大部分时候都可以直接通过该命令来启动一个项目。")]),v._v(" "),_("p",[v._v("默认情况，"),_("code",[v._v("docker-compose up")]),v._v(" 启动的容器都在前台，控制台将会同时打印所有容器的输出信息，可以很方便进行调试。")]),v._v(" "),_("p",[v._v("当通过 "),_("code",[v._v("Ctrl-C")]),v._v(" 停止命令时，所有容器将会停止。")]),v._v(" "),_("p",[v._v("如果使用 "),_("code",[v._v("docker-compose up -d")]),v._v("，将会在后台启动并运行所有的容器。一般推荐生产环境下使用该选项。")]),v._v(" "),_("p",[v._v("默认情况，如果服务容器已经存在，"),_("code",[v._v("docker-compose up")]),v._v(" 将会尝试停止容器，然后重新创建（保持使用 "),_("code",[v._v("volumes-from")]),v._v(" 挂载的卷），以保证新启动的服务匹配 "),_("code",[v._v("docker-compose.yml")]),v._v(" 文件的最新内容。如果用户不希望容器被停止并重新创建，可以使用 "),_("code",[v._v("docker-compose up --no-recreate")]),v._v("。这样将只会启动处于停止状态的容器，而忽略已经运行的服务。如果用户只想重新部署某个服务，可以使用 "),_("code",[v._v("docker-compose up --no-deps -d <SERVICE_NAME>")]),v._v(" 来重新创建服务并后台停止旧服务，启动新服务，并不会影响到其所依赖的服务。")]),v._v(" "),_("p",[v._v("选项：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-d")]),v._v(" 在后台运行服务容器。")]),v._v(" "),_("li",[_("code",[v._v("--no-color")]),v._v(" 不使用颜色来区分不同的服务的控制台输出。")]),v._v(" "),_("li",[_("code",[v._v("--no-deps")]),v._v(" 不启动服务所链接的容器。")]),v._v(" "),_("li",[_("code",[v._v("--force-recreate")]),v._v(" 强制重新创建容器，不能与 "),_("code",[v._v("--no-recreate")]),v._v(" 同时使用。")]),v._v(" "),_("li",[_("code",[v._v("--no-recreate")]),v._v(" 如果容器已经存在了，则不重新创建，不能与 "),_("code",[v._v("--force-recreate")]),v._v(" 同时使用。")]),v._v(" "),_("li",[_("code",[v._v("--no-build")]),v._v(" 不自动构建缺失的服务镜像。")]),v._v(" "),_("li",[_("code",[v._v("-t, --timeout TIMEOUT")]),v._v(" 停止容器时候的超时（默认为 10 秒）。")])]),v._v(" "),_("h2",{attrs:{id:"version"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[v._v("#")]),v._v(" "),_("code",[v._v("version")])]),v._v(" "),_("p",[v._v("格式为 "),_("code",[v._v("docker-compose version")]),v._v("。")]),v._v(" "),_("p",[v._v("打印版本信息。")])])}),[],!1,null,null,null);e.default=o.exports}}]);