import React from 'react';
import MaskInput, { MaskInputType } from '.';
import {
  CPF,
  CREDIT_CARD_CVV,
  CREDIT_CARD_EXPIRATION_DATE,
  CREDIT_CARD_NUMBER,
  CURRENCY,
} from '../../utils/patterns';
import { cleanup, fireEvent, render, screen } from '../../utils/test-utils';

describe('<MaskInput />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should be able to render correctly', () => {
    // Arrange
    const spyRegister = jest.fn();

    const { baseElement } = render(
      <MaskInput
        name="cpf"
        label="CPF"
        mask={MaskInputType.buyer_document}
        ref={spyRegister}
      />,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to call function when change', () => {
    // Arrange
    const spyKeyUp = jest.fn();

    render(
      <MaskInput
        name="cpf"
        label="CPF"
        mask={MaskInputType.buyer_document}
        ref={jest.fn()}
        onKeyUp={spyKeyUp}
      />,
    );

    const input = screen.getByTestId('cpf') as HTMLInputElement;

    // Act
    fireEvent.keyUp(input, { target: { value: '1234' } });

    // Assert
    expect(spyKeyUp).toHaveBeenCalled();
    expect(input.value).toBe('123.4');
  });

  describe('cpf', () => {
    it('should be able to validation cpf when change', () => {
      // Arrange
      const spyRegister = jest.fn();
      const rules = {
        required: 'Required',
        ...CPF.rules,
      };

      render(
        <MaskInput
          name="cpf"
          label="CPF"
          mask={MaskInputType.buyer_document}
          ref={spyRegister}
          rules={rules}
        />,
      );

      const input = screen.getByTestId('cpf') as HTMLInputElement;

      // Act
      fireEvent.keyUp(input, { target: { value: '123' } });

      // Assert
      expect(spyRegister).toHaveBeenCalledWith(rules);
    });
  });

  describe('cvv', () => {
    it('should be able to validation cvv when change', () => {
      // Arrange
      const spyRegister = jest.fn();
      const rules = {
        required: 'Required',
        ...CREDIT_CARD_CVV.rules,
      };

      render(
        <MaskInput
          name="cvv"
          label="CVV"
          mask={MaskInputType.credit_card_cvv}
          ref={spyRegister}
          rules={rules}
        />,
      );

      const input = screen.getByTestId('cvv') as HTMLInputElement;

      // Act
      fireEvent.keyUp(input, { target: { value: '123' } });

      // Assert
      expect(spyRegister).toHaveBeenCalledWith(rules);
    });

    it('should be able to input only three chars', () => {
      // Arrange
      const spyRegister = jest.fn();
      const rules = {
        required: 'Required',
        ...CREDIT_CARD_CVV.rules,
      };

      render(
        <MaskInput
          name="cvv"
          label="CVV"
          mask={MaskInputType.credit_card_cvv}
          ref={spyRegister}
          rules={rules}
        />,
      );

      const input = screen.getByTestId('cvv') as HTMLInputElement;

      // Act
      fireEvent.keyUp(input, { target: { value: '12345' } });

      // Assert
      expect(input.value).toBe('123');
    });
  });

  describe('creditcard number', () => {
    it('should be able to validation creditcard number when change', () => {
      // Arrange
      const spyRegister = jest.fn();
      const rules = {
        required: 'Required',
        ...CREDIT_CARD_NUMBER.rules,
      };

      render(
        <MaskInput
          name="creditcard_number"
          label="Creditcard number"
          mask={MaskInputType.credit_card_number}
          ref={spyRegister}
          rules={rules}
        />,
      );

      const input = screen.getByTestId('creditcard_number') as HTMLInputElement;

      // Act
      fireEvent.change(input, { target: { value: '1234' } });

      // Assert
      expect(spyRegister).toHaveBeenCalledWith(rules);
    });
  });

  describe('creditcard expiration', () => {
    it('should be able to validation creditcard expiration date when change', () => {
      // Arrange
      const spyRegister = jest.fn();
      const rules = {
        required: 'Required',
        ...CREDIT_CARD_EXPIRATION_DATE.rules,
      };

      render(
        <MaskInput
          name="creditcard_expiration_date"
          label="Creditcard number"
          mask={MaskInputType.credit_card_expiration_date}
          ref={spyRegister}
          rules={rules}
        />,
      );

      const input = screen.getByTestId(
        'creditcard_expiration_date',
      ) as HTMLInputElement;

      // Act
      fireEvent.keyUp(input, { target: { value: '1234' } });

      // Assert
      expect(spyRegister).toHaveBeenCalledWith(rules);
    });
  });

  describe('currency', () => {
    it('should be able to validation currency when change', () => {
      // Arrange
      const spyRegister = jest.fn();
      const rules = {
        required: 'Required',
        ...CURRENCY.rules,
      };

      render(
        <MaskInput
          name="currency"
          label="Currency"
          mask={MaskInputType.currency}
          ref={spyRegister}
          rules={rules}
        />,
      );

      const input = screen.getByTestId('currency') as HTMLInputElement;

      // Act
      fireEvent.keyUp(input, { target: { value: '1234' } });

      // Assert
      expect(spyRegister).toHaveBeenCalledWith(rules);
    });
  });
});
