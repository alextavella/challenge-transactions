import { render } from '@testing-library/react';
import React from 'react';
import MainProvider from '../providers';

const AllTheProviders: React.FC = ({ children }) => {
  return <MainProvider>{children}</MainProvider>;
};

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
