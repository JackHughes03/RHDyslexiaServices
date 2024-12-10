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
        meta: {
            title: "Home | Rebecca Hughes Dyslexia Services",
            description: "Looking for Boys Schools, Catholic Schools, Colleges in NEWTON ABBOT, devon? Contact us today."
        },
    },
    {
        path: "/dyslexia-and-dyscalculia",
        name: "dyslexia-and-dyscalculia",
        component: ServiceView,
        meta: {
            title: "Dyslexia & Dyscalculia | Rebecca Hughes Dyslexia Services",
            description: "Rebecca Hughes Dyslexia Services has extensive knowledge regarding Dyslexia & Dyscalculia and can help children and young adults in Newton Abbot and Devon."
        },
    },
    {
        path: "/assessments",
        name: "assessments",
        component: AssessmentsView,
        meta: {
            title: "Dyslexia Assessments | Rebecca Hughes Dyslexia Services",
            description: "Rebecca Hughes Dyslexia Services provide dyslexia and dyscalculia screening assessments for children and young adults in Newton Abbot and Devon."
        },
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
        meta: {
            title: "Contact us at Rebecca Hughes Dyslexia Services",
            description: "Contact details for Rebecca Hughes Dyslexia Services in Newton Abbot. Get in touch today."
        },
    },
    {
        path: "/contact-success",
        name: "contact-success",
        component: ContactSuccessView,
        meta: {
            title: "Contact Success | RHDyslexia Services",
            description: "Thank you for contacting us! We will get back to you shortly regarding your Dyslexia and Dyscalculia inquiry."
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

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

// Navigation guard to update meta tags dynamically
router.beforeEach((to, from, next) => {
    // Update the document title from route meta
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }

    // Optionally update other meta tags (e.g., description)
    if (to.meta && to.meta.description) {
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
            descriptionTag.setAttribute('content', to.meta.description);
        } else {
            const newDescriptionTag = document.createElement('meta');
            newDescriptionTag.setAttribute('name', 'description');
            newDescriptionTag.setAttribute('content', to.meta.description);
            document.head.appendChild(newDescriptionTag);
        }
    }

    next();
});

export default router;
