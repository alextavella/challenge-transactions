import { ValidationError } from 'yup';
import { getValidationErrors } from './errors';

describe('getValidationErrors', () => {
  it('should to be able to parse correctly', () => {
    // Arrange
    const errors = {} as ValidationError;
    errors.inner = [
      {
        message: 'Invalid',
        path: 'name',
      } as ValidationError,
    ];

    // Act
    const result = getValidationErrors(errors);

    // Assert
    expect(result).toHaveProperty('name');
    expect(result.name).toBe('Invalid');
  });
});
