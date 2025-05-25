<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="text-white pt-14">
        <section class="relative p-10 md:p-16">
            <h2 class="uppercase md:text-4xl text-2xl font-bold relative">
                {{ title }}
                <span class="absolute bottom-0 left-0 w-20 h-1 bg-primary mt-2"></span>
            </h2>
            <p class="mt-6 md:mt-8 italic font-light md:text-lg max-w-4xl" v-html="description">
            </p>
        </section>
    </div>
</template>