import React, { useCallback, useMemo } from 'react';
import { ValidationRules } from 'react-hook-form';
import {
  CPF,
  CREDIT_CARD_CVV,
  CREDIT_CARD_EXPIRATION_DATE,
  CREDIT_CARD_NUMBER,
  CURRENCY,
  MaskRule,
} from '../../utils/patterns';
import Input, { InputProps } from '../Input';

export enum MaskInputType {
  buyer_document = 'buyer_document',
  credit_card_number = 'credit_card_number',
  credit_card_expiration_date = 'credit_card_expiration_date',
  credit_card_cvv = 'credit_card_cvv',
  currency = 'currency',
}

export interface MaskInputProps extends InputProps {
  mask: MaskInputType;
  rules?: ValidationRules;
  onKeyUp?: (event: any) => void;
}

interface MaskRuleType {
  [key: string]: MaskRule;
}

const maskRules: MaskRuleType = {
  [MaskInputType.buyer_document]: CPF,
  [MaskInputType.credit_card_number]: CREDIT_CARD_NUMBER,
  [MaskInputType.credit_card_expiration_date]: CREDIT_CARD_EXPIRATION_DATE,
  [MaskInputType.credit_card_cvv]: CREDIT_CARD_CVV,
  [MaskInputType.currency]: CURRENCY,
};

type RefProps = (rules: ValidationRules) => any;

const MaskInput: React.ForwardRefRenderFunction<RefProps, MaskInputProps> = (
  { name, label, mask, type = 'tel', rules = {}, onKeyUp, ...rest },
  innerRef: any,
) => {
  const maskRule = useMemo<MaskRule>(() => maskRules[mask], [mask]);

  const handleChange = useCallback(
    (event: any) => {
      event.target.value = maskRule.transform(event.target.value);
      onKeyUp && onKeyUp(event);
    },
    [maskRule, onKeyUp],
  );

  return (
    <Input
      {...rest}
      type={type}
      name={name}
      label={label}
      onKeyUp={handleChange}
      ref={
        innerRef &&
        innerRef({
          ...rules,
          ...maskRule.rules,
        })
      }
    />
  );
};

export default React.forwardRef(MaskInput);
