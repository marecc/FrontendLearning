// const webpack = require("webpack");
module.exports = {
	//部署应用包时的基本 URL
	// process.env.NODE_ENV,前段的process.env.为公共部分,后边的NODE_ENV为指向的环境文件的名称
	//根据自己设置的环境不同使用不同的配置,还需创建
	publicPath: process.env.NODE_ENV === "production" ? "/online/" : "/",
	//当运行 vue-cli-service build 时生成的生产环境构建文件的目录
	outputDir: "dist",
	//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录位于同一目录下
	assetsDir: "assets",
	// eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
	lintOnSave: true,
	//是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
	runtimeCompiler: true,
	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: true,
	//下方包含vueconfig.js中的配置
	//package.json中的script中配置多种环境配置，运行时使用对应的名称，例如：npm run test
	// scripts: {
	//  环境名称:"启动配置"
	// 	serve: "vue-cli-service serve",
	// 	build: "vue-cli-service build",
	// 	test: "vue-cli-service serve --mode test",
	// },
	// 用法:vue-cli-service serve [options] [entry]
	// 选项:
	//   --open    在服务器启动时打开浏览器
	//   --copy    在服务器启动时将 URL 复制到剪切版
	//   --mode    指定环境模式 (默认值：development)
	//   --host    指定 host (默认值：0.0.0.0)
	//   --port    指定 port (默认值：8080)
	//   --https   使用 https (默认值：false)
	//结束
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === "production") {
			// 为生产环境修改配置...
		} else {
			// 为开发环境修改配置...
		}
	},
	// css相关配置
	css: {
		// 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
		extract: true,
		// 开启 CSS source maps?
		//针对打包后的代码进行的处理，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，将直接显示原始代码，而不是转换后的代码。
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {},
	},
	// webpack-dev-server 相关配置
	devServer: {
		// 设置代理
		hot: true, //热加载
		host: "0.0.0.0", //ip地址
		// port: 8085, //端口,不设置时端口号时自动设置
		https: false, //false关闭https，true为开启后本地运行浏览器报不安全链接，仍可使用
		open: true, //自动打开浏览器
		proxy: {//
			"/api": {
				//本地
				target: "xxx",
				// 如果要代理 websockets
				ws: true,
				changeOrigin: true,
			},
			"/test": {
				//测试
				target: "xxx",
			},
			"/pre": {
				//预发布
				target: "xxx",
			},
			"/pro": {
				//正式
				target: "xxx",
			},
		},
	},
	pluginOptions: {
		// 第三方插件配置
		// ...
	},
};
