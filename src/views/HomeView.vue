<script setup>
import { ref, onMounted, createApp } from 'vue';

import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue'
import InfoBlocks from '@/components/InfoBlocks.vue'
import Testimonials from '@/components/Testimonials.vue';
</script>

<template>
    <NavBar />
    <Hero />

    <InfoBlocks colour="primary" title="Meet Chrissy"
        description="Chrissy is an experienced specialist teacher committed to helping individuals with dyslexia and literacy difficulties. She offers full testing for dyslexia for children and adults, including personalised recommendations to support learning in school, college and university.
    Additionally, Chrissy offers ADHD assessment and DCD/dyspraxia assessment for adults.
    Dyslexia testing can take place online or in Truro, Cornwall.
    If you have any questions about dyslexia testing online or dyslexia assessment in Truro, Cornwall, contact Chrissy at Lexety Education." />

    <InfoBlocks colour="black/10" title="Do I need a dyslexia test?"
        description="Dyslexia is a specific learning difficulty that primarily affects skills involved in accurate and fluent reading and spelling. It is a lifelong condition that impacts how the brain processes information..
        People with dyslexia often experience challenges in reading fluently, spelling, and writing speed. Common signs may include:.
        
        • Struggles learning letter sounds.
        • Difficulties remembering sequences such as the alphabet or days of the week.
        • Difficulty blending letters to form words.
        • Confusing visually similar words when reading.
        • Problems with spelling.
        • Slower reading and writing speeds.
        • Needing to re-read paragraphs for comprehension.
        
        Dyslexia is not related to intelligence, and with proper support, individuals can achieve success.
        
        If you or your child are experiencing signs of dyslexia, contact Chrissy about dyslexia testing to see if it is the right option." />

        <InfoBlocks colour="primary" title="What happens during a dyslexia test?"
        description="A comprehensive assessment includes a variety of tests that evaluate different skills, such as:
        
        • Underlying ability.
        • Working memory.
        • Phonological awareness.
        • Phonological processing speed.
        • Spelling.
        • Writing.
        • Reading.
        
        Testing for dyslexia takes about three hours, and within two to three weeks, you will receive a 25-30-page follow-up report via email. This report includes individualised recommendations to support school, college, or university learning." />

        <Testimonials />
</template>
