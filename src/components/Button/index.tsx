import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@material-ui/core/Button';
import Text from '@material-ui/core/Typography';
import React from 'react';

interface ButtonProps extends MaterialButtonProps {}

const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  children,
  ...rest
}) => {
  return (
    <MaterialButton variant="contained" color="primary" {...rest}>
      <Text variant="button">{children}</Text>
    </MaterialButton>
  );
};

export default Button;
