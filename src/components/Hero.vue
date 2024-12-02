<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div>
        <header class="md:h-[700px] h-[500px] flex items-center justify-center">
            <div
                class="bg-black/50 absolute top-0 left-0 md:p-20 sm:p-10 md:pt-40 sm:pt-24 pt-20 p-6 w-full md:h-[700px] h-[500px]">

                <div class="text-white max-w-4xl">
                    <h1 class="md:text-5xl text-3xl uppercase">DYSLEXIA AND DYSCALCULIA SERVICES & ASSESSMENTS in devon
                    </h1>
                    <p class="font-light mt-4 md:text-lg text-sm">I can help children and young adults throughout Newton
                        Abbot and Devon. I
                        am fully qualified and DBS
                        checked, so you can rest assured that your child is in safe hands. For further information,
                        don't
                        hesitate to contact me via email.</p>

                    <router-link to="/contact" class="primary-button" role="button">Contact Me</router-link>
                </div>
            </div>
        </header>
    </div>
</template>

<style>
header {
    background-image: url('/src/assets/girl-writing.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
