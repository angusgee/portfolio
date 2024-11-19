<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Bronze Plan -->
        <div class="pricing-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-2">Bronze Plan</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Essential Web Presence</p>
            <div class="text-4xl font-bold mb-6">$1,500</div>
          </div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Website:</strong> Responsive design (5 pages), branding, contact forms</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Automation:</strong> Basic email automation, Google Analytics</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>SEO:</strong> On-page optimization</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Support:</strong> 1 month post-launch updates</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Hosting:</strong> 12 months managed hosting</span>
            </li>
          </ul>
          <button class="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
            Get Started
          </button>
        </div>

        <!-- Silver Plan -->
        <div class="pricing-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-2 border-blue-500">
          <div class="text-center">
            <div class="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-4">MOST POPULAR</div>
            <h3 class="text-2xl font-bold mb-2">Silver Plan</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Advanced Website + Content Automation</p>
            <div class="text-4xl font-bold mb-6">$4,000</div>
          </div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Website:</strong> Custom design (10 pages), blog, enhanced UI/UX</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Automation:</strong> AI content generation, automated blog-to-social media posts</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Analytics:</strong> Monthly performance reports</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Support:</strong> 3 months content updates</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Hosting:</strong> 12 months high-performance hosting</span>
            </li>
          </ul>
          <button class="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
            Get Started
          </button>
        </div>

        <!-- Gold Plan -->
        <div class="pricing-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-2">Gold Plan</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Premium AI & Full Automation</p>
            <div class="text-4xl font-bold mb-6">$9,250</div>
          </div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Website:</strong> Unlimited pages, e-commerce, advanced features</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>AI:</strong> Custom chatbot, AI business tools</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Automation:</strong> Advanced marketing campaigns, social media scheduling</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Support:</strong> 6 months priority updates</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong>Hosting:</strong> 12 months enterprise-level hosting</span>
            </li>
          </ul>
          <button class="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>

      <!-- Notes Section -->
      <div class="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p class="mb-2"><strong>Customization:</strong> Tailored solutions available</p>
        <p class="mb-2"><strong>Exclusions:</strong> Third-party fees (e.g., domain registration)</p>
        <p><strong>Consultation:</strong> Free initial consultation</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.pricing-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pricing-card button {
  margin-top: auto;
}
</style>