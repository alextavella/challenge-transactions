import { Container as MaterialContainer } from '@material-ui/core';
import Button from '../../components/Button';
import styled from 'styled-components';

export const Header = styled.header`
  background: #f2f2f3;
  padding: 16px;
`;

export const Content = styled(MaterialContainer).attrs({
  maxWidth: 'sm',
})`
  height: 100%;
`;

export const RegisterButton = styled(Button)`
  margin-top: 15px;
`;
