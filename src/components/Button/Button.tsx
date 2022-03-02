import React, {FC} from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  maxWidth?: number,
  color?: string,
  margin?: string,
  background?: string
  onClick?: () => void
  isLoading?: boolean
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
