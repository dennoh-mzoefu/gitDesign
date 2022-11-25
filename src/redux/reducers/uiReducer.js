import { MENU__VISIBILTY } from "../actions/types";

const initialState = {
  sideBarVisibility: true,
  colorMode: "blue",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MENU__VISIBILTY:
      // console.log(payload);
      return { ...state, sideBarVisibility: payload };

    default:
      return state;
  }
};
