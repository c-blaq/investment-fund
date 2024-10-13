<template>
  <div
    v-for="investment in $props.investmentFund"
    class="bg-white border rounded-lg px-5 py-10 shadow flex flex-col"
  >
    <div class="flex space-x-2 md:space-x-4 items-center">
      <img
        :src="investment.logo"
        :alt="investment.name + 'logo'"
        class="w-6 h-6 lg:w-10 lg:h-10 object-contain"
      />
      <h2 class="font-bold text-base lg:text-lg">{{ investment.name }}</h2>
    </div>

    <div class="text-sm lg:text-base capitalize flex-1 my-6 text-gray-600">
      <div class="investment-detail">
        <span class="whitespace-nowrap">Returns:</span>
        <span
          :class="[
            'font-semibold',
            Number(investment.returns) > 0 ? 'text-green-600' : 'text-red-600'
          ]"
        >
          {{ (100 * Number(investment.returns)).toFixed(2) }}%
        </span>
      </div>

      <div class="investment-detail">
        <span>Fund manager:</span>
        <span class="text-right">{{ investment.fund_manager }}</span>
      </div>
      <p class="investment-detail">
        <span class="whitespace-nowrap">risk level:</span>
        {{
          investment.risk == 1 ? 'Conservative' : investment.risk == 2 ? 'Moderate' : 'Conservative'
        }}
      </p>
      <p class="investment-detail">
        <span class="whitespace-nowrap">asset type:</span>
        {{ investment.fundtype == 1 && 'mutual fund' }}
      </p>
    </div>

    <div class="text-right mt-4">
      <RouterLink
        :to="investment.name.split(' ').join('-').toLowerCase()"
        class="bg-primary text-white rounded px-4 py-3 lg:hover:shadow-lg transition"
        >Learn More
        <span class="sr-only" aria-hidden="false">about {{ investment.name }}</span></RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { TInvestment } from '@/types/investment'

defineProps<{ investmentFund: TInvestment[] | null }>()
</script>

<style lang="postcss" scoped>
.investment-detail {
  @apply flex justify-between gap-4 border-b py-3;
}
</style>
