import {
  FETCH_DESIGN__FILE,
  FETCH_DESIGN__FILES,
  CREATE_DESIGN__FILE,
  UPDATE_DESIGN__FILE,
  DELETE__DESIGN__FILE,
  ERROR,
  FETCH___PROJECT__DESIGN__FILE,
} from "./types";
import * as api from "../api/index.js";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const getDesignFiles = (name) => async (dispatch) => {
  try {
    const { data } = await api.fetchDesignFiles(name);

    dispatch({ type: FETCH_DESIGN__FILES, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};
export const getProjectDesignFiles =
  (name, projectName) => async (dispatch) => {
    try {
      const { data } = await api.fetchProjectDesignFiles(name, projectName);

      dispatch({ type: FETCH___PROJECT__DESIGN__FILE, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
      // console.log(error.message);
    }
  };
export const getDesignFile = (name) => async (dispatch) => {
  try {
    const { data } = await api.fetchDesignFile(name);

    dispatch({ type: FETCH_DESIGN__FILE, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error);
  }
};

export const createDesignFile = (designFile) => async (dispatch) => {
  try {
    console.log(designFile);
    const { data } = await api.createDesign_File(designFile);

    dispatch({ type: CREATE_DESIGN__FILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateDesignFile = (id, designFile) => async (dispatch) => {
  try {
    const { data } = await api.updateDesignFile(id, designFile);

    dispatch({ type: UPDATE_DESIGN__FILE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDesignFile = (id) => async (dispatch) => {
  try {
    await api.deleteDesignFile(id);

    dispatch({ type: DELETE__DESIGN__FILE, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    console.log(error.message);
  }
};
