import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

export function getValidationErrors(errors: ValidationError): any {
  return errors.inner.reduce((acc: Error, error: ValidationError) => {
    return { ...acc, [error.path]: error.message };
  }, {});
}
