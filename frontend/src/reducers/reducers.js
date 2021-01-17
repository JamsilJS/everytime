import { REGISTER, LOGIN, LOGOUT } from "../actions/actions";

export default function user(state = {}, action) {
  switch (action.type) {
    case REGISTER:
      return { ...state, success: action.payload };
    case LOGIN:
      return { ...state, loginSuccess: action.payload };
    case LOGOUT:
      return { ...state, success: action.payload };
    default:
      return state;
  }
}
