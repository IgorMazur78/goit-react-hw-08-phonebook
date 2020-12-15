import { combineReducers } from "redux";
import contactAction from "./contactAction";
import { createReducer } from "@reduxjs/toolkit";
import {getUserEmail} from "../auth/authSelector";

const initialСontacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const addContact = (state, { payload }) => {
  const prevContactNumber = state.some(
    (e) => e.number === payload.number
  );
  if (
    !prevContactNumber &&
    payload.name &&
    payload.number
  )
    return [...state, payload];
  if (prevContactNumber) {
    alert("такий контакт вже є");
  }
  if (payload.name === "" || payload.number === "") {
    alert("внесить данні"); 
  }
  return state;
};

const deleteContact = (state, { payload }) => {
  return state.filter((contact) => contact.id !== payload);
};

const itemContacts = createReducer( [], {
   
  [contactAction.fetchContactSuccess]:addContact,
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
