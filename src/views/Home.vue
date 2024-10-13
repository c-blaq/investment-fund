<script setup lang="ts">
import BaseLayout from '@/components/shared/BaseLayout.vue'
import InvestmentCard from '@/components/shared/InvestmentCard.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <BaseLayout>
    <section
      className="min-h-[50vh] flex items-center px-5 lg:px-20 bg-black/40 bg-[url('/images/3DChart.jpeg')] bg-no-repeat bg-cover bg-center bg-blend-overlay"
    >
      <div className="max-w-3xl text-center mx-auto">
        <h1
          className="text-white text-2xl sm:text-4xl lg:text-5xl mb-6 font-semibold sm:leading-[56px]"
        >
          Discover Top Investment Funds
        </h1>

        <div className="text-sm sm:text-base lg:text-lg text-white/90">
          <p>
            Browse a variety of funds and explore details on returns, asset types, and risk levels
            to find the right fit for your needs
          </p>
        </div>
      </div>
    </section>
    <InvestmentCard />
  </BaseLayout>
</template>
