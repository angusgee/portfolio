<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NavBar />
    <main class="pt-16">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Layout will automatically include components from the components directory
</script>
