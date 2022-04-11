import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/MyHome.vue";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/protected",
    name: "protected",
    components: {
      default: () => import("@/views/TheProtected.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices",
    name: "invoices",
    components: {
      default: () => import("@/views/TheInvoices.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/TheLogin.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: "/home",
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter: (to) => {
      const isExist = sourceData.destinations.find(
        (destination) =>
          destination.id === parseInt(to.params.id) &&
          destination.slug === to.params.slug
      );
      if (!isExist) {
        return {
          name: "NotFound",
          params: { pathMatch: to.path.substring(1).split("/") },
          query: to.query,
          hash: to.hash,
        };
      }
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/NotFound.vue"),
  },
];

export const path =
  process.env.NODE_ENV === "production" ? "/travel-app/" : "/";

const router = createRouter({
  history: createWebHistory(path),
  routes,
  linkActiveClass: "active-link",
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      (to.name !== "experience.show" &&
        new Promise((resolve) =>
          setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 300)
        ))
    );
  },
});

router.beforeEach((to) => {
  if (to.meta?.requiresAuth && !window.user) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
});
export default router;
