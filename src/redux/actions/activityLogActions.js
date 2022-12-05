import { FETCH__ACTIVITY__LOGS, ERROR, CREATE__ACTIVITY__LOG } from "./types";
import * as api from "../api/index.js";

export const getActivityLogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchActivityLogs();

    dispatch({ type: FETCH__ACTIVITY__LOGS, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};
export const saveActivityLog = (data) => async (dispatch) => {
  try {
    const { data } = await api.createActivityLog(data);

    dispatch({ type: CREATE__ACTIVITY__LOG, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};
