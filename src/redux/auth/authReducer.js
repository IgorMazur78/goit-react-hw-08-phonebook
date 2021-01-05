import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import authAction from "./authAction";
import contactAction from "../contacts/contactAction";

const initialUserState = {
  name: "",
  email: "",
};

const user = createReducer(initialUserState, {
  [authAction.registerSuccess]: (state, { payload }) => payload.user,
  [authAction.logInSuccess]: (state, { payload }) => payload.user,
  [authAction.getCurrentUserSuccess]: (state, { payload }) => payload,
  [authAction.logOutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authAction.registerSuccess]: (state, { payload }) => payload.token,
  [authAction.logInSuccess]: (state, { payload }) => payload.token,
  [authAction.logOutSuccess]: () => null,
});

const authorized = createReducer(false, {
  [authAction.registerSuccess]: () => true,
  [authAction.logInSuccess]: () => true,
  [authAction.getCurrentUserSuccess]: () => true,
  [authAction.registerError]: () => false,
  [authAction.logInError]: () => false,
  [authAction.getCurrentUserError]: () => false,
  [authAction.logOutSuccess]: () => false,
});

const error = createReducer(null, {
  [authAction.registerError]: (state, { payload }) => payload,
  [authAction.logInError]: (state, { payload }) => payload,
  [authAction.logOutError]: (state, { payload }) => payload,
  [authAction.getCurrentUserError]: (state, { payload }) => payload,
});

export default combineReducers({
  user,
  authorized,
  token,
  error,
});
