import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@material-ui/core/Button';
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
      {children}
    </MaterialButton>
  );
};

export default Button;
