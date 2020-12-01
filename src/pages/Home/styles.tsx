import { Container as MaterialContainer } from '@material-ui/core';
import Button from '../../components/Button';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled(MaterialContainer).attrs({
  maxWidth: 'sm',
})`
  height: 100%;
`;

export const RegisterButton = styled(Button)`
  margin-top: 15px;
`;
