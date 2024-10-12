<template>
  <div class="flex flex-col min-h-screen">
    <header class="px-5 lg:px-10 h-16 shadow-sm flex items-center justify-center font-bold">
      Header
    </header>

    <main class="flex-1 py-10 px-5 lg:px-10">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from './PageFooter.vue'
</script>
