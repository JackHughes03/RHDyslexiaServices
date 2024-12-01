import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ServiceView from "@/views/ServiceView.vue";
import AssessmentsView from "@/views/AssessmentsView.vue";

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
    {
        path: "/assessments",
        name: "assessments",
        component: AssessmentsView,
        component: function () {
            return import(/* webpackChunkName: "assessments" */ '../views/AssessmentsView.vue')
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router;