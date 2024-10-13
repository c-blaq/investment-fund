<template>
  <div className="flex  flex-col h-screen justify-center items-center">
    <h1 className="text-7xl mb-5 text-rose-500">Oops!</h1>
    <h2 className="text-2xl font-medium mb-4">Something went wrong! Reload to try again</h2>

    <button
      @click="router.push('/').then(() => router.go(0))"
      className="bg-primary lg:hover:shadow-lg transition text-slate-50 font-medium uppercase py-4 px-6 rounded-full"
    >
      reload
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  window.history.replaceState(null, '', window.location.href)
})

const router = useRouter()
</script>
