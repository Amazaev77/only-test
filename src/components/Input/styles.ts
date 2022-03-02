import styled from "styled-components";
import {InputProps} from "./Input";

export const StyledInput = styled.input<InputProps>`
  outline: none;
  background: #F5F5F5;
  border-radius: 8px;
  padding: 21px;
  box-sizing: border-box;
  width: 100%;
  transition: border 150ms;
  border: ${props =>
          props.error ? '1px solid #E26F6F' : '1px solid rgba(255, 255, 255, 0)'};
  display: ${props => props.type === 'checkbox' ? 'none' : 'block'};

  &:focus {
    border: 1px solid #99A9FF;
  }
`
