import React from 'react';
import TransactionSummary from '.';
import { cleanup, render, screen } from '../../utils/test-utils';

describe('<TransactionSummary />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should be able to render correctly', () => {
    // Arrange
    const { baseElement } = render(
      <TransactionSummary quantity={123} total={456} />,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render the text values correctly', () => {
    // Arrange
    render(<TransactionSummary quantity={123} total={456} />);

    // Act
    const quantityText = screen.getByTestId(
      'transaction_header_quantity',
    ) as HTMLElement;

    const totalText = screen.getByTestId(
      'transaction_header_total',
    ) as HTMLElement;

    // Assert
    expect(quantityText.textContent).toBe('123');
    expect(totalText.textContent).toBe('R$ 456,00');
  });
});
