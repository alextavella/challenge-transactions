import React from 'react';
import FlashMessage from '.';
import { cleanup, fireEvent, render, screen } from '../../../utils/test-utils';

describe('<FlashMessage />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should be able to render correctly when error type', () => {
    // Arrange
    const { baseElement } = render(
      <FlashMessage type="error" title="Message" onClick={jest.fn()} />,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when success type', () => {
    // Arrange
    const { baseElement } = render(
      <FlashMessage type="success" title="Message" onClick={jest.fn()} />,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to click on component', () => {
    // Arrange
    const spyClick = jest.fn();

    render(<FlashMessage type="success" title="click-me" onClick={spyClick} />);

    // Act
    const message = screen.getByText('click-me');
    fireEvent.click(message);

    // Assert
    expect(spyClick).toHaveBeenCalled();
  });
});
