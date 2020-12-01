import { ValidationRules } from 'react-hook-form';

export interface MaskRule {
  rules: ValidationRules;
  transform: (text: string) => string;
}

export const CPF: MaskRule = {
  rules: {
    pattern: {
      value: new RegExp(/^([0-9]{3}).([0-9]{3}).([0-9]{3})-([0-9]{2})$/),
      message: 'CPF inválido',
    },
  },
  transform: (text: string = ''): string => {
    const result = text
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/)!;

    const part1 = result[2] ? `${result[1]}.${result[2]}` : result[1];
    const part2 = result[3] ? `.${result[3]}` : '';
    const part3 = result[4] ? `-${result[4]}` : '';

    return `${part1}${part2}${part3}`;
  },
};

export const CREDIT_CARD_NUMBER: MaskRule = {
  rules: {
    pattern: {
      value: new RegExp(/^([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4})$/),
      message: 'Número do cartão inválido',
    },
  },
  transform: (text: string = ''): string => {
    const result = text
      .replace(/\D/g, '')
      .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/)!;

    const part1 = result[2] ? `${result[1]} ${result[2]}` : result[1];
    const part2 = result[3] ? ` ${result[3]}` : '';
    const part3 = result[4] ? ` ${result[4]}` : '';

    return `${part1}${part2}${part3}`;
  },
};

export const CREDIT_CARD_EXPIRATION_DATE: MaskRule = {
  rules: {
    pattern: {
      value: new RegExp(/^(0[1-9]|1[012])\/?(20[2-9][0-9])$/),
      message: 'Data de expiração inválida',
    },
  },
  transform: (text: string = ''): string => {
    const result = text.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})/)!;

    return result[2] ? `${result[1]}/${result[2]}` : result[1];
  },
};

export const CREDIT_CARD_CVV: MaskRule = {
  rules: {
    pattern: {
      value: new RegExp(/[0-9]{3}/),
      message: 'CVV inválido',
    },
  },
  transform: (text: string = ''): string => {
    return text.substr(0, 3);
  },
};

export const CURRENCY: MaskRule = {
  rules: {
    pattern: {
      value: new RegExp(/([0-9]\.?)?[0-9]+,[0-9]{2}/),
      message: 'Valor inválido',
    },
  },
  transform: (text: string = ''): string => {
    let number = text.replace(/[^0-9]/g, '');

    if (number.length === 0) number = '0.00';
    else if (number.length === 1) number = '0.0' + number;
    else if (number.length === 2) number = '0.' + number;
    else
      number =
        number.substring(0, number.length - 2) +
        '.' +
        number.substring(number.length - 2, number.length);

    number = Number(number).toFixed(2);
    number = number.replace(/\./g, ',');

    const x = number.split(',');
    const x1 = x[0];
    const x2 = x.length > 1 ? ',' + x[1] : '';

    const formatAmountNoDecimals = (number: string) => {
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(number)) {
        number = number.replace(rgx, `$1.$2`);
      }
      return number;
    };

    return `R$ ` + formatAmountNoDecimals(x1) + x2;
  },
};
