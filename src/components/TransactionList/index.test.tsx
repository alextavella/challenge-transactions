import React from 'react';
import { v4 as uuid } from 'uuid';
import TransactionList from '.';
import { cleanup, render, screen } from '../../utils/test-utils';

describe('<TransactionList />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should be able to render correctly', () => {
    // Arrange
    const id = uuid();
    const source = [
      {
        id,
        name: 'Alex Tavella',
        amount: 1000,
        created_at: new Date(2020, 10, 30, 10),
      },
    ];

    // Act
    render(<TransactionList transactions={source} />);

    // Assert
    expect(screen.getByTestId(id)).toBeTruthy();
  });
});
