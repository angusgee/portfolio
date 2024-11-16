<template>
  <div class="space-y-4">
    <div 
      v-for="(faq, index) in faqs" 
      :key="index"
      class="faq-item"
    >
      <button 
        class="faq-question w-full"
        @click="toggleFaq(index)"
        :aria-expanded="activeFaq === index"
        :aria-controls="'faq-answer-' + index"
      >
        <span class="font-semibold">{{ faq.question }}</span>
        <svg 
          class="w-6 h-6 transform transition-transform"
          :class="{ 'rotate-180': activeFaq === index }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div 
        :id="'faq-answer-' + index"
        class="faq-answer"
        :class="{ 'active': activeFaq === index }"
        role="region"
        :aria-labelledby="'faq-question-' + index"
      >
        <p class="text-gray-600 dark:text-gray-300">{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'What services do you offer?',
    answer: 'We specialize in AI-powered website development and business process automation solutions.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity, but most projects are completed within 2-4 weeks.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we provide continuous support and maintenance for all our solutions.'
  },
  {
    question: 'What makes your automation solutions different?',
    answer: 'Our solutions leverage cutting-edge AI technology while maintaining user-friendly interfaces.'
  }
]

const activeFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>
