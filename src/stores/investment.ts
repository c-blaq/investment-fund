import { defineStore } from 'pinia'
import type { TInvestment } from '@/types/investment'

export const useInvestmentFundStore = defineStore('investmentFunds', {
  state: () => ({
    investmentFunds: null as TInvestment[] | null
  }),

  actions: {
    async getInvestmentFunds() {
      const response = await fetch('https://dashboard.cowrywise.com/api/v2/funds/public/')
      const { data } = await response.json()

      this.investmentFunds = data
    }
  }
})
