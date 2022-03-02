import {AppDispatch} from "../../index";
import axios from "axios";
import {IUser} from "../../../models/IUser";
import {
  AuthActionTypes,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction,
  SetUserAction
} from "./types";

export const authActionCreators = {
  setAuth: (payload: boolean): SetAuthAction => ({ type: AuthActionTypes.SET_AUTH, payload }),
  setLoadingAuth: (payload: boolean): SetLoadingAction => ({ type: AuthActionTypes.SET_LOADING_AUTH, payload }),
  setErrorAuth: (payload: string | null): SetErrorAction => ({ type: AuthActionTypes.SET_ERROR_AUTH, payload }),
  setUser: (payload: IUser | null): SetUserAction => ({ type: AuthActionTypes.SET_USER, payload }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authActionCreators.setLoadingAuth(true))
      const { data } = await axios.get<IUser[]>('./users.json');
      const mockUser = data.find(user => {
        return username === user.username
      })

      if (mockUser) {
        if (mockUser.password !== password) {
          dispatch(authActionCreators.setErrorAuth(`Вы ввели неверный пароль`))
        } else {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);

          dispatch(authActionCreators.setUser(mockUser))
          dispatch(authActionCreators.setAuth(true))
          dispatch(authActionCreators.setErrorAuth(null))
        }
      } else {
        dispatch(authActionCreators.setErrorAuth(`Пользователя ${username} не существует`))
      }
      dispatch(authActionCreators.setLoadingAuth(false))
    } catch (err) {
      dispatch(authActionCreators.setErrorAuth('Произошла ошибка при авторизации'))
      dispatch(authActionCreators.setLoadingAuth(false))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(authActionCreators.setUser(null))
    dispatch(authActionCreators.setAuth(false))
  }
}
