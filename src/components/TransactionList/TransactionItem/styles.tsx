import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Container = styled.li`
  background: #fff;
  padding: 16px;
  width: 100%;

  & + li {
    margin-top: 1px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + div {
      margin-top: 8px;
    }
  }
`;

export const NameText = styled(Typography).attrs({
  variant: 'body2',
  component: 'strong',
})``;

export const StatusText = styled(Typography).attrs({
  variant: 'body1',
  component: 'span',
})`
  font-size: 0.725rem;
  text-transform: capitalize;
`;

export const DateText = styled(Typography).attrs({
  variant: 'body1',
  component: 'span',
})``;

export const AmountText = styled(Typography).attrs({
  variant: 'body2',
  component: 'strong',
})``;
