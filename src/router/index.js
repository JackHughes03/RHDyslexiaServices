import { createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

export const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "Lexety",
            description: "Home"
        },
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
        meta: {
            title: "Contact me",
            description: "Contact Me"
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFoundView,
        meta: {
            title: "404 Not Found",
            description: "The page you are looking for could not be found. Please check the URL or go back to the homepage."
        },
    },
];
