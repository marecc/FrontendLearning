import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redrict:"/buju/felx"
	},
	{
		path: "/buju",
		name: "buju",
		component: () => import("../views/布局/buju"),
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
        path:'/zujian/element',
        component: () => import("../views/组件/element")
      }
    ]
	},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
