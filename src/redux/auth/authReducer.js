import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import  authAction  from "./authAction";

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
const error = createReducer(null, {
  [authAction.registerError]: (state, { payload }) => payload,
  [authAction.logInError]: (state, { payload }) => payload,
  [authAction.logOutError]: (state, { payload }) => payload,
  [authAction.getCurrentUserError]: (state, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
