export function formatCurrency(value, currencyValue = 'USD') {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currencyValue,
  }).format(value);
}

export function getToday(options = {}) {
  const today = new Date();

  if (options?.end) {
    today.setUTCHours(23, 59, 59, 999);
  } else today.setUTCHours(0, 0, 0, 0);

  return today.toISOString();
}
