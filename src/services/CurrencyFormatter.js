const format = data => {
  return new Intl.NumberFormat('ms-MY', {
    style: 'currency',
    currency: 'MYR',
    currencyDisplay: 'code'
  }).format(data);
};

export default format;
