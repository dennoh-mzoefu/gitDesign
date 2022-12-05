import {
  ERROR,
  FETCH_PROJECT,
  FETCH_COLLAB_PROJECTS,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  FETCH_PROJECTS,
  DELETE__PROJECT,
  FETCH_PROJECT__LOCAL__STORAGE,
} from "../actions/types";

const initialState = {
  error: "False",
  project: "",
  projects: "",
  collaborators: [],
  collaboratorProjects: [],
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      // console.log(JSON.stringify(payload));
      return { ...state, error: payload };
    case CREATE_PROJECT:
      // console.log(payload);
      return { ...state, project: payload };
    case FETCH_PROJECT:
      console.log(payload);
      return { ...state, project: payload };
    case FETCH_PROJECT__LOCAL__STORAGE:
      // console.log(payload);
      return { ...state, project: payload };
    case FETCH_PROJECTS:
      // console.log(payload);
      return { ...state, projects: payload };
    case FETCH_COLLAB_PROJECTS:
      // console.log(payload);
      return { ...state, projects: payload };
    case UPDATE_PROJECT:
      // console.log(payload);
      return { ...state, project: payload };

    default:
      return state;
  }
};
