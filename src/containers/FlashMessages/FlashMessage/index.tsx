import SuccessIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import React from 'react';
import { Content, FlashItem, TitleText } from './styles';

export interface FlashMessageProps {
  type: 'error' | 'success';
  title: string;
  onClick(): void;
  style?: Object;
}

const icons = {
  error: ErrorIcon,
  success: SuccessIcon,
};

const FlashMessage: React.FC<FlashMessageProps> = ({
  title,
  type,
  onClick: click,
  ...rest
}) => {
  const Icon: React.ComponentType = icons[type];

  return (
    <FlashItem type={type} onClick={click} {...rest}>
      <Content>
        <Icon />
        <TitleText>{title}</TitleText>
      </Content>
    </FlashItem>
  );
};

export default FlashMessage;
