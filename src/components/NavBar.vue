<script setup>
import { ref } from 'vue';


const isMenuOpen = ref(false);

const toggleMenu = () => {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('nav');
    icon.classList.toggle("open");

    if (icon.classList.contains('open')) {
        nav.classList.add('open');
    } else {
        nav.classList.remove('open');
    }
}

// window.addEventListener('scroll', () => {
//     const nav = document.querySelector('nav');

//     if (window.scrollY > 200) {
//         nav.classList.remove('h-14');
//         nav.classList.add('h-10', 'text-xs');
//     } else {
//         nav.classList.remove('h-10', 'text-xs');
//         nav.classList.add('h-14');
//     }
// });
</script>

<template>
    <nav class="shadow-lg shadow-black/30 bg-primary fixed w-full h-14 sm:h-auto duration-300 text-sm z-50 flex items-center justify-center">

        <button @click="toggleMenu" class="icon sm:!hidden flex nav-icon-2">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <a href="" class="text-white italic absolute left-4 top-4 sm:hidden font-[cursive]">RHDsylexia</a>
        <ul class="hidden flex-col h-full items-center justify-center text-xl gap-4 text-white mobile-nav">
            <li><a href="#" class="mobile-nav-link nav-links">Home</a></li>
            <li class="cursor-pointer">
                <router-link to="/service" class="mobile-nav-link nav-links cursor-pointer">Dyslexia &
                    Dyscalculia</router-link>
            </li>
            <li><router-link to="/assessments" class="mobile-nav-link nav-links">Assessments</router-link></li>
            <li><a href="#" class="mobile-nav-link">Contact</a></li>
        </ul>

        <ul class="hidden sm:flex items-center justify-between px-7 gap-8 text-white/85 font-light py-4 mx-auto w-full">
            <div class="items-center gap-8 flex">
                <li><a href="/" class="italic font-bold text-base font-[cursive]">RHDsylexia</a></li>
                <li>
                    <a href="#"
                        class="relative after:absolute after:bg-white after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300">Home</a>
                </li>
                <li>
                    <router-link to="/service"
                        class="relative after:absolute after:bg-white after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300">Dyslexia
                        & Dyscalculia</router-link>
                </li>
                <li>
                    <router-link to="/assessments"
                        class="relative after:absolute after:bg-white after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300">Assessments</router-link>
                </li>
            </div>
            <li class="flex">
                <a href="#"
                    class="relative after:absolute after:bg-white after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300">Contact</a>
            </li>
        </ul>
    </nav>
</template>

<style>
.nav-icon-2 {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 15px;
    top: 14px;
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
    top: 3px;
    left: 0px;
}

.nav-icon-2 span:nth-child(2) {
    width: 100%;
    height: 3px;
    display: block;
    top: 12px;
    left: 0px;
}

.nav-icon-2 span:nth-child(3) {
    width: 100%;
    height: 3px;
    display: block;
    bottom: 6px;
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
    height: 70%;
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