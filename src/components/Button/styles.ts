import styled from "styled-components";
import {ButtonProps} from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  color: ${props => props.color ? props.color : 'white'};
  margin: ${props => props.margin ? props.margin : null};
  max-width: ${props => props.maxWidth ? props.maxWidth + 'px' : null};
  background: ${props => props.disabled || props.isLoading ? ' #99A9FF' : (
    props.background ? props.background : '#4A67FF'
  )};
  border-radius: 8px;
  height: 60px;
  width: 100%;
  border: none;
  cursor: ${props => props.disabled ? 'auto' : 'pointer'};
  font-size: 18px;
  font-weight: 700;
  display: block;
`
