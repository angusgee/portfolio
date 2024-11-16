<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-24 pb-16 px-4">
      <div class="container mx-auto max-w-4xl text-center">
        <div class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-4 pixel-border">
          Business Analyst by Day, Automation Expert by Night
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 hero-gradient">
          Welcome to<br>AngusG Automation
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Crafting AI-Powered Websites and Smart Automation Solutions
        </p>
        <NuxtLink 
          to="#contact"
          class="retro-button"
        >
          Get Started
        </NuxtLink>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <ProjectCarousel />
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-16">
      <div class="container mx-auto px-4 max-w-2xl">
        <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <FaqAccordion />
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4 max-w-2xl">
        <h2 class="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
