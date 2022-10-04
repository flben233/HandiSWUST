import indexPanel from "./views/index.vue"
import loginPanel from "./views/login.vue"
import courseTable from "./views/course.vue"
import aboutUs from "./views/about.vue"
import score from "./views/score.vue";
import { createRouter, createWebHashHistory } from 'vue-router'

const routers = [
	{path: "/", component: indexPanel},
	{path: "/login", component: loginPanel},
	{path: "/course", component: courseTable},
	{path: "/about", component: aboutUs},
	{path: "/score",component: score},

];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routers
});
export default router;