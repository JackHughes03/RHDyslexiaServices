<template>
    <div class="max-w-4xl mx-auto px-10 text-white mt-10">
        <h1 class="uppercase text-center text-4xl">Rebecca hughes - specialist teacher</h1>
        <p class="font-light mt-4 italic text-center">I have over 20 years of experience and am fully qualified. I offer
            a professional service and am passionate about helping your child overcome their issues. By working
            together, I am confident that we can succeed.</p>
    </div>

    <section
        class="max-w-6xl items-center justify-center w-full flex flex-col md:flex-row mx-auto text-white mt-8 md:mt-16 gap-4 md:gap-8 px-4 pb-10">
        <router-link to="/dyslexia-and-dyscalculia">
            <article class="w-full md:max-w-sm flex items-center justify-center text-center flex-col group 
            hover:scale-[1.02] hover:-translate-y-1 
            transition-all duration-300 ease-out">
                <img src="../../src/assets/girl-writing.webp" alt="Girl writing" title="Girl writing"
                    class="hidden md:block size-48 rounded-2xl shadow-xl object-cover">

                <div
                    class="relative rounded-xl backdrop-blur-md md:border-[1px] border-white/30 
                        flex items-center justify-center flex-col gap-3 md:gap-4 w-full mt-0 md:mt-8 transition-all duration-300 shadow-xl bg-white/10 md:h-64">
                    <div class="absolute inset-0 md:hidden">
                        <div class="w-full h-full rounded-xl services-images service-image-1 opacity-50"></div>
                        <div class="absolute rounded-xl inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                    </div>

                    <div class="relative px-4 md:px-8 py-8 md:py-10 flex flex-col gap-3 md:gap-4">
                        <h2 class="uppercase font-semibold tracking-wider text-purple-100 text-base md:text-lg">
                            dyslexia & dyscalculia
                        </h2>
                        <p class="text-xs md:text-sm font-light text-center text-gray-200 leading-relaxed">
                            Find out more about these specific learning difficulties in order to gain an understanding
                            of
                            why
                            and how your child may be struggling.
                        </p>
                    </div>
                </div>
            </article>
        </router-link>

        <router-link to="/assessments">
            <article class="w-full md:max-w-sm flex items-center justify-center text-center flex-col group 
            hover:scale-[1.02] hover:-translate-y-1 
            transition-all duration-300 ease-out">
                <img src="../../src/assets/girl-writing-whitetop.jpg" alt="Girl writing" title="Girl writing"
                    class="hidden md:block size-48 rounded-2xl shadow-xl object-cover">

                <div
                    class="relative rounded-xl backdrop-blur-md md:border-[1px] border-white/30 
                        flex items-center justify-center flex-col gap-3 md:gap-4 w-full mt-0 md:mt-8 transition-all duration-300 shadow-xl bg-white/10 md:h-64">
                    <div class="absolute inset-0 md:hidden">
                        <div class="w-full h-full rounded-xl services-images service-image-2 opacity-50"></div>
                        <div class="absolute rounded-xl inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                    </div>

                    <div class="relative px-4 md:px-8 py-8 md:py-10 flex flex-col gap-3 md:gap-4">
                        <h2 class="uppercase font-semibold tracking-wider text-purple-100 text-base md:text-lg">
                            assessments
                        </h2>
                        <p class="text-xs md:text-sm font-light text-center text-gray-200 leading-relaxed">
                            I conduct full diagnostic dyslexia assessments and shorter screening assessments for English
                            and
                            maths.
                        </p>
                    </div>
                </div>
            </article>
        </router-link>

        <router-link to="/contact">
            <article class="w-full md:max-w-sm flex items-center justify-center text-center flex-col group 
            hover:scale-[1.02] hover:-translate-y-1 
            transition-all duration-300 ease-out">
                <img src="../../src/assets/girl-reading.webp" alt="Girl reading" title="Girl reading"
                    class="hidden md:block size-48 rounded-2xl shadow-xl object-cover">

                <div
                    class="relative rounded-xl backdrop-blur-md md:border-[1px] border-white/30 
                        flex items-center justify-center flex-col gap-3 md:gap-4 w-full mt-0 md:mt-8 transition-all duration-300 shadow-xl bg-white/10 md:h-64">
                    <div class="absolute inset-0 md:hidden">
                        <div class="w-full h-full rounded-xl services-images service-image-3 opacity-50"></div>
                        <div class="absolute rounded-xl inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                    </div>

                    <div class="relative px-4 md:px-8 py-8 md:py-10 flex flex-col gap-3 md:gap-4">
                        <h2 class="uppercase font-semibold tracking-wider text-purple-100 text-base md:text-lg">
                            contact me
                        </h2>
                        <p class="text-xs md:text-sm font-light text-center text-gray-200 leading-relaxed">
                            If you have a child that would benefit from any of my services, I invite you to get in touch
                            with me
                            via phone or email as soon as possible.
                        </p>
                    </div>
                </div>
            </article>
        </router-link>
    </section>
</template>