import {
  FETCH__ALL_USERS,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_USER,
  ERROR,
  LOGIN,
  LOGOUT,
  FETCH_USER__LOCAL__STORAGE,
} from "./types";

import * as api from "../api/index.js";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: FETCH__ALL_USERS, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error.message);
  }
};
export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUser(id);

    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    // console.log(error);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);

    dispatch({ type: CREATE, payload: data });
    // JSON.parse(localStorage.setItem("auth", true));
    // JSON.parse(localStorage.setItem("user", user));
  } catch (error) {
    // console.log(error.message);
  }
};
export const login = (user) => async (dispatch) => {
  try {
    const { data } = await api.login(user);

    dispatch({ type: LOGIN, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
    console.log({ data });
    console.log("login");
    // localStorage.setItem("auth", true);
  } catch (error) {
    console.log(JSON.stringify(error.message));
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT, payload: false });
    // localStorage.setItem("user", "");
    // localStorage.setItem("auth", false);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, user);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    console.log(error.message);
  }
};

export const error = (error) => async (dispatch) => {
  dispatch({ type: ERROR, payload: error });
  console.log(JSON.stringify(error));
};
export const fetchUserLocalStorage = (data) => async (dispatch) => {
  dispatch({ type: FETCH_USER__LOCAL__STORAGE, payload: data });
  // console.log(JSON.parse(data));
};
