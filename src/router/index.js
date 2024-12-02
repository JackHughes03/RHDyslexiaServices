import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ServiceView from "@/views/ServiceView.vue";
import AssessmentsView from "@/views/AssessmentsView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
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
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
        component: function () {
            return import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFoundView
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,

    scrollBehavior() {
        return { top: 0 };
    },
})

export default router;