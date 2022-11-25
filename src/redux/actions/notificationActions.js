import {
  FETCH__NOTIFICATION,
  SAVE__NOTIFICATION,
  ACCEPT__NOTIFICATION,
  ERROR,
} from "./types";
import * as api from "../api/index.js";

export const getNotifications = (receiver) => async (dispatch) => {
  try {
    const { data } = await api.fetchNotifications(receiver);

    dispatch({ type: FETCH__NOTIFICATION, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};

export const saveNotifications = (notification) => async (dispatch) => {
  try {
    const { data } = await api.createNotification(notification);

    dispatch({ type: SAVE__NOTIFICATION, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};

export const acceptNotifications = (data1) => async (dispatch) => {
  try {
    const { data } = await api.acceptNotification(data1);

    dispatch({ type: ACCEPT__NOTIFICATION, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};
