import { FETCH__CHATS, SAVE__CHATS, ERROR } from "./types";
import * as api from "../api/index.js";

export const getChats = (room) => async (dispatch) => {
  try {
    const { data } = await api.fetchChats(room);

    dispatch({ type: FETCH__CHATS, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};

export const saveChats = (chat) => async (dispatch) => {
  try {
    const { data } = await api.createChat(chat);

    dispatch({ type: SAVE__CHATS, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};
