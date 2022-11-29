import { FETCH__VERSION, CREATE__VERSION, ERROR } from "./types";
import * as api from "../api/index.js";

export const fetchVersions = (designFile) => async (dispatch) => {
  console.log({ designFile });
  try {
    const { data } = await api.fetchVersions(designFile);
    console.log({ data });
    dispatch({ type: FETCH__VERSION, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};

export const createVersion = (versionFile) => async (dispatch) => {
  try {
    const { data } = await api.createVersion(versionFile);
    console.log(versionFile);
    console.log({ data });
    dispatch({ type: CREATE__VERSION, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};
