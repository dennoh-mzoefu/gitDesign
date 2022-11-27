import { ERROR, FETCH__VERSION, CREATE__VERSION } from "../actions/types";

const initialState = {
  error: "False",
  version: "",
  versions: "",
  versionNumber: 0,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      // console.log(JSON.stringify(payload));
      return { ...state, error: payload };
    case CREATE__VERSION:
      // console.log(payload);
      return { ...state, version: payload };
    case FETCH__VERSION:
      // console.log(payload);
      let v = payload[pauload.length - 1].version;
      return { ...state, versions: payload, versionNumber: v };

    default:
      return state;
  }
};
