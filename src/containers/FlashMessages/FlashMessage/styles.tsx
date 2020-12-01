import { Container, Typography } from '@material-ui/core';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

interface FlashItemProps {
  type: 'error' | 'success';
}

const styles = {
  error: css`
    background-color: #e5433d;
    color: #fff;
  `,
  success: css`
    background-color: #80bf66;
    color: #fff;
  `,
};

export const FlashItem = styled(animated.li)<FlashItemProps>`
  ${props => styles[props.type]};

  cursor: pointer;
  padding: 16px;
  position: relative;
`;

export const Content = styled(Container).attrs({
  maxWidth: 'sm',
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin-right: 8px;
  }
`;

export const TitleText = styled(Typography).attrs({
  variant: 'body1',
  component: 'span',
})``;
