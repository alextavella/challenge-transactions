import { formatDate, parseFromISO } from './dates';

describe('formatDate', () => {
  it('should to be able to format correctly', () => {
    // Arrange
    const date1 = new Date(2020, 0, 1);
    const date2 = new Date(2020, 0, 1, 10);
    const date3 = new Date(2020, 0, 1, 10, 30);
    const date4 = new Date(2020, 0, 1, 10, 45, 15);

    // Act
    const result1 = formatDate(date1);
    const result2 = formatDate(date2);
    const result3 = formatDate(date3);
    const result4 = formatDate(date4);

    // Assert
    expect(result1).toBe('01/01/2020 00:00');
    expect(result2).toBe('01/01/2020 10:00');
    expect(result3).toBe('01/01/2020 10:30');
    expect(result4).toBe('01/01/2020 10:45');
  });
});

describe('parseFromISO', () => {
  it('should to be able to format correctly', () => {
    // Arrange
    const date1 = '2020-11-30T20:13:25.077Z';

    // Act
    const result1 = parseFromISO(date1);

    // Assert
    expect(result1).toStrictEqual(new Date(2020, 10, 30, 17, 13, 25, 77));
  });
});
