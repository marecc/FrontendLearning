import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/loginPage"
	},
	{
		path: "/loginPage",
		name: "loginPage",
		component: () => import("../views/loginPage")
	},
	{
		path: "/mainPage",
		name: "mainPage",
		component: () => import("../views/mainPage"),
		children: [
			{
				path: "/bujuPage",
				name: "布局",
				component: () => import("../views/布局/bujuPage"),
				children: [
					{
						path: "flex",
						name: "flex",
						component: () => import("../views/布局/flex"),
					},
					{
						path: "grid",
						name: "grid",
						component: () => import("../views/布局/grid"),
					},
				],
			},
			{
				path: "/Basic",
				name: "Basic",
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import("../views/组件/basicPage")
			},
			{
				path: "/Form",
				name: "Form",
				component: () => import("../views/组件/formPage.vue"),
			},
		]
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
