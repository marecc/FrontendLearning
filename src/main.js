import Vue from 'vue'//vue
import ElementUI from "element-ui";//element
import "element-ui/lib/theme-chalk/index.css";//element
import routerpage from "./routerpage.vue";
import loginPage from "./views/loginPage.vue";//vue挂载页面
import router from './router'//路由
import store from './store'//vuex


Vue.use(ElementUI)

Vue.config.productionTip = true

const vue = new Vue({
	router,
	store,
	render: (h) => h(routerpage),
}).$mount("#app");

export default vue