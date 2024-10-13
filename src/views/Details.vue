<template>
  <BaseLayout>
    <section class="section-container py-10 lg:py-20">
      <!-- breadcrumb -->
      <div class="mb-5">
        <RouterLink to="/" class="text-[#101052] hover:text-primary">Home</RouterLink> >
        <span class="text-gray-500">{{
          route.params.investmentName.toString().split('-').join(' ')
        }}</span>
      </div>

      <!-- investment fund details -->
      <div
        v-if="investmentFundStore.investmentFundDetail"
        class="flex flex-col lg:flex-row items-center gap-10"
      >
        <div class="flex-1 w-full">
          <div class="flex gap-5 md:gap-6 items-center">
            <img
              :src="investmentFundStore.investmentFundDetail.logo"
              :alt="investmentFundStore.investmentFundDetail.name + 'logo'"
              class="w-10 h-10 lg:w-16 lg:h-16 object-contain"
            />

            <div>
              <h1 class="font-bold text-lg md:text-xl lg:text-4xl mb-1">
                {{ investmentFundStore.investmentFundDetail.name }}
              </h1>
              <span class="text-gray-500 text-sm">{{
                investmentFundStore.investmentFundDetail.fund_manager
              }}</span>
            </div>
          </div>

          <div class="my-8 text-gray-600">
            <h2 class="text-sm md:text-base">Annual Returns</h2>
            <span
              :class="[
                'font-semibold text-2xl',
                Number(investmentFundStore.investmentFundDetail.returns) > 0
                  ? 'text-green-600'
                  : 'text-red-600'
              ]"
            >
              {{ (100 * Number(investmentFundStore.investmentFundDetail.returns)).toFixed(2) }}%
            </span>
          </div>

          <div
            v-if="investmentFundStore.investmentFundDetail?.performance?.length > 0"
            class="text-gray-600"
          >
            <h2 class="text-sm md:text-base">Performance</h2>
            <div
              class="flex justify-between gap-4 py-4 text-sm sm:text-base md:text-lg border-b"
              v-for="performance in investmentFundStore.investmentFundDetail.performance"
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

          <div v-if="investmentFundStore.investmentFundDetail.prospectus" class="pt-10">
            <a
              :href="investmentFundStore.investmentFundDetail.prospectus"
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
            <span>{{ investmentFundStore.investmentFundDetail.description }}</span>
          </div>

          <div className="investment-detail mt-6">
            <h3>Custodian</h3>
            <span>{{ investmentFundStore.investmentFundDetail.custodian }}</span>
          </div>

          <div className="investment-detail mt-6">
            <h3>Risk level</h3>
            <span>{{
              investmentFundStore.investmentFundDetail.risk == 1
                ? 'Conservative'
                : investmentFundStore.investmentFundDetail.risk == 2
                  ? 'Moderate'
                  : 'Conservative'
            }}</span>
          </div>

          <div className="investment-detail mt-6">
            <h3>use of funds</h3>
            <span className="">
              {{ formatAmount(investmentFundStore.investmentFundDetail.size_in_kobo / 100) ?? 0 }}
            </span>
          </div>

          <div className="investment-detail mt-6">
            <h3>fund composition</h3>
            <span
              className="block mb-2"
              v-for="(value, key) in investmentFundStore.investmentFundDetail.composition"
              :key="key"
            >
              {{ key }} : {{ value }}%
            </span>
          </div>
        </div>
      </div>

      <!-- Loader -->
      <div v-else class="flex items-center justify-center min-h-[80dvh]">
        <Loader />
      </div>
    </section>
  </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import BaseLayout from '@/components/shared/BaseLayout.vue'
import formatAmount from '@/utils/formatAmount'
import { useInvestmentFundStore } from '@/stores/investment'
import Loader from '@/components/shared/Loader.vue'

const route = useRoute()
const investmentFundStore = useInvestmentFundStore()

// fetch investment funds
onMounted(() => {
  const fundName = route.params.investmentName as string
  investmentFundStore.getInvestmentFunds(fundName)
})

watch(
  () => route.params.investmentName as string,
  (newName) => {
    investmentFundStore.getInvestmentFunds(newName)
  }
)
</script>

<style lang="postcss" scoped>
.investment-detail > h3 {
  @apply uppercase text-xs text-gray-700 font-semibold mb-2;
}
</style>
