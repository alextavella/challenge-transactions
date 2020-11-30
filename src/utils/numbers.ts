export const formatCurrency = (value: number): string => {
  const formatted = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);

  return formatted
    .replace('.', '#')
    .replace(/,/g, '.')
    .replace('#', ',')
    .replace('R$', 'R$ ');
};

export const unformatCurrency = (value: string): number => {
  return Number(
    value
      .replace('R$ ', '')
      .replace(',', '#')
      .replace(/\./g, '')
      .replace('#', '.'),
  );
};
