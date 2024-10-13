<script setup lang="ts">
import BaseLayout from '@/components/shared/BaseLayout.vue'
import InvestmentCard from '@/components/shared/InvestmentCard.vue'
import Filter from '@/components/home/Filter.vue'
import { useInvestmentFundStore } from '@/stores/investment'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const investmentFundStore = useInvestmentFundStore()
const route = useRoute()

// created this so as to get the number equivalent of the risk level param
const riskLevelMap: { [key: string]: number } = {
  All: 0,
  Conservative: 1,
  Moderate: 2,
  Growth: 3
}

// Fetch investment funds
onMounted(() => {
  investmentFundStore.getInvestmentFunds()

  const riskLevel = riskLevelMap[route.query.riskLevel as string] || 0
  investmentFundStore.setRiskLevel(riskLevel)
})
</script>

<template>
  <BaseLayout>
    <section
      class="min-h-[50vh] flex items-center px-5 lg:px-20 bg-black/40 bg-[url('/images/3DChart.jpeg')] bg-no-repeat bg-cover bg-center bg-blend-overlay"
    >
      <div class="max-w-3xl text-center mx-auto">
        <h1
          class="text-white text-2xl sm:text-4xl lg:text-5xl mb-6 font-semibold sm:leading-[56px]"
        >
          Discover Top Investment Funds
        </h1>

        <div class="text-sm sm:text-base lg:text-lg text-white/90">
          <p>
            Browse a variety of funds and explore details on returns, asset types, and risk levels
            to find the right fit for your needs
          </p>
        </div>
      </div>
    </section>

    <section class="section-container py-10 lg:py-20">
      <div v-if="!investmentFundStore.investmentFunds" class="text-center">Loading</div>

      <div v-else>
        <Filter />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          <InvestmentCard
            v-for="investment in investmentFundStore.filteredFunds"
            :investment-fund="investment"
            :key="investment.id"
          />
        </div>
      </div>
    </section>
  </BaseLayout>
</template>
