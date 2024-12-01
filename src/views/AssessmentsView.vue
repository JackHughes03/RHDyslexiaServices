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
    <Introwhatis title="Dyslexia diagnostic Assessments in newton abbot and devon"
        description="I can complete full or shorter diagnostic screening assessments for Dyslexia and for Dyscalculia. If you are worried that your child might be struggling with one of these specific learning difficulties, please get in touch. To book an assessment in Newton Abbot or Devon, please drop me an email at info@rhdyslexiaservices.co.uk as soon as possible." />
    <CTA />
    <Footer />
</template>
