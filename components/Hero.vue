<template>
    <div>
        <nav class="bg-primary backdrop-blur-sm shadow-md fixed w-full z-50 h-14">
            <ul class="flex items-center justify-between px-7 gap-8 py-4 mx-auto w-full">
                <div class="items-center gap-8 hidden md:flex">
                    <li><a href="#"
                            class="text-gray-700 hover:text-black transition-colors duration-200 font-medium">Home</a>
                    </li>
                    <li><a href="#"
                            class="text-gray-700 hover:text-black transition-colors duration-200 font-medium">Dyslexia &
                            Dyscalculia</a></li>
                    <li><a href="#"
                            class="text-gray-700 hover:text-black transition-colors duration-200 font-medium">Assessments</a>
                    </li>
                </div>
                <li class="hidden md:flex"><a href="#"
                        class="text-gray-700 hover:text-black transition-colors duration-200 font-medium">Contact</a>
                </li>
            </ul>
        </nav>

        <header class="md:h-[700px] h-[500px] flex items-center justify-center">
            <div
                class="bg-black/50 absolute top-0 left-0 md:p-20 sm:p-10 md:pt-40 sm:pt-24 pt-20 p-6 w-full md:h-[700px] h-[500px]">
                <!-- Overlay -->
                <div class="text-white max-w-4xl">
                    <h1 class="md:text-5xl text-3xl uppercase">DYSLEXIA AND DYSCALCULIA SERVICES & ASSESSMENTS IN NEWTON
                        ABBOT</h1>
                    <p class="font-light mt-4 md:text-lg text-sm">I can help children and young adults throughout Newton
                        Abbot and Devon. I
                        am fully qualified and DBS
                        checked, so you can rest assured that your child is in safe hands. For further information,
                        don't
                        hesitate to contact me via email.</p>

                    <button class="bg-primary px-6 py-2 rounded-full mt-4 font-light">Contact Me</button>
                </div>
            </div>
        </header>
    </div>
</template>

<style>
header {
    background-image: url('@/assets/images/girl-writing.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>