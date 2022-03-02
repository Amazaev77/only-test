import {IUser} from "../../../models/IUser";

export interface AuthState {
  isAuth: boolean | string,
  isLoading: boolean,
  error: null | string,
  user: null | IUser,
}

export enum AuthActionTypes {
  SET_AUTH = 'SET_AUTH',
  SET_LOADING_AUTH = 'SET_LOADING_AUTH',
  SET_USER = 'SET_USER',
  SET_ERROR_AUTH = 'SET_ERROR_AUTH'
}

export interface SetLoadingAction {
  type: AuthActionTypes.SET_LOADING_AUTH,
  payload: boolean
}

export interface SetAuthAction {
  type: AuthActionTypes.SET_AUTH,
  payload: boolean
}

export interface SetErrorAction {
  type: AuthActionTypes.SET_ERROR_AUTH,
  payload: string | null
}

export interface SetUserAction {
  type: AuthActionTypes.SET_USER,
  payload: IUser | null
}

export type AuthAction =
  SetAuthAction
  | SetLoadingAction
  | SetErrorAction
  | SetUserAction

