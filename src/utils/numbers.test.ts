import { formatCurrency, unformatCurrency } from './numbers';

describe('formatCurrency', () => {
  it('should to be able to format correctly', () => {
    // Arrange
    const price1 = 0;
    const price2 = 0.5;
    const price3 = 1;
    const price4 = 100.0;
    const price5 = 1000.0;
    const price6 = 1000000.0;

    // Act
    const result1 = formatCurrency(price1);
    const result2 = formatCurrency(price2);
    const result3 = formatCurrency(price3);
    const result4 = formatCurrency(price4);
    const result5 = formatCurrency(price5);
    const result6 = formatCurrency(price6);

    // Asert
    expect(result1).toBe('R$ 0,00');
    expect(result2).toBe('R$ 0,50');
    expect(result3).toBe('R$ 1,00');
    expect(result4).toBe('R$ 100,00');
    expect(result5).toBe('R$ 1.000,00');
    expect(result6).toBe('R$ 1.000.000,00');
  });
});

describe('unformatCurrency', () => {
  it('should to be able to format correctly', () => {
    // Arrange
    const price1 = 'R$ 0,00';
    const price2 = 'R$ 0,50';
    const price3 = 'R$ 1,00';
    const price4 = 'R$ 100,00';
    const price5 = 'R$ 1.000,00';
    const price6 = 'R$ 1.000.000,00';

    // Act
    const result1 = unformatCurrency(price1);
    const result2 = unformatCurrency(price2);
    const result3 = unformatCurrency(price3);
    const result4 = unformatCurrency(price4);
    const result5 = unformatCurrency(price5);
    const result6 = unformatCurrency(price6);

    // Asert
    expect(result1).toBe(0);
    expect(result2).toBe(0.5);
    expect(result3).toBe(1);
    expect(result4).toBe(100);
    expect(result5).toBe(1000);
    expect(result6).toBe(1000000);
  });
});
