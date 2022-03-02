import React, {ChangeEvent} from 'react';
import {StyledInput} from "./styles";

export type InputProps = {
  placeholder?: string,
  type?: 'text' | 'password' | 'checkbox' | string
  checked?: boolean
  id?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  error?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput ref={ref} {...props}/>;
});

export default Input;
