<template>
  <div class="px-5 flex flex-col justify-center items-center text-center h-screen">
    <div class="w-full">
      <NotFoundIcon class="w-full" />
    </div>

    <div class="my-10">
      <h1 class="text-2xl md:text-3xl mb-4 font-medium">Page not found</h1>
      <p>
        Oops! The page you're looking for couldn't be found. Please check the URL or return to the
        homepage.
      </p>
    </div>

    <RouterLink
      to="/"
      class="bg-primary hover:shadow-lg transition text-slate-50 font-medium uppercase py-4 px-6 rounded-full"
    >
      go back
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NotFoundIcon from '@/components/icons/NotFoundIcon.vue'
</script>
