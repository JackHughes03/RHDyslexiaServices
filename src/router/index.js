import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ServiceView from "@/views/ServiceView.vue";
import AssessmentsView from "@/views/AssessmentsView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ContactSuccessView from "@/views/ContactSuccessView.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/dyslexia-and-dyscalculia",
        name: "dyslexia-and-dyscalculia",
        component: ServiceView,
    },
    {
        path: "/assessments",
        name: "assessments",
        component: AssessmentsView,
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
    },
    {
        path: "/contact-success",
        name: "contact-success",
        component: ContactSuccessView,
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