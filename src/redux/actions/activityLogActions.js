import {
    FETCH__ACTIVITY__LOGS,ERROR
  } from "./types";
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