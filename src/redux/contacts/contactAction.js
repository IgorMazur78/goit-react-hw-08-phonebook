// import uuid from "react-uuid";
import { createAction } from "@reduxjs/toolkit";

const addContactRecuest = createAction("contact/addRecuest");
const addContactSuccess = createAction("contact/addSuccess");
const addContactError = createAction("contact/addError");

const fetchContactRecuest = createAction("contact/fetchRecuest");
const fetchContactSuccess = createAction("contact/fetchSuccess");
const fetchContactError = createAction("contact/fetchError");

const deleteContactRecuest = createAction("contact/deleteContactRecuest");
const deleteContactSuccess = createAction("contact/deleteContactSuccess");
const deleteContactError = createAction("contact/deleteContactError");



const filterContact = createAction("contact/filter");

// eslint-disable-next-line import/no-anonymous-default-export
export default {

  filterContact,
  addContactRecuest,
  addContactSuccess,
  fetchContactSuccess,
  fetchContactRecuest,
  fetchContactError,
  deleteContactRecuest,
  deleteContactSuccess,
  deleteContactError,
  addContactError,


};
