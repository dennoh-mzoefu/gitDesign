import { MENU__VISIBILTY } from "./types";

export const menuVisible = (visibilty) => async (dispatch) => {
  try {
    // localStorage.setItem(visibilty);
    dispatch({ type: MENU__VISIBILTY, payload: visibilty });
    console.log({ visibilty });
  } catch (error) {
    console.log({ error });
  }
};
