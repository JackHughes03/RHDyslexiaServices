<template>
    <div class="mt-10">
        <section class="w-full sm:h-96 h-64" id="header-image"></section>

        <section class="text-white p-10">
            <h2 class="uppercase md:text-4xl text-2xl text-center font-light">Email me for dyslexia and dyscalculia services in
                newton abbot and devon.</h2>
            <p class="text-center mt-4 italic font-light opacity-80">Fill in the contact form below to receive a free quote. I am
                always more than happy to help.</p>
        </section>

        <form action="" class="max-w-3xl mx-auto px-6 flex flex-col gap-4">
            <div class="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Name"
                    class="flex-1 p-5 rounded-2xl bg-white/5 text-white placeholder-white/50 border-2 border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300">
                <input type="email" placeholder="Email"
                    class="flex-1 p-5 rounded-2xl bg-white/5 text-white placeholder-white/50 border-2 border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300">
            </div>
            <textarea placeholder="Message"
                class="w-full p-5 rounded-2xl bg-white/5 text-white placeholder-white/50 border-2 border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 min-h-[180px] resize-y"></textarea>
            <button type="submit"
                class="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 px-14 py-4 rounded-full mt-4 font-light transition-all duration-300 text-white w-fit mx-auto text-lg shadow-xl hover:shadow-blue-900/30 transform hover:-translate-y-1 active:translate-y-0">
                Send Message
            </button>
        </form>
    </div>
</template>

<style>
#header-image {
    background-image: url('/src/assets/numbers.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>