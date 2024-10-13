export type TInvestment = {
  id: string
  name: string
  fund_code: string
  returns: string
  logo: string
  is_money_market: boolean
  is_eurobond: boolean
  performance:
    | {
        fund_id: string
        year: number
        annual_return: string
      }[]
    | []
  description: string
  fund_manager: string
  risk: number
  prospectus: string | null
  custodian: string
  size_in_kobo: number
  fundtype: number
  status: number
  returns_model: number
  composition: Record<string, string>
}
