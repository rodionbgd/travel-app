import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/MyHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
  },
  {
    path: "/destination/:id/:slug/:experienceSlug",
    name: "experience.show",
    component: () => import("@/views/ExperienceShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
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
