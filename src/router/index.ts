import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Index.vue";
const Blog = () => import("../views/blog/Index.vue");
const About = () => import("../views/about/Index.vue");
const Show = () => import("../views/show/Index.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/show",
    name: "Show",
    component: Show,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
