<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
    {
        title: 'Parent of a 14 year old',
        description: 'Thank you so much! C seems to be happier/more relaxed now she has this diagnosis as if her struggles make sense and there\'s a reason for it all.'
    },
    {
        title: 'Parent of a 12 year old',
        description: 'Just a quick thank you for taking the time to explain the report last week. School are on board with the recommendations and K came away feeling positive about the diagnosis.'
    },
    {
        title: 'Adult assessed for DSA',
        description: 'The DSA needs assessor was really happy with the report. They said it was easy to read with plenty of detail.'
    },
    {
        title: 'Parent of a 9 year old',
        description: 'Thanks for explaining the report to me in such detail. This made a real difference when I went to school. I knew what to ask for to help support E. School have really listened and they\'ve started to put the recommendations in action.'
    },
    {
        title: 'Parent of a 14 year old',
        description: 'Thank you so much for your time and the report. Hopefully, this will help school understand C and help alleviate some of her struggles and help her thrive!'
    },
    {
        title: 'Adult assessed for DSA',
        description: 'Thank you for making the whole assessment process so easy. The communication was fab and the results quick.'
    },
    {
        title: 'Parent of a 16 year old',
        description: 'School were very impressed with your report, I don\'t know if they mentioned this? They have also been brilliant about accepting all your recommendations without question, so thank you so much once again for making such a difference to F\'s life.'
    }
];

const swiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    }
};
</script>

<template>
    <section class="py-12 md:py-16 bg-gray-50 px-10">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">What My Clients Say</h2>
            
            <div class="relative">
                <!-- Navigation -->
                <div class="swiper-button-prev !text-primary"></div>
                <div class="swiper-button-next !text-primary"></div>
                
                <Swiper v-bind="swiperOptions" class="testimonials-swiper">
                    <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
                        <div class="bg-gray-100 rounded-xl shadow-lg p-6 md:p-8 h-full">
                            <div class="flex flex-col h-full">
                                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                    </svg>
                                </div>
                                <p class="text-gray-700 text-base md:text-lg mb-4 italic flex-grow">
                                    "{{ testimonial.description }}"
                                </p>
                                <p class="text-gray-900 font-semibold">
                                    {{ testimonial.title }}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <!-- Pagination -->
                    <div class="swiper-pagination !bottom-0"></div>
                </Swiper>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testimonials-swiper {
    padding: 2rem 0;
    margin: 0 -1rem;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    color: #C0DAD6;
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    top: 0;
    transform: none;
}

:deep(.swiper-button-next) {
    right: 0;
}

:deep(.swiper-button-prev) {
    left: 0;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
    font-size: 1.2rem;
}

:deep(.swiper-pagination-bullet-active) {
    background: #C0DAD6;
}

:deep(.swiper-pagination-bullet) {
    background: #C0DAD6;
    opacity: 0.5;
}

:deep(.swiper-slide) {
    height: auto;
}

.bg-primary {
    background-color: #C0DAD6;
}

.text-primary {
    color: #C0DAD6;
}
</style>