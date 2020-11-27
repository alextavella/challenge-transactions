import { AppBar } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import MaskInput, { MaskInputType } from '../../components/MaskInput';
import Toolbar from '../../components/Toolbar';
import FlashContainer from '../../containers/FlashContainer';
import { useFlash } from '../../hooks/flash';
import { getValidationErrors } from '../../utils/errors';
import { Container, Content, MainContent, WrapperContent } from './styles';

interface TransactionData {
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
    .matches(/[0-9]{3}/, {
      excludeEmptyString: true,
      message: 'CVV está incorreto',
    }),
  amount: Yup.string()
    .required('Valor é obrigatório')
    .matches(/([0-9]\.?)?[0-9]+,[0-9]{2}/, {
      excludeEmptyString: true,
      message: 'Valor está incorreto',
    }),
});

const New: React.FC = () => {
  const { goBack } = useHistory();
  const { addMessage } = useFlash();

  const { register, handleSubmit, errors } = useForm<TransactionData>();
  const onSubmit = useCallback(
    async (data: TransactionData) => {
      try {
        console.log('submit...', data);

        // formRef.current?.setErrors({});

        await validationSchema.validate(data, {
          abortEarly: false,
        });

        console.log('OK!', data);
      } catch (error) {
        console.log('error!', error);

        if (error instanceof Yup.ValidationError) {
          const customErrors = getValidationErrors(error);
          console.log('customErrors', customErrors);
          return;
        }

        addMessage({
          type: 'error',
          title: 'Falha ao registrar nova transação, tente novamente!',
        });
      }
    },
    [addMessage],
  );

  return (
    <Container>
      <AppBar position="static">
        <Toolbar title="Nova transação" onBack={goBack} />
      </AppBar>
      <WrapperContent>
        <FlashContainer />
        <Content>
          <MainContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_input_group">
                <Input
                  name="name"
                  label="Nome da pessoa compradora"
                  ref={register({
                    required: 'Nome é obrigatório',
                    pattern: {
                      value: /(.+\s)+(.+)/,
                      message: 'Nome incompleto',
                    },
                  })}
                  error={!!errors?.name}
                  helperText={errors?.name?.message}
                />

                <MaskInput
                  name="buyer_document"
                  label="CPF"
                  mask={MaskInputType.buyer_document}
                  ref={register}
                  rules={{
                    required: 'CPF é obrigatório',
                  }}
                  error={!!errors?.buyer_document}
                  helperText={errors?.buyer_document?.message}
                />

                <MaskInput
                  name="credit_card_number"
                  label="N° do cartão"
                  mask={MaskInputType.credit_card_number}
                  ref={register}
                  rules={{
                    required: 'N° do cartão é obrigatório',
                  }}
                  error={!!errors?.credit_card_number}
                  helperText={errors?.credit_card_number?.message}
                />

                <div className="form_credit_card_expiration_date_cvv">
                  <MaskInput
                    name="credit_card_expiration_date"
                    label="Data de expiração"
                    mask={MaskInputType.credit_card_expiration_date}
                    ref={register}
                    rules={{
                      required: 'Data de expiração é obrigatória',
                    }}
                    error={!!errors?.credit_card_expiration_date}
                    helperText={errors?.credit_card_expiration_date?.message}
                  />
                  <MaskInput
                    name="credit_card_cvv"
                    label="CVV"
                    mask={MaskInputType.credit_card_cvv}
                    ref={register}
                    rules={{
                      required: 'CVV é obrigatório',
                    }}
                    error={!!errors?.credit_card_cvv}
                    helperText={errors?.credit_card_cvv?.message}
                  />
                </div>

                <MaskInput
                  name="amount"
                  label="Valor da transação"
                  mask={MaskInputType.currency}
                  ref={register}
                  rules={{
                    required: 'Valor da transação é obrigatório',
                  }}
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
