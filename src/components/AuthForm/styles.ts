import styled from "styled-components";

export const ErrorMessage = styled.div`
  color: #E26F6F;
  margin-top: 8px;
`

export const FormStyled = styled.form`
  padding: 80px 20px 0;
  box-sizing: border-box;
  position: relative;
  max-width: 640px;
  margin: auto;
`

export const AlertWrap = styled.div`
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  width: calc(100% - 40px);
  top: -7px;
  left: 20px
`

export const Label = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
`

export const CheckboxWrap = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`

interface CheckboxLabelProps {
  checked?: boolean
}

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  margin-bottom: 10px;
  display: flex;
  position: relative;
  align-items: center;
  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 4px;
    margin-right: 10px;
    cursor: pointer;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 4px;
    top: 4px;
    background: ${props => props.checked ? '#4A67FF' : '#fff'};
    border-radius: 2px;
    width: 14px;
    height: 14px;
    pointer-events: none;
    transition: background 100ms;
  }
`
