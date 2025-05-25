import { createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ServiceView from "@/views/ServiceView.vue";
import AssessmentsView from "@/views/AssessmentsView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import TestimonialsView from "@/views/TestimonialsView.vue";
import ContactSuccessView from "@/views/ContactSuccessView.vue";

export const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "Home | Rebecca Hughes Dyslexia Services",
            description: "I offer Dyslexia and Dyscalculia Assessment Services in Newton Abbot and Devon."
        },
    },
    {
        path: "/dyslexia-and-dyscalculia",
        name: "dyslexia-and-dyscalculia",
        component: ServiceView,
        meta: {
            title: "Dyslexia & Dyscalculia | Rebecca Hughes Dyslexia Services",
            description: "Learn more about Dyslexia and Dyscalculia and how I can help you or your child."
        },
        
    },
    {
        path: "/assessments",
        name: "assessments",
        component: AssessmentsView,
        meta: {
            title: "Dyslexia Assessments | Rebecca Hughes Dyslexia Services",
            description: "I offer Dyslexia and Dyscalculia Assessment Services in Newton Abbot and Devon."
        },
    },
    {
        path: "/testimonials",
        name: "testimonials",
        component: TestimonialsView,
        meta: {
            title: "Testimonials | Rebecca Hughes Dyslexia Services",
            description: "Read what my clients have to say about me."
        },
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
        meta: {
            title: "Contact me | Rebecca Hughes Dyslexia Services",
            description: "Contact Me | Rebecca Hughes Dyslexia Services in Newton Abbot. Get in touch today."
        },
    },
    {
        path: "/contact-success",
        name: "contact-success",
        component: ContactSuccessView,
        meta: {
            title: "Contact Success | RHDyslexia Services",
            description: "Thank you for contacting us!."
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFoundView,
        meta: {
            title: "404 Not Found | Dyslexia and Dyscalculia Assessment Services",
            description: "The page you are looking for could not be found. Please check the URL or go back to the homepage."
        },
    },
];
