import {
  ERROR,
  FETCH__NOTIFICATION,
  SAVE__NOTIFICATION,
  ACCEPT__NOTIFICATION,
} from "../actions/types";

const initialState = {
  error: "False",
  notification: "",
  notifications:"",
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      // console.log(JSON.stringify(payload));
      return { ...state, error: payload };
    case SAVE__NOTIFICATION:
      // console.log(payload);
      return { ...state, notification: payload };
    case FETCH__NOTIFICATION:
      // console.log(payload);
      return { ...state, notifications: payload };
    case ACCEPT__NOTIFICATION:
      // console.log(payload);
      return { ...state, notifications: payload };

    default:
      return state;
  }
};
