import React, {useState} from 'react';
import Alert from "../Alert";
import Input from "../Input";
import Button from "../Button";
import {
  CheckboxLabel,
  CheckboxWrap,
  FormStyled,
  AlertWrap,
  Label, ErrorMessage,
} from './styles';
import {SubmitHandler, useForm} from "react-hook-form";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {emailRegexp} from "../../utils/emailRegexp";

export type AuthFields = {
  username: string
  password: string
  checked: boolean
}

const AuthForm = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChecked = () => setChecked(!checked)

  const { login } = useActions();

  const isLoading = useTypedSelector(state => state.auth.isLoading)
  const error = useTypedSelector(state => state.auth.error)

  const { register, handleSubmit, formState: { errors } } = useForm<AuthFields>();

  const onSubmit: SubmitHandler<AuthFields> = (data) => {
    login(data.username, data.password)
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <AlertWrap>
          <Alert>
            {error}
          </Alert>
        </AlertWrap>
      )}
      <Label>Логин</Label>
      <Input
        {...register('username',
          {
            required: 'Обязательное поле',
            pattern: {
              value: emailRegexp,
              message: 'Вы ввели не валидный email'
            }
          })}
        error={errors.username?.message}
        placeholder="Введите email"
      />
      {errors.username && (
        <ErrorMessage>
          {errors.username.message}
        </ErrorMessage>
      )}

      <Label>Пароль</Label>
      <Input
        {...register('password', { required: 'Обязательное поле' })}
        error={errors.password?.message}
        placeholder="Введите пароль"
        type="password"
      />
      {errors.password && (
        <ErrorMessage>
          {errors.password.message}
        </ErrorMessage>
      )}
      <CheckboxWrap>
        <Input
          type="checkbox"
          checked={checked}
          onChange={handleChecked}
          id="checkbox"
        />
        <CheckboxLabel checked={checked} htmlFor="checkbox">
          Запомнить пароль
        </CheckboxLabel>
      </CheckboxWrap>
      <Button isLoading={isLoading} margin="40px 0 0">
        Войти
      </Button>
    </FormStyled>
  );
};

export default AuthForm;
