import { combineReducers } from "redux";
import contactAction from "./contactAction";
import { createReducer } from "@reduxjs/toolkit";
// import {getUserEmail} from "../auth/authSelector";


const addContact = (state = [], { payload }) => {
  const prevContactNumber = state.some(
    (e) => e.number === payload.number
  );
  // console.log(contactAction.fetchContactSuccess(state.itemContacts));
  
  
  if (
    !prevContactNumber &&
    payload.name &&
    payload.number
  )
    return [...state,payload];
  if (prevContactNumber) {
    alert("такий контакт вже є");
  }
  if (payload.name === "" || payload.number === "") {
    alert("внесить данні"); 
  }
  return state;
};

// const initialContacts

const deleteContact = (state, { payload }) => {
  return state.filter((contact) => contact.id !== payload);
};

const itemContacts = createReducer( [], {
  
  [contactAction.fetchContactSuccess]:(state,{payload}) => payload,
  [contactAction.addContactSuccess]: addContact,  
  [contactAction.deleteContactSuccess]: deleteContact,
});

const loading = createReducer (false, {
  [contactAction.fetchContactRecuest]:() => true,
  [contactAction.addContactRecuest]:() => true,
  [contactAction.deleteContactRecuest]:() => true,
  [contactAction.fetchContactSuccess]:() => false,
  [contactAction.addContactSuccess]:() => false,
  [contactAction.deleteContactSuccess]:() => false,
  [contactAction.fetchContactError]:() => false,
  [contactAction.addContactError]:() => false,
  [contactAction.deleteContactError]:() => false,
})

const filter = createReducer("", {
  [contactAction.filterContact]: (state, { payload }) => payload,
});

export default combineReducers({
  itemContacts,
  filter,
  loading
});
