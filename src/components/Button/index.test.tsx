import { fireEvent, render, screen, cleanup } from '../../utils/test-utils';
import React from 'react';
import Button from '.';

describe('<Button />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should be able to render correctly', () => {
    // Arrange
    const baseElement = render(<Button>Button</Button>);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when mouse enter', () => {
    // Arrange
    const { baseElement } = render(<Button>Button</Button>);

    // Act
    fireEvent.mouseEnter(screen.getByText('Button'));

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when disabled', () => {
    // Arrange
    const { baseElement } = render(<Button disabled>Button</Button>);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to click on button', () => {
    // Arrange
    const spyClick = jest.fn();
    render(<Button onClick={spyClick}>Button</Button>);

    // Act
    fireEvent.click(screen.getByText('Button'));

    // Assert
    expect(spyClick).toHaveBeenCalledTimes(1);
  });

  it('should not be able to click on button when disabled', () => {
    // Arrange
    const spyClick = jest.fn();
    render(
      <Button onClick={spyClick} disabled>
        Button
      </Button>,
    );

    // Act
    fireEvent.click(screen.getByText('Button'));

    // Assert
    expect(spyClick).not.toHaveBeenCalled();
  });
});
