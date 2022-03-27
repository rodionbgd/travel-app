import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/MyAbout.vue";
import Home from "@/views/MyHome.vue";
import Brazil from "@/views/MyBrazil.vue";
import Hawaii from "@/views/MyHawaii.vue";
import Panama from "@/views/MyPanama.vue";
import Jamaica from "@/views/MyJamaica.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: Brazil,
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: Jamaica,
  },
  {
    path: "/panama",
    name: "Panama",
    component: Panama,
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: Hawaii,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const path = process.env.NODE_ENV === "production" ? "/travel-app/" : "./";

const router = createRouter({
  history: createWebHistory(path),
  routes,
});

export default router;
