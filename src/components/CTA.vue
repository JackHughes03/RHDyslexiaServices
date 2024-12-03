<script>
import { ref } from 'vue';

export default {
    props: {
        image: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<template>
    <div>
        <img alt="Header image" title="Header image" v-if="image" src="../../src/assets/numbers.webp"
            class="w-full sm:h-96 h-64 object-cover">

        <section class="text-white p-10">
            <h2 class="uppercase md:text-4xl text-2xl text-center font-light">Email me for dyslexia and dyscalculia
                services in
                newton abbot and devon.</h2>
            <p class="text-center mt-4 italic font-light opacity-80">Fill in the contact form below to receive a free
                quote. I am
                always more than happy to help.</p>
        </section>

        <form action="https://api.staticforms.xyz/submit" method="post"
            class="max-w-3xl mx-auto px-6 flex flex-col gap-4">
            <div class="flex flex-col md:flex-row gap-4">
                <input name="name" type="text" placeholder="Name" required
                    class="flex-1 p-5 rounded-2xl bg-white/5 text-white placeholder-white/50 border-2 border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300">
                <input name="email" type="email" placeholder="Email" required
                    class="flex-1 p-5 rounded-2xl bg-white/5 text-white placeholder-white/50 border-2 border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300">
                <input name="number" type="number" placeholder="Phone Number" required
                    class="flex-1 p-5 rounded-2xl bg-white/5 text-white placeholder-white/50 border-2 border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300">

            </div>

            <input type="text" name="honeypot" style="display:none">
            <input type="hidden" name="accessKey" value="bbdd9f47-ca19-42e2-a333-0e82eb1a7813">
            <input type="hidden" name="redirectTo" value="https://www.rhdyslexiaservices.co.uk/#/contact-success">

            <textarea name="message" placeholder="Message"
                class="w-full p-5 rounded-2xl bg-white/5 text-white placeholder-white/50 border-2 border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 min-h-[180px] resize-y"></textarea>
            <button type="submit"
                class="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 px-14 py-4 rounded-full mt-4 font-light transition-all duration-300 text-white w-fit mx-auto text-lg shadow-xl hover:shadow-blue-900/30 transform hover:-translate-y-1 active:translate-y-0">
                Send Message
            </button>

            <!-- <div class="text-center">
                <p><small>(Powered by <a rel="nofollow" href="Un-static Forms">Sstatic Forms</a>)</small></p>
            </div> -->
        </form>
    </div>
</template>