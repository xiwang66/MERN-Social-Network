import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser } from "../actions/authActions";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
