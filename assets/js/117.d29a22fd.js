(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{977:function(s,n,a){"use strict";a.r(n);var t=a(42),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-compose-实战-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-实战-nginx"}},[s._v("#")]),s._v(" Docker Compose 实战 Nginx")]),s._v(" "),a("h2",{attrs:{id:"docker-compose部署nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose部署nginx"}},[s._v("#")]),s._v(" Docker Compose部署Nginx")]),s._v(" "),a("h3",{attrs:{id:"docker-compose-yml内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml内容"}},[s._v("#")]),s._v(" docker-compose.yml内容")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nginx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.16.0\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("80:80")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 443"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./nginx/conf.d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/conf.d                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#映射配置文件所在目录")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./nginx/logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/log/nginx                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#映射日志文件所在目录")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./nginx/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/html/html                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#映射nginx的网页目录")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./nginx/cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/cert                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#映射https证书目录")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"启动容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),a("p",[s._v("命令: "),a("code",[s._v("docker-compose up -d")])]),s._v(" "),a("h3",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("ol",[a("li",[s._v("我们的nginx配置文件在"),a("code",[s._v("/usr/local/docker/nginx/conf.d")]),s._v("这个目录")]),s._v(" "),a("li",[a("code",[s._v("proxy_pass http://xxx.xxx.xxx.xx:8080;")]),s._v(" 这个的配置是有讲究的 "),a("strong",[s._v("这里需要说明一下,由于docker的网络问题,我们填127.0.0.1是不可行的因为127.0.0.1是docker容器内的网络,不是我们宿主机的网络,所以就不能指向正确的路径我们需要填内网的ip地址例如:192.168.1.222,这样才是可以行的")])])]),s._v(" "),a("h3",{attrs:{id:"容器内nginx-conf文件内容如下："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器内nginx-conf文件内容如下："}},[s._v("#")]),s._v(" 容器内nginx.conf文件内容如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("\nuser  nginx;\nworker_processes  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(";\n\nerror_log  /var/log/nginx/error.log warn;\npid        /var/run/nginx.pid;\n\n\nevents "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    worker_connections  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  '$remote_addr - $remote_user "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$time_local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$request"')]),s._v(" '\n                      '$status $body_bytes_sent "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$http_referer"')]),s._v(" '\n                      '"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$http_user_agent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$http_x_forwarded_for"')]),s._v("';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    keepalive_timeout  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),s._v(";\n\n    #gzip  on;\n\n    include /etc/nginx/conf.d"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*.conf;\n}\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("p",[s._v("注意配置文件的最后一条配置："),a("code",[s._v("include /etc/nginx/conf.d/*.conf;")]),s._v("这个配置意思就是要包含"),a("code",[s._v("/etc/nginx/conf.d")]),s._v("目录下的所有conf配置文件，所以我们的配置文件就最好放到这个目录下。")]),s._v(" "),a("h3",{attrs:{id:"default-conf文件内容如下："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-conf文件内容如下："}},[s._v("#")]),s._v(" "),a("code",[s._v("default.conf")]),s._v("文件内容如下：")]),s._v(" "),a("p",[s._v("在/etc/nginx/conf.d/目录下，默认只有一个default.conf，内容如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(";\n    server_name  localhost;\n\n    #charset koi"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("-r;\n    #access_log  /var/log/nginx/host.access.log  main;\n\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    #error_page  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("              /"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404.")]),s._v("html;\n\n    # redirect server error pages to the static page /"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("x.html\n    #\n    error_page   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  /"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("x.html;\n    location = /"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("x.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root   /usr/share/nginx/html;\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    # proxy the PHP scripts to Apache listening on "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    #\n    #location ~ \\.php$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    #    proxy_pass   http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//127.0.0.1;")]),s._v("\n    #"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    # pass the PHP scripts to FastCGI server listening on "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v("\n    #\n    #location ~ \\.php$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    #    root           html;\n    #    fastcgi_pass   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(";\n    #    fastcgi_index  index.php;\n    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n    #    include        fastcgi_params;\n    #"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    # deny access to .htaccess files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" if Apache's document root\n    # concurs with nginx's one\n    #\n    #location ~ /\\.ht "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    #    deny  all;\n    #"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("h2",{attrs:{id:"nginx配置ssl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置ssl"}},[s._v("#")]),s._v(" nginx配置ssl")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("从阿里云上购买免费的SSL证书 "),a("a",{attrs:{href:"https://www.aliyun.com/product/cas",target:"_blank",rel:"noopener noreferrer"}},[s._v("购买链接:https://www.aliyun.com/product/cas"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("下载证书")])]),s._v(" "),a("li",[a("p",[s._v("配置default.conf，其实这一步也是超级简单的，我直接贴上代码，在代码里面说明")])])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       listen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(";\n       listen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl;#这个是https访问的端口\n       server_name k.lengff.xyz;#域名地址\n\n\n       #增加ssl\n       ssl on;                 #如果强制HTTPs访问，这行要打开\n       ssl_certificate         /etc/nginx/cert/klengff.pem;#证书公钥文件路径\n       ssl_certificate_key     /etc/nginx/cert/klengff.key;#证书私钥文件路径\n       \n       ssl_session_cache    shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("SSL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m;\n       ssl_session_timeout  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("m; #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("分钟session会话保持\n       \n       ssl_protocols SSLv"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" TLSv"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" TLSv"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" TLSv"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(";# 指定密码为openssl支持的格式       \n       ssl_ciphers  HIGH"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("!ADH"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("!EXPORT"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("RC"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("+RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("+MEDIUM;  # 密码加密方式\n       ssl_prefer_server_ciphers on;   #依赖SSLv"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("和TLSv"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("协议的服务器密码将优先于客户端密码\n           \n       location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           #这里需要说明一下"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("由于docker的网络问题"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("我们填"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("是不可行的\n           #因为"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("是docker容器内的网络"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("不是我们宿主机的网络"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("所以就不能指向正确的路径\n           #我们需要填内网的ip地址例如"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("这样才是可以行的\n           proxy_pass http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//xxx.xxx.xxx.xx:8080;")]),s._v("\n           proxy_set_header   Host             $host;\n           proxy_set_header   X-Real-IP        $remote_addr;\n           proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       error_page "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("          /"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404.")]),s._v("html;\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);