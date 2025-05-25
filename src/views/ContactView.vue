<script setup>
import { ref, onMounted, createApp } from 'vue';

import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import NavBar from '../components/NavBar.vue';
import Introwhatis from '../components/Introwhatis.vue';
</script>

<template>
    <NavBar />
    <Introwhatis title="Assessment Practising Certificate Accredited DYSLEXIA Specialist IN NEWTON ABBOT"
        description="If your child is struggling with Dyslexia or Dyscalculia, it is essential that they receive as much support as possible to avoid their learning being affected. I am able to offer specialised information and advice regarding these specific learning difficulties, as well as assessments to determine the nature of the difficulty. I can help all children and young adults throughout Newton Abbot and Devon, so please don't hesitate to drop me an email with your requirements." />

    <section class="p-10 md:p-20 bg-secondary text-white">
        <div class="max-w-4xl mx-auto">
            <h2 class="uppercase text-3xl md:text-4xl font-bold mb-8 text-primary text-center">Contact Me</h2>
            <div class="space-y-6 text-lg flex flex-col items-center">
                <div class="flex items-center  justify-center w-full md:w-1/2 text-center gap-3 border-b border-primary pb-4">
                    <span class="font-semibold min-w-[120px]">Call me:</span>
                    <a href="tel:07349159784" class="hover:text-primary transition-colors">
                        07349 159784
                    </a>
                </div>
                <div class="flex items-center  justify-center w-full md:w-1/2 text-center gap-3 border-b border-primary pb-4">
                    <span class="font-semibold min-w-[120px]">Email me:</span>
                    <a href="mailto:info@rhdyslexiaservices.co.uk" class="hover:text-primary transition-colors">
                        info@rhdyslexiaservices.co.uk
                    </a>
                </div>
                <div class="flex items-center  justify-center w-full md:w-1/2 text-center gap-3 border-b border-primary pb-4">
                    <span class="font-semibold min-w-[120px]">Business Hours:</span>
                    <span>Mon - Fri 9am - 5pm</span>
                </div>
            </div>
        </div>
    </section>

    <CTA :image="false" />
    <Footer />
</template>
