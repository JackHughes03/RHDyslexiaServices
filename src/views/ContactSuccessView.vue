<script setup>
import { ref, onMounted, createApp } from 'vue';

import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

// useSeoMeta({
//     robots: 'noindex, follow',
//     title: 'Contact Success',
//     description: 'Thanks for your message, i\'ll get back to you as soon as possible!',
// });
</script>

<template>
    <NavBar />

    <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
        <h2
            class="text-green-300 text-center text-bold text-xl">
            Thanks for your message, i'll get back to you as soon as possible!</h2>

        <router-link to="/" class="primary-button !bg-black/20 text-white">Return home</router-link>
    </div>
</template>
