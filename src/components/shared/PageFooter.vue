<template>
  <footer class="border-t p-5 lg:px-10">
    <div class="flex flex-wrap justify-between items-center gap-5 text-sm">
      <p>&copy; 2023 - Fathi</p>

      <div class="flex space-x-4">
        <a
          v-for="social in SOCIALS"
          :href="social.link"
          :aria-label="social.name"
          target="_blank"
          title="opens in a new tab"
          rel="noopener noreferrer"
        >
          <component :is="social.icon" class="w-5 sm:w-6" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import GithubIcon from '../icons/GithubIcon.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import XIcon from '../icons/XIcon.vue'

interface ISocial {
  name: string
  link: string
  icon: Component
}

const SOCIALS: ISocial[] = [
  {
    name: 'X (formerly Twitter)',
    link: 'https://x.com/_babayeju',
    icon: XIcon
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/fathi-babayeju',
    icon: LinkedinIcon
  },
  {
    name: 'Github',
    link: 'https://github.com/c-blaq',
    icon: GithubIcon
  }
]
</script>
