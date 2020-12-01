import { yupResolver } from '@hookform/resolvers/yup';
import { AppBar } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import MaskInput, { MaskInputType } from '../../components/MaskInput';
import Toolbar from '../../components/Toolbar';
import envConfig from '../../config/env';
import FlashMessages from '../../containers/FlashMessages';
import { useFlash } from '../../hooks/flash';
import { RegisterTransaction, useTransaction } from '../../hooks/transaction';
import { unformatCurrency } from '../../utils/numbers';
import { Container, Content, MainContent, WrapperContent } from './styles';

export interface TransactionData {
  name: string;
  buyer_document: string;
  credit_card_number: string;
  credit_card_expiration_date: string;
  credit_card_cvv: string;
  amount: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nome é obrigatório')
    .matches(/(.+\s)+(.+)/, {
      excludeEmptyString: true,
      message: 'Nome está incorreto',
    }),
  buyer_document: Yup.string()
    .required('CPF é obrigatório')
    .matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/, {
      excludeEmptyString: true,
      message: 'CPF está incorreto',
    }),
  credit_card_number: Yup.string()
    .required('Número é obrigatório')
    .matches(/[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}/, {
      excludeEmptyString: true,
      message: 'Número está incorreto',
    }),
  credit_card_expiration_date: Yup.string()
    .required('Validade é obrigatório')
    .matches(/(0[1-9]|1[012])\/?(20[2-9][0-9])/, {
      excludeEmptyString: true,
      message: 'Validade está incorreta',
    }),
  credit_card_cvv: Yup.string()
    .required('CVV é obrigatório')
    .length(3, 'CVV está incorreto'),
  amount: Yup.string()
    .required('Valor é obrigatório')
    .matches(/([0-9]\.?)?[0-9]+,[0-9]{2}/, {
      excludeEmptyString: true,
      message: 'Valor está incorreto',
    }),
});

const New: React.FC = () => {
  const { goBack, push: redirect } = useHistory();

  const { addTransaction } = useTransaction();
  const { addMessage } = useFlash();

  const { register, handleSubmit, errors, setValue } = useForm<TransactionData>(
    {
      resolver: yupResolver(validationSchema),
    },
  );

  const onSubmit = useCallback(
    async (data: TransactionData) => {
      try {
        await validationSchema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          buyer_document,
          credit_card_cvv,
          credit_card_expiration_date,
          credit_card_number,
          amount,
        } = data;

        const register: RegisterTransaction = {
          name,
          buyer_document,
          credit_card_cvv,
          credit_card_expiration_date,
          credit_card_number,
          amount: unformatCurrency(amount),
        };

        await addTransaction(register);

        redirect('/');
      } catch (error) {
        addMessage({
          type: 'error',
          title: 'Falha ao registrar nova transação, tente novamente!',
        });
      }
    },
    [addMessage, addTransaction, redirect],
  );

  useEffect(() => {
    if (envConfig.isDev) {
      setValue('name', 'Alex Tavella');
      setValue('buyer_document', '229.657.248-00');
      setValue('credit_card_number', '4111 1111 1111 1111');
      setValue('credit_card_expiration_date', '01/2021');
      setValue('credit_card_cvv', '321');
      setValue('amount', 'R$ 1.000,00');
    }
  }, [setValue]);

  return (
    <Container>
      <AppBar position="static">
        <Toolbar title="Nova transação" onBack={goBack} />
      </AppBar>
      <WrapperContent>
        <FlashMessages />
        <Content>
          <MainContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_input_group">
                <Input
                  name="name"
                  label="Nome da pessoa compradora"
                  ref={register}
                  error={!!errors?.name}
                  helperText={errors?.name?.message}
                />

                <MaskInput
                  name="buyer_document"
                  label="CPF"
                  mask={MaskInputType.buyer_document}
                  ref={register}
                  error={!!errors?.buyer_document}
                  helperText={errors?.buyer_document?.message}
                />

                <MaskInput
                  name="credit_card_number"
                  label="N° do cartão"
                  mask={MaskInputType.credit_card_number}
                  ref={register}
                  error={!!errors?.credit_card_number}
                  helperText={errors?.credit_card_number?.message}
                />

                <div className="form_credit_card_expiration_date_cvv">
                  <MaskInput
                    name="credit_card_expiration_date"
                    label="Data de expiração"
                    mask={MaskInputType.credit_card_expiration_date}
                    ref={register}
                    error={!!errors?.credit_card_expiration_date}
                    helperText={errors?.credit_card_expiration_date?.message}
                  />
                  <MaskInput
                    name="credit_card_cvv"
                    label="CVV"
                    mask={MaskInputType.credit_card_cvv}
                    ref={register}
                    error={!!errors?.credit_card_cvv}
                    helperText={errors?.credit_card_cvv?.message}
                  />
                </div>

                <MaskInput
                  name="amount"
                  label="Valor da transação"
                  mask={MaskInputType.currency}
                  ref={register}
                  error={!!errors?.amount}
                  helperText={errors?.amount?.message}
                />
              </div>

              <Button type="submit" fullWidth>
                Criar transação
              </Button>
            </form>
          </MainContent>
        </Content>
      </WrapperContent>
    </Container>
  );
};

export default New;
