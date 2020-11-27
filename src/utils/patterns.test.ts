import {
  CPF,
  CREDIT_CARD_CVV,
  CREDIT_CARD_EXPIRATION_DATE,
  CREDIT_CARD_NUMBER,
  CURRENCY,
} from './patterns';

interface Validation {
  value: RegExp;
  message: string;
}

describe('CPF', () => {
  it('should transform correctly', () => {
    // Arrange
    const value1 = '111';
    const value2 = '1112';
    const value3 = '1112223';
    const value4 = '1112223334';
    const value5 = '';

    const expected1 = '111';
    const expected2 = '111.2';
    const expected3 = '111.222.3';
    const expected4 = '111.222.333-4';
    const expected5 = '';

    // Act
    const result1 = CPF.transform(value1);
    const result2 = CPF.transform(value2);
    const result3 = CPF.transform(value3);
    const result4 = CPF.transform(value4);
    const result5 = CPF.transform(value5);

    // Assert
    expect(result1).toBe(expected1);
    expect(result2).toBe(expected2);
    expect(result3).toBe(expected3);
    expect(result4).toBe(expected4);
    expect(result5).toBe(expected5);
  });

  it('should be valid', () => {
    // Arrange
    const value = '111.222.333-44';
    const pattern = CPF.rules.pattern as Validation;

    // Act
    const valid = pattern.value.test(value);

    // Assert
    expect(valid).toBeTruthy();
  });

  it('should ne invalid', () => {
    // Arrange
    const value1 = '111';
    const value2 = '111.222';
    const value3 = '111.222.333';
    const value4 = '111.222.333-4';

    const pattern = CPF.rules.pattern as Validation;

    // Act
    const valid1 = pattern.value.test(value1);
    const valid2 = pattern.value.test(value2);
    const valid3 = pattern.value.test(value3);
    const valid4 = pattern.value.test(value4);

    // Assert
    expect(valid1).toBeFalsy();
    expect(valid2).toBeFalsy();
    expect(valid3).toBeFalsy();
    expect(valid4).toBeFalsy();
  });
});

describe('CREDIT_CARD_NUMBER', () => {
  it('should transform correctly', () => {
    // Arrange
    const value = '1111222233334444';
    const expected = '1111 2222 3333 4444';

    // Act
    const transformed = CREDIT_CARD_NUMBER.transform(value);

    // Assert
    expect(transformed).toBe(expected);
  });

  it('should be valid', () => {
    // Arrange
    const value = '1111 2222 3333 4444';
    const pattern = CREDIT_CARD_NUMBER.rules.pattern as Validation;

    // Act
    const valid = pattern.value.test(value);

    // Assert
    expect(valid).toBeTruthy();
  });

  it('should be invalid', () => {
    // Arrange
    const value1 = '1111';
    const value2 = '1111 2222';
    const value3 = '1111 2222 3333';
    const value4 = '1111 2222 3333 44';

    const pattern = CREDIT_CARD_NUMBER.rules.pattern as Validation;

    // Act
    const valid1 = pattern.value.test(value1);
    const valid2 = pattern.value.test(value2);
    const valid3 = pattern.value.test(value3);
    const valid4 = pattern.value.test(value4);

    // Assert
    expect(valid1).toBeFalsy();
    expect(valid2).toBeFalsy();
    expect(valid3).toBeFalsy();
    expect(valid4).toBeFalsy();
  });
});

describe('CREDIT_CARD_EXPIRATION_DATE', () => {
  it('should transform correctly', () => {
    // Arrange
    const value = '122020';
    const expected = '12/2020';

    // Act
    const transformed = CREDIT_CARD_EXPIRATION_DATE.transform(value);

    // Assert
    expect(transformed).toBe(expected);
  });

  it('should be valid', () => {
    // Arrange
    const value = '12/2020';
    const pattern = CREDIT_CARD_EXPIRATION_DATE.rules.pattern as Validation;

    // Act
    const valid = pattern.value.test(value);

    // Assert
    expect(valid).toBeTruthy();
  });

  it('should be invalid', () => {
    // Arrange
    const value1 = '2';
    const value2 = '32';
    const value3 = '42/24';
    const value4 = '12/202';

    const pattern = CREDIT_CARD_EXPIRATION_DATE.rules.pattern as Validation;

    // Act
    const valid1 = pattern.value.test(value1);
    const valid2 = pattern.value.test(value2);
    const valid3 = pattern.value.test(value3);
    const valid4 = pattern.value.test(value4);

    // Assert
    expect(valid1).toBeFalsy();
    expect(valid2).toBeFalsy();
    expect(valid3).toBeFalsy();
    expect(valid4).toBeFalsy();
  });
});

describe('CREDIT_CARD_CVV', () => {
  it('should transform correctly', () => {
    // Arrange
    const value1 = '1';
    const value2 = '12';
    const value3 = '123';
    const value4 = '';

    const expected1 = '1';
    const expected2 = '12';
    const expected3 = '123';
    const expected4 = '';

    // Act
    const result1 = CREDIT_CARD_CVV.transform(value1);
    const result2 = CREDIT_CARD_CVV.transform(value2);
    const result3 = CREDIT_CARD_CVV.transform(value3);
    const result4 = CREDIT_CARD_CVV.transform(value4);

    // Assert
    expect(result1).toBe(expected1);
    expect(result2).toBe(expected2);
    expect(result3).toBe(expected3);
    expect(result4).toBe(expected4);
  });

  it('should be valid', () => {
    // Arrange
    const value = '123';
    const pattern = CREDIT_CARD_CVV.rules.pattern as Validation;

    // Act
    const valid = pattern.value.test(value);

    // Assert
    expect(valid).toBeTruthy();
  });

  it('should be invalid', () => {
    // Arrange
    const value1 = '1';
    const value2 = '12';
    const value3 = '';

    const pattern = CREDIT_CARD_CVV.rules.pattern as Validation;

    // Act
    const valid1 = pattern.value.test(value1);
    const valid2 = pattern.value.test(value2);
    const valid3 = pattern.value.test(value3);

    // Assert
    expect(valid1).toBeFalsy();
    expect(valid2).toBeFalsy();
    expect(valid3).toBeFalsy();
  });
});

describe('CURRENCY', () => {
  it('should transform correctly', () => {
    // Arrange
    const value1 = '1';
    const value2 = '12';
    const value3 = '123';
    const value4 = '1234';
    const value5 = '';

    const expected1 = 'R$ 0,01';
    const expected2 = 'R$ 0,12';
    const expected3 = 'R$ 1,23';
    const expected4 = 'R$ 12,34';
    const expected5 = 'R$ 0,00';

    // Act
    const result1 = CURRENCY.transform(value1);
    const result2 = CURRENCY.transform(value2);
    const result3 = CURRENCY.transform(value3);
    const result4 = CURRENCY.transform(value4);
    const result5 = CURRENCY.transform(value5);

    // Assert
    expect(result1).toBe(expected1);
    expect(result2).toBe(expected2);
    expect(result3).toBe(expected3);
    expect(result4).toBe(expected4);
    expect(result5).toBe(expected5);
  });

  it('should be valid', () => {
    // Arrange
    const value = 'R$ 12,50';
    const pattern = CURRENCY.rules.pattern as Validation;

    // Act
    const valid = pattern.value.test(value);

    // Assert
    expect(valid).toBeTruthy();
  });

  it('should be invalid', () => {
    // Arrange
    const value1 = 'R$ 12';
    const value2 = 'R$ 12,5';
    const value3 = 'R$';

    const pattern = CURRENCY.rules.pattern as Validation;

    // Act
    const valid1 = pattern.value.test(value1);
    const valid2 = pattern.value.test(value2);
    const valid3 = pattern.value.test(value3);

    // Assert
    expect(valid1).toBeFalsy();
    expect(valid2).toBeFalsy();
    expect(valid3).toBeFalsy();
  });
});
