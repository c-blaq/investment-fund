<template>
  <!-- <div className="flex  flex-col h-screen justify-center items-center">
    <h1 className="text-7xl mb-5">Oops!</h1>
    <h2 className="text-2xl font-medium">404 - Page not found</h2>
    <p className="my-4">
      Sorry, the page you are looking for does not exist or might have been removed temporarily!
    </p>
    <RouterLink
      to="/"
      className="bg-blue-700 hover:bg-blue-900 text-slate-50 font-medium uppercase py-4 px-6 rounded-full"
    >
      go back
    </RouterLink>
  </div> -->

  <div className="px-5 flex flex-col justify-center items-center text-center h-screen">
    <div class="w-full">
      <NotFoundIcon class="w-full" />
    </div>

    <div className=" my-10">
      <h1 className="text-2xl md:text-3xl mb-4 font-medium">Page not found</h1>
      <p>
        Oops! The page you're looking for couldn't be found. Please check the URL or return to the
        homepage.
      </p>
    </div>

    <RouterLink
      to="/"
      className="bg-primary hover:shadow-lg transition text-slate-50 font-medium uppercase py-4 px-6 rounded-full"
    >
      go back
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NotFoundIcon from '@/components/icons/NotFoundIcon.vue'
</script>
