<script setup>
import { ref } from 'vue';
</script>

<template>
    <header class="relative flex items-center justify-center bg-primary md:mb-10 mb-4 text-white overflow-hidden py-12 md:py-16">
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 md:from-black/70 md:via-black/50 md:to-black/70"></div>
        
        <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-4">
            <div class="flex flex-col items-center">
                <!-- Circular Image -->
                <div class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg mb-6">
                    <img 
                        src="@/assets/me.jpg" 
                        alt="Professional portrait" 
                        class="w-full h-full object-cover"
                    >
                </div>

                <!-- Content Section -->
                <div class="w-full max-w-2xl text-center">
                    <h1 class="text-3xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight animate-fade-in leading-tight">
                        Lexety Education
                    </h1>

                    <div class="space-y-2 md:space-y-3 text-sm md:text-base font-light animate-slide-up">
                        <p class="opacity-90 leading-relaxed">Dyslexia testing for children and adults.</p>
                        <p class="opacity-90 leading-relaxed">Plus ADHD and DCD/dyspraxia assessment for adults.</p>
                        <p class="opacity-90 leading-relaxed">Qualified specialist teacher and holder of an Assessment Practising Certificate (APC).</p>
                    </div>

                    <div class="mt-6 md:mt-8 animate-fade-in-delayed">
                        <button class="md:w-auto bg-white text-black px-5 md:px-6 py-2 md:py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm md:text-base">
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
header {
    background-image: url('@/assets/books.jpg');
    background-position: center 30%;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 1s ease-out;
}

.animate-slide-up {
    animation: slideUp 1s ease-out 0.3s both;
}

.animate-fade-in-delayed {
    animation: fadeIn 1s ease-out 0.6s both;
}

/* Optimize animations for mobile */
@media (prefers-reduced-motion: reduce) {
    .animate-fade-in,
    .animate-slide-up,
    .animate-fade-in-delayed {
        animation: none;
    }
}
</style>