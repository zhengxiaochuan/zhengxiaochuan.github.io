module.exports = {
    // 这是部署到github相关的配置	
    base: '/',
    title: '狸猫小僧',
    description: 'YunDingXuan',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json'}]
    ],
    markdown: {
    	//显示行号
	  	lineNumbers: true
	}, 
    //站点多语言配置
    locales: { 	
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
          title: '狸猫小僧',
          description: '记录点滴足迹  保留美好时光'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: '狸猫小僧',
          description: '记录点滴足迹  保留美好时光'
        }
    },       
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/zhengxiaochuan',
        // 自定义仓库链接文字。
        repoLabel: '官网',
        //默认主题多语言配置
        locales: {
        	//英文
	        '/': {
		        selectText: 'Languages',
		        label: 'English',
				editLinkText: 'Edit this page on GitHub',
				lastUpdated: "Last Updated",
    			searchMaxSuggestoins: 10,
		        serviceWorker: {
		          updatePopup: {
		            message: "New content is available.",
		            buttonText: "Refresh"
		          }
		        },
		        algolia: {},
		        nav: require("./nav.js"),
		        sidebar: require("./sidebar.js"),
	        },
	        //中文
	        '/zh/': {
		        // 多语言下拉菜单的标题
		        selectText: '选择语言',
		        // 该语言在下拉菜单中的标签
		        label: '简体中文',
		        // 编辑链接文字
		        editLinkText: '在 GitHub 上编辑此页',
		        // Service Worker 的配置
		        serviceWorker: {
		          updatePopup: {
		            message: "发现新内容可用.",
		            buttonText: "刷新"
		          }
		        },
		        // 当前 locale 的 algolia docsearch 选项
		        algolia: {},
		        nav: require("./nav.js"),
		        sidebar: require("./sidebar.js"),
            	sidebarDepth: 2,
        		lastUpdated: '上次更新',
	      	}
        }
        
    }
}