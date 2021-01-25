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
				name: "bujuPage",
				component: () => import("../views/布局/bujuPage"),
				children: [
					{
						path: "flex",
						component: () => import("../views/布局/flex"),
					},
					{
						path: "grid",
						component: () => import("../views/布局/grid"),
					},
				],
			},
			{
				path: "/zujian",
				name: "zujian",
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import("../views/组件/componentPage"),
				children: [
					{
						path: '/zujian/element',
						component: () => import("../views/组件/element")
					}
				]
			},
			{
				path: "/playground",
				name: "playground",
				component: () => import("../views/playground.vue"),
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
