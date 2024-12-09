<template>
    <!-- Information Sections -->
    <div class="space-y-8 text-white">
        <!-- Dyslexia Section -->
        <section class="flex flex-col md:flex-row gap-8 items-center max-w-6xl 2xl:max-w-none ml-auto rounded-l-2xl bg-secondary p-10">
            <div class="w-full md:w-1/3">
                <img src="../../src/assets/girl-reading.webp" alt="What is Dyslexia?"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg" title="What is Dyslexia?">
            </div>

            <div class="w-full md:w-2/3 space-y-4">
                <h3 class="text-3xl uppercase font-bold">What is Dyslexia?</h3>

                <p class="mt-4">The Devon Local Authority has settled on the following definition of Dyslexia:</p>
                <blockquote class="pl-4 border-l-4 border-primary italic">
                    "Dyslexia is evident when accurate and fluent reading and or spelling develops very
                    incompletely or with great difficulty. This focuses on literacy learning at the 'word level' and
                    implies that the problem is severe and persistent despite appropriate learning opportunities"
                    (British Psychological Society 1999)
                </blockquote>

                <p>Meanwhile, the British Dyslexia Association (BDA) follows a slightly different definition, which
                    is:</p>
                <blockquote class="pl-4 border-l-4 border-primary italic">
                    "Dyslexia is a specific learning disability which is constitutional in origin,
                    independent of socio-economic or language background and can occur at any level of intellectual
                    ability. It can cause unexpected and persistent difficulties in acquiring certain skills in one
                    of
                    more of the following areas: reading, writing and sometimes numeracy and spoken language. There
                    may
                    be accompanying weaknesses in the skills that support personal organisation, for example, speed
                    of
                    processing, short-term memory, sequencing and possible weaknesses in auditory and visual
                    perception
                    skills."
                </blockquote>

                <p>If you would like to know more about Dyslexia or need help understanding either of these
                    definitions,
                    I am more than happy to help and am always contactable via email.</p>

                <router-link to="/assessments" class="primary-button">
                    Dyslexia assessments
                </router-link>
            </div>
        </section>

        <!-- Dyscalculia Section -->
        <section class="flex flex-col md:flex-row gap-8 items-center max-w-6xl 2xl:max-w-none mr-auto rounded-r-2xl bg-secondary p-10">
            <div class="w-full md:w-1/3 order-first md:order-last">
                <img src="../../src/assets/girl-writing.webp" alt="What is Dyscalculia?"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg" title="What is Dyscalculia?">
            </div>

            <div class="w-full md:w-2/3 space-y-4">
                <h3 class="text-3xl uppercase font-bold">What is Dyscalculia?</h3>

                <p class="mt-4">Dyscalculia is another specific learning difficulty, and is often found alongside
                    other conditions such as ADHD/ADD, Dyspraxia and Dyslexia. It is thought that this difficulty is
                    most likely a result of characteristics such as working memory, however, research is continuing
                    so that we can assess whether there is a link between any environmental, biological or cognitive
                    factors.</p>

                <p>As with Dyslexia, there are numerous definitions of Dyscalculia, however, they all have certain
                    points in common:</p>

                <ul class="list-disc pl-6 space-y-2">
                    <li>Showing difficulties understanding numbers</li>
                    <li>These mathematical difficulties are not caused by a lack of educational opportunities</li>
                    <li>The degree of this difficulty is shown to be below expectations for the age of an individual
                    </li>
                </ul>

                <p>The SASC and BDA definition is:</p>
                <blockquote class="pl-4 border-l-4 border-primary italic">
                    "A specific and persistent difficulty in understanding numbers which can lead to a diverse range
                    of difficulties with mathematics. It will be unexpected in relation to age, level of education
                    and experience and occurs across all ages and abilities."
                </blockquote>

                <p>If you have a child or young adult that is struggling with reading, writing, spelling or maths
                    they may benefit from one of my assessments. If you would like to know more, please make
                    sure to drop me an email.</p>

                <router-link to="/contact" class="primary-button">
                    Get in touch
                </router-link>
            </div>
        </section>

        <!-- Qualifications Section -->
        <section class="flex flex-col md:flex-row gap-8 items-center max-w-6xl 2xl:max-w-none ml-auto rounded-l-2xl bg-secondary p-10">
            <div class="w-full md:w-1/3">
                <img src="../../src/assets/numbers.webp" alt="Dyslexia Tutor Qualifications"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg" title="Dyslexia Tutor Qualifications">
            </div>

            <div class="w-full md:w-2/3 space-y-4">
                <h3 class="text-3xl uppercase font-bold">What qualifications should a dyslexia tutor or assessor
                    have?</h3>

                <p class="mt-4">
                    A specialist dyslexia tutor should have a level 5 qualification which will provide them with the
                    title of
                    <strong class="italic">Dyslexia Specialist Tutor</strong>. A level 5 course is needed for anyone
                    wanting to work privately as a dyslexia tutor or to work in a role designated for a dyslexia
                    specialist.
                </p>

                <p>
                    Dyslexia specialists who are qualified to MA level (level 7) will have done further training
                    past level 5 in
                    <strong class="italic">Psychometric Testing and assessment</strong> and are formally qualified
                    to assess for Dyslexia.
                </p>

                <p>
                    As a parent looking for a 1:1 dyslexia tutor, you should ensure your tutor has a
                    <strong class="italic underline decoration-primary decoration-2">level 5 qualification</strong>
                    and for assessments, a
                    <strong class="italic underline decoration-primary decoration-2">level 7 qualification</strong>.
                    A level 7 assessor should also hold an
                    <strong class="italic">APC (assessment practising certificate)</strong>, meaning the report
                    provided on the results can be used for the Disabled Student's Allowance (DSA).
                </p>

                <div class="bg-white/5 p-6 rounded-lg border border-primary/20 backdrop-blur-sm mt-8">
                    <h3 class="text-xl font-semibold mb-4">My Qualifications</h3>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>B.Ed</li>
                        <li>PG Cert (SpLD - dyslexia)</li>
                        <li>Level 5 dyscalculia</li>
                        <li>APC</li>
                        <li>AMBDA</li>
                        <li>DBS checked</li>
                    </ul>
                </div>

                <router-link to="/#qualifications" class="primary-button" @click="scrollToQualifications">
                    My qualifications
                </router-link>
            </div>
        </section>

        <!-- Help at Home Section -->
        <section class="flex flex-col md:flex-row gap-8 items-center max-w-6xl 2xl:max-w-none mr-auto rounded-r-2xl bg-secondary p-10">

            <div class="w-full md:w-2/3 space-y-4">
                <h3 class="text-3xl uppercase font-bold">How can I help my child at home?</h3>

                <ul class="space-y-4 list-disc pl-6">
                    <li>Help your child to develop strategies that will help them in the classroom</li>
                    <li>Work with the school to find the best ways of supporting your child</li>
                    <li>Encourage them to talk about their difficulties and to let others know</li>
                    <li>Give lots of praise when they achieve something that they are proud of</li>
                    <li>Encourage them to take up activities that they enjoy or feel good about</li>
                    <li>Avoid being negative or comparing them to someone who is successful</li>
                    <li>Avoid talking to others about their difficulties, especially in their hearing</li>
                </ul>

                <p class="mt-6">If you need guidance on implementing any of these strategies or would like more
                    specific advice for your child's situation, please don't hesitate to get in touch.</p>
            </div>

            <div class="w-full md:w-1/3">
                <img src="../../src/assets/girl-writing-whitetop.jpg" alt="How can I help my child?"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg" title="How can I help my child?">
            </div>
        </section>

        <!-- Working Memory Section -->
        <section class="flex flex-col md:flex-row gap-8 items-center max-w-6xl 2xl:max-w-none ml-auto rounded-l-2xl bg-secondary p-10">
            <div class="w-full md:w-1/3">
                <img src="../../src/assets/girl-reading.webp" alt="Supporting Working Memory"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg" title="Supporting Working Memory">
            </div>

            <div class="w-full md:w-2/3 space-y-4">
                <h3 class="text-3xl uppercase font-bold">How to support the working memory</h3>

                <ul class="space-y-4 list-disc pl-6">
                    <li>Use simple language and don't speak too fast so as to avoid over loading your child with
                        information</li>
                    <li>Give instructions one at a time and ensure each instruction is grasped before continuing
                    </li>
                    <li>Find out what your child is struggling with, and be prepared to recognise when it is
                        necessary to repeat instruction etc</li>
                </ul>

                <p class="mt-6">If you would like more specific strategies for supporting your child's working
                    memory, please get in touch for personalized advice.</p>

                <router-link to="/contact" class="primary-button">
                    Contact me
                </router-link>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToQualifications() {
            setTimeout(() => {
                const element = document.getElementById('qualifications');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // 100ms delay to ensure route change completes
        }
    }
}
</script>