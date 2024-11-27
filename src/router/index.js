import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ServiceView from "@/views/ServiceView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        component: function () {
            return import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
        },
    },
    {
        path: "/service",
        name: "service",
        component: ServiceView,
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/ServiceView.vue')
          },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router;