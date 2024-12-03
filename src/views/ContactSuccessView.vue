<script setup>
import { ref, onMounted, createApp } from 'vue';

import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
</script>

<template>
    <NavBar />

    <h2 class="text-green-300 text-center text-bold text-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        Thanks for your message, i'll get back to you as soon as possible!</h2>
</template>
