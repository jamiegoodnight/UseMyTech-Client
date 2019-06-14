import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/actions";

const initialState = {
  logginIn: false,
  error: null,
  token: localStorage.getItem("token"),
  user_id: localStorage.getItem("user_id")
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log("STORE", state);
      console.log("action", action);
      return {
        ...state,
        loggingIn: true,
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: false,
        token: localStorage.getItem("token"),
        user_id: localStorage.getItem("user_id")
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
