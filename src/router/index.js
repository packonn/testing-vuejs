import { createRouter, createWebHistory } from "vue-router";
import Pagination from "../views/Pagination.vue";
import Home from "../views/Home.vue";
import Todo from "@/views/Todo.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: Home,
		},
		{
			path: "/pagination",
			name: "pagination",
			component: Pagination,
		},
		{
			path: "/todo",
			name: "todo",
			component: Todo,
		},
	],
});

export default router;
