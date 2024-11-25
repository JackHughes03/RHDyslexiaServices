<template>
    <div class="mt-10">
        <section class="w-full sm:h-96 h-64" id="header-image"></section>
        
        <section class="text-white p-10">
            <h2 class="uppercase md:text-4xl text-2xl text-center">Email me for dyslexia and dyscalculia services in newton abbot and devon.</h2>
            <p class="text-center mt-4 italic font-light">Fill in the contact form below to receive a free quote. I am always more than happy to help.</p>
        </section>

        <form action="" class="max-w-4xl mx-auto px-6 flex flex-col gap-6">
            <div class="flex flex-col md:flex-row gap-6">
                <input 
                    type="text" 
                    placeholder="Name" 
                    class="flex-1 p-4 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:border-white/40 transition-all duration-200"
                >
                <input 
                    type="email" 
                    placeholder="Email" 
                    class="flex-1 p-4 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:border-white/40 transition-all duration-200"
                >
            </div>
            <textarea 
                placeholder="Message" 
                class="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:border-white/40 transition-all duration-200 min-h-[160px] resize-y"
            ></textarea>
            <button 
                type="submit"
                class="bg-blue-900 hover:bg-blue-850 px-12 py-3 rounded-full mt-2 font-light transition-all duration-300 text-white w-fit mx-auto text-lg shadow-lg hover:shadow-primary/50 transform hover:-translate-y-0.5 active:translate-y-0"
            >
                Send Message
            </button>
        </form>
    </div>
</template>

<style>
#header-image {
    background-image: url('img/numbers.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>