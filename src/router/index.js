import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/MyAbout.vue";
import Home from "@/views/MyHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: () => import("@/views/MyBrazil.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () => import("@/views/MyJamaica.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import("@/views/MyPanama.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import("@/views/MyHawaii.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export const path =
  process.env.NODE_ENV === "production" ? "/travel-app/" : "/";

const router = createRouter({
  history: createWebHistory(path),
  routes,
  linkActiveClass: "active-link",
});

export default router;
