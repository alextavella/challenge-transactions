import MaterialTextField, {
  BaseTextFieldProps,
} from '@material-ui/core/TextField';
import React from 'react';

export interface InputProps extends BaseTextFieldProps {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
}

const Input: React.ForwardRefRenderFunction<any, InputProps> = (
  { name, label, type = 'text', defaultValue = '', ...rest },
  ref,
) => {
  return (
    <MaterialTextField
      {...rest}
      inputRef={ref}
      name={name}
      label={label}
      type={type}
      defaultValue={defaultValue}
      variant="outlined"
      InputProps={{
        inputProps: { 'data-testid': name },
      }}
    />
  );
};

export default React.forwardRef(Input);
