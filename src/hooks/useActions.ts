import { bindActionCreators } from "redux";
import {useDispatch} from "react-redux";
import {authActionCreators} from "../store/reducers/auth";

const allActionCreators = {
  ...authActionCreators
}

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActionCreators, dispatch);
}
