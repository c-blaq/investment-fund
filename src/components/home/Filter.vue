<template>
  <div class="relative mb-5">
    <button
      @click="handleToggleFilterDropdown"
      class="flex ml-auto justify-between rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-secondary-text hover:text-white focus:outline-none"
    >
      {{ selectedRisk ?? 'Select Risk Level' }}
      <svg
        class="ml-2 -mr-1 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06 0L10 10.97l3.71-3.76a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 010-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      v-if="toggleFilterDropdown"
      class="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1">
        <div v-for="level in riskLevels" key="level">
          <button
            @click.prevent="selectRisk(level)"
            class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-secondary-text hover:text-white cursor-pointer"
          >
            {{ level.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInvestmentFundStore } from '@/stores/investment'
import { ref, defineEmits } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const riskLevels = [
  { value: 0, label: 'All' },
  { value: 1, label: 'Conservative' },
  { value: 2, label: 'Moderate' },
  { value: 3, label: 'Growth' }
]

const route = useRoute()
const router = useRouter()
const investmentFundStore = useInvestmentFundStore()
const selectedRisk = ref(route.query.riskLevel)
const toggleFilterDropdown = ref(false)
const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

const handleToggleFilterDropdown = () => (toggleFilterDropdown.value = !toggleFilterDropdown.value)

const selectRisk = (level: any) => {
  selectedRisk.value = level.label
  toggleFilterDropdown.value = false

  investmentFundStore.setRiskLevel(level.value)
  router.push({ query: { ...route.query, riskLevel: level.label } })
}
</script>
