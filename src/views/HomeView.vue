<script setup>
import { ref, onMounted, createApp } from 'vue';

import Hero from '../components/Hero.vue';
import Services from '../components/Services.vue';
import AboutMe from '../components/AboutMe.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import NavBar from '../components/NavBar.vue';
</script>

<template>
    <NavBar />
    <Hero />
    <Services />
    <AboutMe />
    <CTA />
    <Footer />
</template>
