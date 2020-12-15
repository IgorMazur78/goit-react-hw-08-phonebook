import {createSelector} from "@reduxjs/toolkit"


const getitemContacts = (state) => state.allContacts.itemContacts;
const getFilter = (state) => state.allContacts.filter;
 const getLoading = (state) => state.allContacts.loading;

 const getVisibleContact = createSelector ([getitemContacts, getFilter], (contacts, filter ) => {
    const visibleContact = contacts.filter((contact) => {
        const str = contact.name.toLowerCase();
        return str.includes(filter.toLowerCase());
      });
      return visibleContact;
 })



export default {
    getitemContacts,
    getFilter,
    getLoading,
    getVisibleContact
}