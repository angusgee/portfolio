<template>
  <footer class="bg-white dark:bg-gray-800 shadow-md z-50 pixel-border mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <!-- Navigation Links -->
        <div class="mb-8 lg:mb-0">
          <h3 class="text-lg font-bold mb-4">Navigation</h3>
          <div class="flex flex-col md:flex-row gap-4 md:gap-8">
            <NuxtLink 
              v-for="(item, index) in navItems" 
              :key="item.path"
              :to="item.path"
              :class="[
                'transition-colors',
                index % 4 === 0 ? 'hover:text-blue-500' :
                index % 4 === 1 ? 'hover:text-gray-600' :
                index % 4 === 2 ? 'hover:text-green-500' :
                'hover:text-red-500'
              ]"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="text-lg font-bold mb-4">Connect</h3>
          <div class="flex flex-col md:flex-row gap-4 md:gap-8">
            <!-- Twitter -->
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:text-blue-500 transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              Twitter
            </a>

            <!-- GitHub -->
            <a 
              href="https://github.com/angusgee" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:text-gray-600 transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
              GitHub
            </a>

            <!-- Boot.dev -->
            <a 
              href="https://boot.dev/u/angusgee" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:text-green-500 transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Boot.dev
            </a>

            <!-- YouTube -->
            <a 
              href="https://youtube.com/@AngusGAutomation" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:text-red-500 transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-sm text-gray-600 dark:text-gray-400 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        &copy; {{ new Date().getFullYear() }} AngusG Automation. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '#projects' },
  { name: 'FAQ', path: '#faq' },
  { name: 'Contact', path: '#contact' }
]
</script>
