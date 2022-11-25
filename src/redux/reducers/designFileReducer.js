import {
  ERROR,
  FETCH_DESIGN__FILE,
  CREATE_DESIGN__FILE,
  UPDATE_DESIGN__FILE,
  FETCH_DESIGN__FILES,
  DELETE__DESIGN__FILE,
  FETCH___PROJECT__DESIGN__FILE,
} from "../actions/types";

const initialState = {
  error: "False",
  design__file: "",
  design__files: "",
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      // console.log(JSON.stringify(payload));
      return { ...state, error: payload };
    case CREATE_DESIGN__FILE:
      // console.log(payload);
      return { ...state, design__file: payload };
    case FETCH_DESIGN__FILE:
      // console.log(payload);
      return { ...state, design__file: payload };
    case FETCH_DESIGN__FILES:
      // console.log(payload);
      return { ...state, design__files: payload };
    case FETCH___PROJECT__DESIGN__FILE:
      // console.log(payload);
      return { ...state, design__files: payload };
    case UPDATE_DESIGN__FILE:
      // console.log(payload);
      return { ...state, design__file: payload };

    default:
      return state;
  }
};
