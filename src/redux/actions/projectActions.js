import {
  FETCH_PROJECT,
  FETCH_PROJECTS,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE__PROJECT,
  FETCH_PROJECT__LOCAL__STORAGE,
  ERROR,
} from "./types";

import * as api from "../api/index.js";

export const getProjects = (ownerName) => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects(ownerName);

    dispatch({ type: FETCH_PROJECTS, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};
export const getProject = (projectName) => async (dispatch) => {
  try {
    const { data } = await api.fetchProject(projectName);
    console.log({ data });
    dispatch({ type: FETCH_PROJECT, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error);
  }
};

export const createProject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);

    dispatch({ type: CREATE_PROJECT, payload: data });
  } catch (error) {
    // console.log(error.message);
  }
};
//
export const updateProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, project);

    dispatch({ type: UPDATE_PROJECT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);

    dispatch({ type: DELETE__PROJECT, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    console.log(error.message);
  }
};

export const fetchProjectLocalStorage = (data) => async (dispatch) => {
  const parseData = JSON.parse(data);
  dispatch({ type: FETCH_PROJECT__LOCAL__STORAGE, payload: parseData });
  // console.log(JSON.parse(data));
};
