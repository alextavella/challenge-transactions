import React from 'react';
import TransactionItem from '.';
import { cleanup, render, screen } from '../../../utils/test-utils';

describe('<TransactionItem />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should be able to render correctly', () => {
    // Arrange
    const source = {
      name: 'Alex Tavella',
      amount: 1000,
      created_at: new Date(2020, 10, 30, 12, 30),
    };

    // Act
    render(
      <TransactionItem
        name={source.name}
        amount={source.amount}
        date={source.created_at}
      />,
    );

    const name = screen.getByText(source.name);
    const amount = screen.getByText(`R$ 1.000,00`);
    const created_at = screen.getByText(`30/11/2020 12:30`);

    // Assert
    expect(name).toBeTruthy();
    expect(amount).toBeTruthy();
    expect(created_at).toBeTruthy();
  });
});
