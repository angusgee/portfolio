<template>
  <div class="swiper-container">
    <Swiper
      :modules="[SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
        },
        '1024': {
          slidesPerView: 3,
        }
      }"
    >
      <SwiperSlide v-for="project in projects" :key="project.title">
        <div class="project-card">
          <NuxtImg
            v-if="project.image"
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
            format="webp"
            loading="lazy"
          />
          <h3 class="text-xl font-bold mb-2 dark:text-white">{{ project.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
          <NuxtLink 
            :to="project.link" 
            class="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
          >
            Learn More 
            <svg 
              class="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NuxtLink>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Project {
  title: string
  description: string
  image?: string
  link: string
}

const projects: Project[] = [
  {
    title: 'AI Website Builder',
    description: 'Custom website generation using artificial intelligence',
    image: '/images/project1.jpg',
    link: '#'
  },
  {
    title: 'Business Process Automation',
    description: 'Streamlined workflow automation solutions',
    image: '/images/project2.jpg',
    link: '#'
  },
  {
    title: 'Smart Data Analysis',
    description: 'AI-powered business intelligence tools',
    image: '/images/project3.jpg',
    link: '#'
  }
]
</script>
