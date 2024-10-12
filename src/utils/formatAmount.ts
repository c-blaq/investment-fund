const formatAmount = (amount: number) => {
  const units = ['', 'K', 'M', 'B', 'T', 'Q']
  let unitIndex = 0

  while (amount >= 1000 && unitIndex < units.length - 1) {
    amount /= 1000
    unitIndex++
  }

  return (
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(amount) + units[unitIndex]
  )
}

export default formatAmount
