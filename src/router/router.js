import { createRouter, createWebHistory } from 'vue-router'
import TheHomeView from '../views/TheHomeView.vue'
import TheCartView from '../views/TheCartView.vue'

const routes = [
	{
		name: "cart",
		path: "/cart",
		component: TheCartView
	},
	{
		name: "home",
		path: "/",
		component: TheHomeView
	},
	
]
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router