import { defineStore } from 'pinia'
import type { TInvestment } from '@/types/investment'

export const useInvestmentFundStore = defineStore('investmentFunds', {
  state: () => ({
    investmentFunds: null as TInvestment[] | null,
    investmentFundDetail: null as TInvestment | null,
    riskLevel: 0
  }),

  actions: {
    async getInvestmentFunds(param?: string) {
      try {
        const response = await fetch('https://dashboard.cowrywise.com/api/v2/funds/public/')
        const { data } = await response.json()
        this.investmentFunds = data

        // find detail of an investment fund based on name of fund(param)
        if (param) {
          this.investmentFundDetail = data?.find(
            (detail: TInvestment) => detail.name.split(' ').join('-').toLowerCase() === param
          )
        }
      } catch (err) {
        alert('Something went wrong!')
      }
    },
    setRiskLevel(val: number) {
      this.riskLevel = val
    }
  },

  getters: {
    filteredFunds(state) {
      if (state.riskLevel == 0) {
        return state.investmentFunds // Show all funds if no risk level is selected
      }
      return state.investmentFunds?.filter((fund) => fund.risk === state.riskLevel)
    }
  }
})
