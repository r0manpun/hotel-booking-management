export function formatCurrency(value, currencyValue = 'USD') {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currencyValue,
  }).format(value);
}


