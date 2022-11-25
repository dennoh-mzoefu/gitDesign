import {
  ERROR,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_USER,
  FETCH__ALL_USERS,
  CREATE,
  LOGIN,
  LOGOUT,
  FETCH_USER__LOCAL__STORAGE,
} from "../actions/types";

const initialState = {
  error: "False",
  user: "",
  users: "",
  auth: false,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      // console.log(JSON.stringify(payload));
      return { ...state, error: payload };
    case CREATE:
      // console.log(payload);
      return { ...state, user: payload, auth: true };
    case FETCH_USER:
      // console.log(payload);
      return { ...state, user: payload };
    case FETCH__ALL_USERS:
      // console.log(payload);
      return { ...state, users: payload };
    case LOGIN:
      // console.log(payload);
      return { ...state, user: payload, auth: true };
    case FETCH_USER__LOCAL__STORAGE:
      // console.log(payload);
      return { ...state, user: payload.user, auth: payload.auth };
    case UPDATE:
      // console.log(payload);
      return { ...state, user: payload };
    case DELETE:
      // console.log(payload);
      return { ...state, user: payload };

    default:
      return state;
  }
};
