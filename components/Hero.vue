<script>
import { onMounted } from 'vue';

export default {
    data() {
        return {
            isMenuOpen: false
        }
    },

    methods: {
        toggleMenu() {
            const icon = document.querySelector('.icon');
            const nav = document.querySelector('nav');
            icon.classList.toggle("open");

            if (icon.classList.contains('open')) {
                nav.classList.add('open');
            } else {
                nav.classList.remove('open');
            }
        }
    }
}
</script>

<template>
    <div>
        <nav class="shadow-md bg-primary fixed w-full duration-300 z-50 h-14">

            <button @click="toggleMenu" class="icon sm:!hidden flex nav-icon-2">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="hidden flex-col h-full items-center justify-center text-xl gap-4 text-white mobile-nav">
                <li><a href="#" class="mobile-nav-link">Home</a></li>
                <li><a href="#" class="mobile-nav-link">Dyslexia &
                        Dyscalculia</a></li>
                <li><a href="#" class="mobile-nav-link">Assessments</a></li>
                <li><a href="#" class="mobile-nav-link">Contact</a></li>
            </ul>

            <ul
                class="hidden sm:flex items-center justify-between px-7 gap-8 text-white/85 font-light py-4 mx-auto w-full">
                <div class="items-center gap-8 flex">
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Home</a>
                    </li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Dyslexia &
                            Dyscalculia</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Assessments</a>
                    </li>
                </div>
                <li class="flex"><a href="#" class="hover:text-white transition-colors duration-200">Contact</a>
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
    background-image: url('img/girl-writing.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.nav-icon-2 {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
    display: inline-block;
}

.nav-icon-2 span {
    background-color: #FFF;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
}

.nav-icon-2 span:nth-child(1) {
    width: 100%;
    height: 3px;
    display: block;
    top: 0px;
    left: 0px;
}

.nav-icon-2 span:nth-child(2) {
    width: 100%;
    height: 3px;
    display: block;
    top: 10px;
    left: 0px;
}

.nav-icon-2 span:nth-child(3) {
    width: 100%;
    height: 3px;
    display: block;
    bottom: 7px;
    left: 0px;
}

.nav-icon-2:not(.open):hover span:nth-child(1) {
    width: 100%;
    height: 3px;
    display: block;
    top: 0px;
    left: 0px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
}

.nav-icon-2:not(.open):hover span:nth-child(2) {
    width: 100%;
    height: 3px;
    display: block;
    top: 10px;
    left: 0px;
    transition: .4s cubic-bezier(.8, .5, .2, 1.4);
}

.nav-icon-2:not(.open):hover span:nth-child(3) {
    width: 100%;
    height: 3px;
    display: block;
    bottom: 7px;
    left: 0px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
}

.nav-icon-2.open span:nth-child(1) {
    left: 5px;
    top: 7px;
    width: 26px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    transform: rotate(90deg);
    transition-delay: 150ms;
}

.nav-icon-2.open span:nth-child(2) {
    left: 2px;
    top: 15px;
    width: 20px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    transform: rotate(45deg);
    transition-delay: 50ms;
}

.nav-icon-2.open span:nth-child(3) {
    left: 14px;
    top: 15px;
    width: 20px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    transform: rotate(-45deg);
    transition-delay: 100ms;
}

nav.open {
    height: 90%;
}

nav.open .mobile-nav {
    display: flex;
}

.mobile-nav-link {
    position: relative;
    padding: 2px 4px;
}

.mobile-nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
}

.mobile-nav-link:hover::after {
    width: 100%;
}
</style>
