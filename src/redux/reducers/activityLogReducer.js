import {
  ERROR,
  FETCH__ACTIVITY__LOGS,
  CREATE__ACTIVITY__LOG,
} from "../actions/types";

const initialState = {
  error: "False",
  activityLogs: [],
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
      return { ...state, activityLogs: payload };
    case CREATE__ACTIVITY__LOG:
      // console.log(payload);
      return { ...state, activityLog: payload };

    default:
      return state;
  }
};
