<script setup>
import { ref } from 'vue';

const isActive = ref(false);

const toggleHamburger = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
    <nav
        class="flex flex-col md:flex-row items-center justify-center md:gap-5 gap-0 p-5 border-b-2 border-black/30 font-light bg-white">
        <ul class="md:flex gap-4 bg-black/10 p-3 px-6 hidden">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/services">Dyslexia</router-link>
            </li>
            <li>
                <router-link to="/services">Resources</router-link>
            </li>
            <li>
                <router-link to="/services">Blog</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>

        <button class="bg-[#C0DAD6] hidden p-3 px-6 rounded-b-xl md:rounded-b-none md:flex items-center justify-center gap-2 group">
            Book an appointment
            <img class="w-4 transition-transform duration-300 group-hover:rotate-12" src="../assets/appointment.png" alt="">
        </button>

        <div class="three col md:hidden block">
            <div class="hamburger" :class="{ 'is-active': isActive }" @click="toggleHamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>

        <div 
            class="w-full md:hidden overflow-hidden transition-all duration-300 ease-in-out"
            :class="isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'"
        >
            <ul class="flex flex-col gap-2 bg-black/5 p-4 rounded-lg mt-4">
                <li class="hover:bg-black/10 p-2 rounded transition-colors">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="hover:bg-black/10 p-2 rounded transition-colors">
                    <router-link to="/about">About</router-link>
                </li>
                <li class="hover:bg-black/10 p-2 rounded transition-colors">
                    <router-link to="/services">Dyslexia</router-link>
                </li>
                <li class="hover:bg-black/10 p-2 rounded transition-colors">
                    <router-link to="/services">Resources</router-link>
                </li>
                <li class="hover:bg-black/10 p-2 rounded transition-colors">
                    <router-link to="/services">Blog</router-link>
                </li>
                <li class="hover:bg-black/10 p-2 rounded transition-colors">
                    <router-link to="/contact">Contact</router-link>
                </li>
                <li class="mt-2">
                    <button class="w-full bg-[#C0DAD6] p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#B0CAC6] transition-colors group">
                        Book an appointment
                        <img class="w-4 transition-transform duration-300 group-hover:rotate-12" src="../assets/appointment.png" alt="">
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
.cf:before,
.cf:after {
    content: " ";
    display: table;
}

.cf:after {
    clear: both;
}

.row .three {
    padding: 80px 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: black;
    text-align: center;
}

.hamburger .line {
    width: 30px;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 100px;
    display: block;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.hamburger:hover {
    cursor: pointer;
}

.hamburger.is-active .line:nth-child(1) {
    -webkit-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(9px);
}

.hamburger.is-active .line:nth-child(3) {
    -webkit-transform: translateY(px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(-7px);
}
</style>