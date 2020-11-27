import React from 'react';
import Input from '.';
import { cleanup, fireEvent, render, screen } from '../../utils/test-utils';

describe('<Input />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should be able to render correctly', () => {
    // Arrange
    const { baseElement } = render(<Input name="nome" label="Nome" />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when disabled', () => {
    // Arrange
    const { baseElement } = render(<Input name="nome" label="Nome" disabled />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly with default value', () => {
    // Arrange
    render(<Input name="name" label="name" defaultValue="Alex Tavella" />);

    // Assert
    expect(screen.getByDisplayValue('Alex Tavella')).toBeTruthy();
  });

  it('should be able to change text', () => {
    // Arrange
    render(<Input name="name" label="name" />);

    const input = screen.getByTestId('name');

    // Act
    fireEvent.change(input, { target: { value: 'Alex Tavella' } });

    // Assert
    expect(screen.getByDisplayValue('Alex Tavella')).toBeTruthy();
  });
});
