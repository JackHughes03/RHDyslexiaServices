<script setup>
import { ref, onMounted, createApp } from 'vue';

import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import Whatis from '../components/Whatis.vue';
import NavBar from '../components/NavBar.vue';
import Introwhatis from '../components/Introwhatis.vue';
</script>

<template>
    <NavBar />
    <Introwhatis title="Dyslexia & Dyscalculia - what is it?" description="I understand that Dyslexia and Dyscalculia can be difficult to understand. 
            However, if your child is struggling with one of these specific learning difficulties, it's useful to 
            have as much information as possible. If you have any questions about either of these conditions, I am 
            happy to communicate via email. I also offer Dyslexia and Dyscalculia 
            <strong class='italic underline decoration-primary decoration-2'>assessments</strong>
            throughout Newton Abbot and Devon if required." />
    <Whatis />
    <CTA :image="true" />
    <Footer />
</template>
