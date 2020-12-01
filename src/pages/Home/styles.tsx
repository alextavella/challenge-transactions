import { Container as MaterialContainer } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 158px 1fr;
`;

export const WrapperContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Header = styled.header`
  background: #f2f2f3;
  padding: 16px 0;
`;

export const Content = styled(MaterialContainer).attrs({
  component: 'main',
  maxWidth: 'sm',
  disableGutters: true,
})``;

export const WrapperButton = styled.div`
  margin-top: 16px;
  padding: 0 16px;
`;
