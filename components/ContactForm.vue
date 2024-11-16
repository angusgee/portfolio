<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Name
      </label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Email
      </label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>

    <div>
      <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Subject
      </label>
      <input
        id="subject"
        v-model="formData.subject"
        type="text"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Message
      </label>
      <textarea
        id="message"
        v-model="formData.message"
        rows="4"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      ></textarea>
    </div>

    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="retro-button"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting">Sending...</span>
        <span v-else>Send Message</span>
      </button>

      <div v-if="submitStatus" :class="[
        'text-sm',
        submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
      ]">
        {{ submitStatus.message }}
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface SubmitStatus {
  type: 'success' | 'error'
  message: string
}

const formData = ref<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<SubmitStatus | null>(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Here you would typically make an API call to your backend
    // For now, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    submitStatus.value = {
      type: 'success',
      message: 'Message sent successfully!'
    }
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: 'Failed to send message. Please try again.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>
