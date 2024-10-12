<template>
  <BaseLayout>
    <div
      v-if="InvestmentFundDetail"
      class="section-container flex flex-col lg:flex-row items-center gap-10"
    >
      <div class="flex-1 w-full">
        <div class="flex gap-5 md:gap-6 items-center">
          <img
            :src="InvestmentFundDetail.logo"
            :alt="InvestmentFundDetail.name + 'logo'"
            class="w-10 h-10 lg:w-16 lg:h-16 object-contain"
          />

          <div>
            <h1 class="font-bold text-lg md:text-xl lg:text-4xl mb-1">
              {{ InvestmentFundDetail.name }}
            </h1>
            <span class="text-gray-500 text-sm">{{ InvestmentFundDetail.fund_manager }}</span>
          </div>
        </div>

        <div class="my-8 text-gray-600">
          <h2 class="text-sm md:text-base">Annual Returns</h2>
          <span
            :class="[
              'font-semibold text-2xl',
              Number(InvestmentFundDetail.returns) > 0 ? 'text-green-600' : 'text-red-600'
            ]"
          >
            {{ (100 * Number(InvestmentFundDetail.returns)).toFixed(2) }}%
          </span>
        </div>

        <div v-if="InvestmentFundDetail.performance.length > 0" class="text-gray-600">
          <h2 class="text-sm md:text-base">Performance</h2>
          <div
            class="flex justify-between gap-4 py-4 text-sm sm:text-base md:text-lg border-b"
            v-for="performance in InvestmentFundDetail.performance"
            :key="performance.fund_id"
          >
            <span>{{ performance.year }}</span>
            <span
              :class="[
                'text-green-600 font-semibold',
                Number(performance.annual_return) > 0 ? 'text-green-600' : 'text-red-600'
              ]"
            >
              {{ (100 * Number(performance.annual_return)).toFixed(2) }}%
            </span>
          </div>
        </div>

        <div v-if="InvestmentFundDetail.prospectus" class="pt-10">
          <a
            :href="InvestmentFundDetail.prospectus"
            target="_blank"
            rel="noopener noreferrer"
            title="opens in a new tab"
            class="bg-primary px-4 py-3 rounded text-white hover:shadow-lg transition"
          >
            View Prospectus
          </a>
        </div>
      </div>

      <div
        className="bg-secondary-bg px-5 sm:px-10 py-10 rounded-sm lg:w-1/3 text-sm sm:text-base [&_span]:text-gray-600"
      >
        <h3 className="font-semibold sm:text-xl">Key Information</h3>
        <div className="investment-detail mt-6">
          <h3>Descripton</h3>
          <span>{{ InvestmentFundDetail.description }}</span>
        </div>

        <div className="investment-detail mt-6">
          <h3>Custodian</h3>
          <span>{{ InvestmentFundDetail.custodian }}</span>
        </div>

        <div className="investment-detail mt-6">
          <h3>Risk level</h3>
          <span>{{
            InvestmentFundDetail.risk == 1
              ? 'Conservative'
              : InvestmentFundDetail.risk == 2
                ? 'Moderate'
                : 'Conservative'
          }}</span>
        </div>

        <div className="investment-detail mt-6">
          <h3>use of funds</h3>
          <span className="">
            {{ formatAmount(InvestmentFundDetail.size_in_kobo / 100) ?? 0 }}
          </span>
        </div>

        <div className="investment-detail mt-6">
          <h3>fund composition</h3>
          <span
            className="block mb-2"
            v-for="(value, key) in InvestmentFundDetail.composition"
            :key="key"
          >
            {{ key }} : {{ value }}%
          </span>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import BaseLayout from '@/components/shared/BaseLayout.vue'
import formatAmount from '@/utils/formatAmount'

const route = useRoute()
const InvestmentFundDetail = ref()

onMounted(async () => {
  const response = await fetch('https://dashboard.cowrywise.com/api/v2/funds/public/')

  const { data } = await response.json()
  const d = data?.find(
    (detail: any) => detail.name.split(' ').join('-').toLowerCase() === route.params.investmentName
  )

  if (d) {
    InvestmentFundDetail.value = d
    return
  }
})
</script>

<style lang="postcss" scoped>
.investment-detail > h3 {
  @apply uppercase text-xs text-gray-700 font-semibold mb-2;
}
</style>
