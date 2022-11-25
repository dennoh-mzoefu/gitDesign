import { ERROR, FETCH__ACTIVITY__LOGS } from "../actions/types";

const initialState = {
  error: "False",
  activityLogs: "",
  activityLog: "",
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      // console.log(JSON.stringify(payload));
      return { ...state, error: payload };
    case FETCH__ACTIVITY__LOGS:
      // console.log(payload);
      return { ...state, design__files: payload };

    default:
      return state;
  }
};
