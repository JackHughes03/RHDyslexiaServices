<template>
    <footer class="bg-secondary text-white" role="contentinfo">
        <div class="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                <!-- Logo Section -->
                <div class="flex items-center justify-center lg:justify-start">
                    <img src="../../src/assets/logo.png" alt="RHDyslexia Logo" class="w-48 md:w-56">
                </div>

                <!-- Contact Section -->
                <address class="space-y-4 not-italic" aria-label="Contact information">
                    <h2 class="text-lg font-semibold relative inline-block">
                        Contact me
                        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary" aria-hidden="true"></span>
                    </h2>
                    <ul class="flex flex-col space-y-3">
                        <li>
                            <a href="tel:07349159784" class="hover:text-primary transition-colors duration-300">
                                07349 159784
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@rhdyslexiaservices.co.uk" class="hover:text-primary transition-colors duration-300">
                                info@rhdyslexiaservices.co.uk
                            </a>
                        </li>
                    </ul>
                </address>

                <!-- Legal Section -->
                <nav class="space-y-4" aria-label="Legal">
                    <h2 class="text-lg font-semibold relative inline-block">
                        Legal
                        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary" aria-hidden="true"></span>
                    </h2>
                    <ul class="flex flex-col space-y-3">
                        <li>
                            <a href="/Privacy-Policy.pdf" target="_blank" class="hover:text-primary transition-colors duration-300">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- Business Hours Section -->
                <section class="space-y-4" aria-label="Business Hours">
                    <h2 class="text-lg font-semibold relative inline-block">
                        Business Hours
                        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary" aria-hidden="true"></span>
                    </h2>
                    <dl class="space-y-3">
                        <dt class="sr-only">Working hours</dt>
                        <dd>Monday - Friday: 9:00 AM - 5:00 PM</dd>
                    </dl>
                </section>

                <!-- Attribution Section -->
                <section class="space-y-4" aria-label="Image Credits">
                    <h2 class="text-lg font-semibold relative inline-block">
                        Credits
                        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary" aria-hidden="true"></span>
                    </h2>
                    <ul class="space-y-2">
                        <li>Images supplied by:</li>
                        <li>
                            <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Pixabay</a>
                        </li>
                        <li>
                            <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Unsplash</a>
                        </li>
                        <li>
                            <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Pexels</a>
                        </li>
                    </ul>
                </section>
            </div>

            <!-- Copyright Bar -->
            <div class="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
                <small>© 2024 RHDyslexia Services. All rights reserved.</small>
            </div>
        </div>
    </footer>
</template>
