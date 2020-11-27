import { Container as MaterialContainer } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;
`;

export const WrapperContent = styled.div`
  height: 100%;
  position: relative;
`;

export const Content = styled(MaterialContainer).attrs({
  maxWidth: 'sm',
})`
  height: 100%;
`;

export const MainContent = styled.main`
  height: inherit;
  padding: 32px 0;

  > form {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    > div {
      width: inherit;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .form_input_group {
      height: 100%;
      width: inherit;

      > div {
        width: inherit;

        & + div {
          margin-top: 16px;
        }
      }
    }

    .form_credit_card_expiration_date_cvv {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      > div + div {
        margin-left: 8px;
      }

      > div:first-child {
        width: 60%;
      }
      > div:last-child {
        width: 40%;
      }
    }

    > button {
      margin-top: 16px;
    }
  }
`;
