import {AuthAction, AuthActionTypes, AuthState} from "./types";

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: null,
  user: null,
}

export default function authReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH: return { ...state, isAuth: action.payload }
    case AuthActionTypes.SET_LOADING_AUTH: return { ...state, isLoading: action.payload }
    case AuthActionTypes.SET_ERROR_AUTH: return { ...state, error: action.payload }
    case AuthActionTypes.SET_USER: return { ...state, user: action.payload }
    default:
      return state;
  }
}

