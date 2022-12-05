import { ERROR, FETCH__CHATS, SAVE__CHATS } from "../actions/types";

const initialState = {
  error: "False",
  chat: "",
  chats: [],
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      // console.log(JSON.stringify(payload));
      return { ...state, error: payload };
    case SAVE__CHATS:
      // console.log(payload);
      return { ...state, chat: payload };
    case FETCH__CHATS:
      // console.log(payload);
      return { ...state, chats: payload };

    default:
      return state;
  }
};
