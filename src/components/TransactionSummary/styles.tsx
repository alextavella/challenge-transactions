import styled from 'styled-components';
import { Container as MaterialContainer, Typography } from '@material-ui/core';

export const Container = styled(MaterialContainer).attrs({
  maxWidth: 'sm',
})`
  > div + div {
    margin-top: 24px;
  }
`;

export const TopicText = styled(Typography).attrs({
  variant: 'body2',
  component: 'p',
})``;

export const ValueText = styled(Typography).attrs({
  variant: 'subtitle2',
  component: 'strong',
  color: 'secondary',
})``;
