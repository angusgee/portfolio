<template>
  <nav class="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 pixel-border">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <NuxtLink to="/" class="text-xl font-bold tracking-wider hero-gradient">
          AngusG
        </NuxtLink>
        
        <!-- Mobile menu button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden"
          aria-label="Toggle menu"
        >
          <span class="sr-only">Open menu</span>
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16m-16 6h16"
            />
          </svg>
        </button>

        <!-- Desktop menu -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink 
            v-for="(item, index) in menuItems" 
            :key="item.path"
            :to="item.path"
            :class="[
              'transition-colors font-mono',
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
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div 
        v-if="isMenuOpen"
        class="md:hidden fixed w-full bg-white dark:bg-gray-800 shadow-md z-40 top-16 pixel-border"
      >
        <div class="container mx-auto px-4 py-2">
          <div class="flex flex-col space-y-4">
            <NuxtLink 
              v-for="(item, index) in menuItems" 
              :key="item.path"
              :to="item.path"
              :class="[
                'transition-colors font-mono',
                index % 4 === 0 ? 'hover:text-blue-500' :
                index % 4 === 1 ? 'hover:text-gray-600' :
                index % 4 === 2 ? 'hover:text-green-500' :
                'hover:text-red-500'
              ]"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const menuItems = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/#services' },
  { name: 'PROJECTS', path: '/#projects' },
  { name: 'FAQ', path: '/#faq' },
  { name: 'CONTACT', path: '/#contact' }
]
</script>
