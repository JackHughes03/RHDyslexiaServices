<script setup>
import { ref } from 'vue';

defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    colour: {
        type: String,
        default: 'primary'
    }
});

const splitDescription = (text) => {
    return text.split('.').filter(sentence => sentence.trim());
};
</script>

<template>
    <div :class="`bg-${colour}`" class="md:p-10 p-5 flex items-center justify-center flex-col gap-6 md:mx-10 mx-4">
        <h2 class="text-3xl font-bold text-center">{{ title }}</h2>
        <div class="description text-left">
            <p v-for="(sentence, index) in splitDescription(description)" :key="index">
                {{ sentence.trim() }}.
            </p>
        </div>
    </div>
</template>

<style scoped>
.description p {
    margin: 0.5em 0;
}
</style>