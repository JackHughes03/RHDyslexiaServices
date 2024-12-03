<template>
    <div class="space-y-8 text-white">
        <section class="flex flex-col md:flex-row gap-8 items-center bg-secondary p-10">
            <div class="w-full md:w-1/3">
                <img src="../../src/assets/girl-reading.webp" alt="What is Dyslexia?"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg" title="What is Dyslexia?">
            </div>

            <div class="w-full md:w-2/3 space-y-4">
                <h3 class="text-3xl uppercase font-bold">Full Diagnostic Assessments</h3>

                <p class="mt-4">As I hold an APC (assessment practising certificate), I am able to undertake
                    comprehensive diagnostic assessments for Dyslexia. If you think your child is struggling with this
                    difficulty it is important to know, allowing you to take the appropriate measures and help them as
                    much as possible.</p>

                <p>My <strong>full diagnostic assessments</strong> cost £450. These will be carried out using a number
                    of different
                    assessments to determine underlying ability, spelling, writing, reading, working memory,
                    phonological awareness and speed of processing. This will take approximately three hours, but can be
                    carried out over two 90 minute sessions if this is preferred.</p>

                <p>Please note that I will require a £100 deposit for assessments, with the remaining fee to be paid the
                    day before the assessment is conducted.</p>

                <a target="_blank" href="/T&C-Diagnostic-Assessments.pdf" class="primary-button"> <!-- Link to diagnostic policy -->
                    T&C's Diagnostic Assessments
                </a>
                <br>
                <router-link to="/contact" class="primary-button">Email me</router-link>
            </div>
        </section>

        <!-- Dyscalculia Section -->
        <section class="flex flex-col md:flex-row gap-8 items-center bg-secondary p-10">
            <div class="w-full md:w-1/3 order-first md:order-last">
                <img src="../../src/assets/numbers.webp" alt="What is Dyscalculia?"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg" title="What is Dyscalculia?">
            </div>

            <div class="w-full md:w-2/3 space-y-4">
                <h3 class="text-3xl uppercase font-bold">Screening FOR Dyslexia and dyscalculia</h3>

                <p class="mt-4">If your child is showing symptoms of Dyslexia and is between the ages of 6 and 15, they
                    may benefit from one of my shorter <strong>screening assessments</strong>, which come complete with
                    a short report and cost £250. This will involve tests to assess underlying ability, spelling,
                    writing, reading, working memory, phonological awareness and speed of processing. I will also ask
                    your child to conduct some informal tests and a writing task from home before the main assessment is
                    completed. You will be provided with a summary report containing the test results, a conclusion and
                    some recommendations for how to support your child at school or home.</p>

                <p>I am also able to conduct informal maths <strong>assessments</strong> which will cost £250. These
                    assessments will take around 2 hours and includes a number of tests to assess numeracy, reading,
                    underlying ability and cognitive processing. This will also include a shorter report with
                    recommendations for teaching and tutoring if required.</p>

                <p>If you would like to know more about Dyslexia and Dyscalculia, you can find some information
                    <router-link class="underline" to="/dyslexia-and-dyscalculia">here</router-link>. Alternatively, I am more than happy
                    to answer any specific questions if you drop me an email.</p>

                <a target="_blank" href="/T&C-Informal-Assessment.pdf" class="primary-button"> <!-- Link to T&C's for informal assessments -->
                    Terms and Conditions for Informal Assessments
                </a>
            </div>
        </section>
    </div>
</template>