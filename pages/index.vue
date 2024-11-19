<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-36 pb-36">
      <div class="container mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
      
        <h1 class="text-4xl md:text-6xl font-bold hero-gradient py-4 leading-relaxed">
          Welcome to<br>AngusG Automation
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          AI-Powered Websites and Automation Solutions
        </p>
        <NuxtLink
          to="#contact"
          class="retro-button block mt-20"
        >
          Get Started
        </NuxtLink>
      </div>
    </section>

    <hr class="gradient-divider">

    <!-- Projects Section -->
    <section id="projects" class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <ProjectCarousel />
      </div>
    </section>

    <hr class="gradient-divider">

    <!-- FAQ Section -->
    <section id="faq" class="py-16">
      <div class="container mx-auto px-4 max-w-2xl">
        <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <FaqAccordion />
      </div>
    </section>

    <hr class="gradient-divider">

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4 max-w-2xl">
        <h2 class="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <ContactForm />
      </div>
    </section>

    <hr class="gradient-divider">

    <!-- Pricing Section -->
    <Pricing />

    <hr class="gradient-divider">
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import ProjectCarousel from '~/components/ProjectCarousel.vue'
import FaqAccordion from '~/components/FaqAccordion.vue'
import ContactForm from '~/components/ContactForm.vue'
import Footer from '~/components/Footer.vue'

definePageMeta({
  layout: 'default'
})
</script>
