<script setup>
import { ref, computed } from 'vue';
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import Introwhatis from '../components/Introwhatis.vue';

const testimonials = ref([
    {
        name: "GF-43",
        title: "Helpful, efficient and understanding",
        stars: 5,
        description: "Rebecca really helped my son with his dyslexia assessment, made him comfortable and made some excellent suggestions for his school to follow. I've already recommended her to a few friends."
    },
    {
        name: "SamanthaS-691",
        title: "Very supportive and highly experience",
        stars: 5,
        description: "Experience of working with Rebecca for assessment and ongoing support of my 7 year old has been great. Really responsive from first communication. Took the time to explain what would be helpful and what my child would benefit from. Assessment undertaken really summarised my child's needs in a way that I never could. Made my daughter feel really relaxed and that it was fun. She didn't feel like she was being 'tested' or judged, she actually said she enjoyed the experience and was keen to see Rebecca again. For someone that is at the beginning of a journey and with all this being very new, I couldn't recommend Rebecca highly enough."
    },
    {
        name: "JamieO-114",
        title: "Dyslexia Assessment - Totally recommended, excellent, friendly and professional",
        stars: 5,
        description: "I really would recommend using Rebecca, not just because she's friendly, reassuring and professional but because her report was so clear and comprehensive.\n Our son is quite a complex case including ADHD and ASD - we went to Rebecca to see if he was also Dyslexic. She was able to pick through the various aspects of his learning and the give us a really detailed picture of how he processes information. \nThe report was very detailed and covered about 40 specific areas. All assessed against the age-appropriate targets. I found the visual graph of these very useful as you could really see the areas where he needed extra help very effectively. \nWe have shared the report with the school, and it will now be a major part of his EHCP. Both the school and ourselves have found it genuinely invaluable and inciteful in understanding our son. It has changed the way he's taught in the classroom. In getting the answers he needed it feels like he is able to understand himself more."
    },
    {
        name: "KarenC-1130",
        title: "Excellent service for Dyslexia assessment",
        stars: 5,
        description: "Rebecca was recommended to me by a friend. I got in contact and left a message with my details and Rebecca very soon called back. We arranged the appointment time which was followed straight after by email along with the forms to fill in. My son was very nervous before appointment but she immediately put him at ease, and let him take his time to relax before the appointment. Rebecca's questions and directions were extremely clear and easy to understand, and there felt no pressure at all. The follow up report came through quicker than I thought and it was very comprehensive. A follow up call with Rebecca allowed me to discuss it and ask any questions. Again, the conversation was not hurried and I felt I could discuss all I needed and there was extra support on how to help my son. I think Rebeccas calm presence is good for any child (and Mum/Dad)"
    },
    {
        name: "NicW-47",
        title: "Very professional, friendly dyslexia assessor. Thorough and well written report with recommendation.",
        stars: 5,
        description: "Rebecca was absolutely great with my teenage son. Assessment took place in her home. She made him so comfortable and gave him breaks as he needed them. Really thorough report received with helpful recommendations. I would really recommend her services."
    },
    {
        name: "ClaireW-1020",
        title: "Excellent",
        stars: 5,
        description: "Rebecca was excellent with my son and completed a thorough assessment including the support he needs in school. She has communicated well throughout and been available for questions after the assessment."
    },
    {
        name: "LeonieV-2",
        title: "Just what we were looking for",
        stars: 5,
        description: "Rebecca is friendly and professional, she listened to what we needed and adapted accordingly. She has given us really helpful and invaluble advice - thank you."
    },
    {
        name: "KatieS-727",
        title: "Highly recommended",
        stars: 5,
        description: "I can highly recommend Rebecca who helped us recently with our 7yr daughter who is experiencing some difficulties with her phonics, writing and spelling. Rebecca was brilliant with her. The following report came through really quickly and was very detailed."
    },
    {
        name: "KelliJ-4",
        title: "Excellent from start to finish",
        stars: 5,
        description: "Excellent from start to finish. Very responsive. it was wonderful to finally speak to someone who totally understands what Dyslexia is and that there is so much more to Dyslexia than just struggling to read and spell. A thorough report was received in about 10 days after she had the consultation with my child. I would recommend her services to anyone who needed them. Very kind and professional person My child felt totally at ease as did I."
    },
    {
        name: "NaomiH-137",
        title: "Dyslexia screening",
        stars: 5,
        description: "Rebecca assessed both of my children for dyslexia. She was very professional and I would highly recommend her service."
    },
    {
        name: "KatP-44",
        title: "Rebecca makes a difference",
        stars: 5,
        description: "Rebecca is amazing! She has made such a difference to our son. Rebecca understands and deals compassionately with challenging behaviour whilst ensuring new ways of learning. I cannot recommend her enough!"
    },
    {
        name: "AnnemarieC-54",
        title: "HIGHLY RECOMMENDED",
        stars: 5,
        description: "After years of wondering what was stopping my son from reading and writing i decided to employ Rebecca to do a full dyslexia assessment. The service she provided was easy from start to finish. She followed all covid-19 guidelines, she kept my son engaged during the 3 hour assessment using various techniques, the report was very detailed and informative. This was followed up with a phone call and further support and advice offered,. My son is also having weekly zoom lessons with Rebecca which he finds fun. I highly recommend her services to anyone."
    },
    {
        name: "TimH-748",
        title: "Incredible Progress in Reading and Spelling",
        stars: 5,
        description: "Rebecca made a real difference to our son's reading and spelling. From a child who used to really struggle with these key skills, I'm now constantly amazed to see him doing it without effort. I never thought this would really be possible and it amazes me every day. Can't speak highly enough of Rebecca's expertise!"
    },
    {
        name: "Heather Buscombe",
        title: "",
        stars: 5,
        description: "Cannot recommend Rebecca enough, she was so wonderful with my 2 girls. The support she gave was amazing. I found the whole assessment so informative, now with an informal diagnosis we are able to access the right support needed. Could not recommend more x"
    }
]);

const expandedTestimonials = ref(new Set());

const stats = computed(() => {
    const total = testimonials.value.length;
    const avgRating = (testimonials.value.reduce((sum, t) => sum + t.stars, 0) / total).toFixed(1);
    return { total, avgRating };
});
</script>

<template>
    <NavBar />
    <Introwhatis title="Testimonials" description="Read what my clients have to say about me and my services." />
    
    <!-- Stats Section -->
    <section class="container mx-auto px-4 pb-8 mt-4">
        <div class="max-w-4xl mx-auto flex justify-center gap-12 border-b border-gray-200 text-white/80 pb-8">
            <div class="text-center">
                <div class="flex items-center gap-2">
                    <span class="text-3xl font-bold">{{ stats.avgRating }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         viewBox="0 0 24 24" 
                         fill="currentColor" 
                         class="w-6 h-6 text-amber-400">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                </div>
                <p class="text-sm">Average Rating</p>
            </div>
            <div class="text-center">
                <div class="text-3xl font-bold">{{ stats.total }}</div>
                <p class="text-sm">Total Reviews</p>
            </div>
        </div>
    </section>

    <section class="container mx-auto px-4 pb-16 mt-8">
        <div class="flex flex-col text-white gap-4 max-w-4xl mx-auto">
            <article v-for="testimonial in testimonials" 
                    :key="testimonial.name" 
                    class="transition-all">
                <blockquote class="space-y-3 bg-black/30 p-4 rounded-lg">
                    <div class="text-sm md:text-lg italic whitespace-pre-line">
                        <p>
                            {{ expandedTestimonials.has(testimonial.name) || testimonial.description.split(' ').length <= 30
                                ? testimonial.description 
                                : testimonial.description.split(' ').slice(0, 30).join(' ') + '...' }}
                            
                            <button 
                                v-if="testimonial.description.split(' ').length > 30"
                                @click="expandedTestimonials.has(testimonial.name) 
                                    ? expandedTestimonials.delete(testimonial.name) 
                                    : expandedTestimonials.add(testimonial.name)"
                                class="font-normal underline text-sm ml-2">
                                {{ expandedTestimonials.has(testimonial.name) ? 'Show Less' : 'Read More' }}
                            </button>
                        </p>
                    </div>
                    <footer class="mt-4">
                        <cite class="not-italic">
                            <div class="font-medium">{{ testimonial.name }}</div>
                            <div class="text-sm">{{ testimonial.title }}</div>
                        </cite>
                        <div class="flex mt-2 text-amber-400">
                            <svg v-for="n in testimonial.stars" 
                                 :key="n"
                                 xmlns="http://www.w3.org/2000/svg" 
                                 viewBox="0 0 24 24" 
                                 fill="currentColor" 
                                 class="w-4 h-4">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </footer>
                </blockquote>
            </article>
        </div>
    </section>

    <Footer />
</template>
