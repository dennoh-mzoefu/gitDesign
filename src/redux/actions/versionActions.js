import { FETCH__VERSION, CREATE__VERSION, ERROR } from "./types";
import * as api from "../api/index.js";

export const fetchVersions = (designFile) => async (dispatch) => {
  try {
    const { data } = await api.fetchVersions(designFile);

    dispatch({ type: FETCH__VERSION, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};

export const createVersion = (versionFile) => async (dispatch) => {
  try {
    const { data } = await api.createVersion(versionFile);

    dispatch({ type: CREATE__VERSION, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};
