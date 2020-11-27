import React from 'react';
import Toolbar from '.';
import { fireEvent, render, screen, cleanup } from '../../utils/test-utils';

describe('<Toolbar />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should be able to render correctly', () => {
    // Arrange
    const { baseElement } = render(<Toolbar title="Title" onBack={() => {}} />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to call callback function when click on back button', () => {
    // Arrange
    const spyBack = jest.fn();

    render(<Toolbar title="Title" onBack={spyBack} />);

    // Act
    fireEvent.click(screen.getByTestId('back-button'));

    // Assert
    expect(spyBack).toHaveBeenCalled();
  });
});
