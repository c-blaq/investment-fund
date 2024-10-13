<template>
  <div class="bg-white border rounded-lg px-5 py-10 shadow flex flex-col">
    <div class="flex space-x-2 md:space-x-4 items-center">
      <img
        :src="investmentFund.logo"
        :alt="investmentFund.name + 'logo'"
        class="w-6 h-6 lg:w-10 lg:h-10 object-contain"
      />
      <h2 class="font-bold text-base lg:text-lg">{{ investmentFund.name }}</h2>
    </div>

    <div class="text-sm lg:text-base capitalize flex-1 my-6 text-gray-600">
      <div class="investment-detail">
        <span class="whitespace-nowrap">Returns:</span>
        <span
          :class="[
            'font-semibold',
            Number(investmentFund.returns) > 0 ? 'text-green-600' : 'text-red-600'
          ]"
        >
          {{ (100 * Number(investmentFund.returns)).toFixed(2) }}%
        </span>
      </div>

      <div class="investment-detail">
        <span>Fund manager:</span>
        <span class="text-right">{{ investmentFund.fund_manager }}</span>
      </div>
      <p class="investment-detail">
        <span class="whitespace-nowrap">risk level:</span>
        {{
          investmentFund.risk == 1
            ? 'Conservative'
            : investmentFund.risk == 2
              ? 'Moderate'
              : 'Growth'
        }}
      </p>
      <p class="investment-detail">
        <span class="whitespace-nowrap">asset type:</span>
        {{ investmentFund.fundtype == 1 && 'mutual fund' }}
      </p>
    </div>

    <div class="text-right mt-4">
      <RouterLink
        :to="investmentFund.name.split(' ').join('-').toLowerCase()"
        class="bg-primary text-white rounded px-4 py-3 lg:hover:shadow-lg transition"
        >Learn More
        <span class="sr-only" aria-hidden="false">about {{ investmentFund.name }}</span></RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { TInvestment } from '@/types/investment'

defineProps<{ investmentFund: TInvestment }>()
</script>

<style lang="postcss" scoped>
.investment-detail {
  @apply flex justify-between gap-4 border-b py-3;
}
</style>
