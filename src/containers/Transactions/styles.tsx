import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  min-height: 60px;
  width: 100%;
`;

export const LoadingText = styled(Typography).attrs({
  variant: 'body1',
})`
  text-align: center;
  width: 100%;
`;
