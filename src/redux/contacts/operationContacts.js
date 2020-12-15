import axios from "axios";
import contactAction from "./contactAction";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

const addContacts = (name, number) => (dispatch) => {
  dispatch(contactAction.addContactRecuest());
  axios
    .post("/contacts", { name, number })
    .then((response) => {
      dispatch(contactAction.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(contactAction.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactAction.fetchContactRecuest());
  axios
    .get("/contacts")
    .then((response) => {
      dispatch(contactAction.fetchContactSuccess(response.data));
    })
    .catch((error) => dispatch(contactAction.fetchContactError(error)));
};

const deleteContacts = (id) => (dispatch) => {
  dispatch(contactAction.deleteContactRecuest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactAction.deleteContactSuccess(id)))
    .catch((error) => dispatch(contactAction.deleteContactError(error)));
};

// const patchContacts = (id) => (dispatch,getState) => {
// const {
//   auth: {token: persistedToken}
// } = getState();

// if(!persistedToken){
//   return
// }

// token.set(persistedToken);

//   dispatch(contactAction.patchContactRecuest())
//   axios
//   .patch(`/contacts/${id}`)
//   .then((response)=>dispatch(contactAction.patchContactSuccess(response.data)))
//   .catch(error => dispatch(contactAction.patchContactError(error)))
// }

export default {
  addContacts,
  fetchContacts,
  deleteContacts,
  // patchContacts
};
