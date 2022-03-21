import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ShowCasePage from "@/views/ShowCasePage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomePage,
	},
	{ path: "/showcase", name: "Showcase", component: ShowCasePage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
