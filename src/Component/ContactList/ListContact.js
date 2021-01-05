import React from "react";
import { connect } from "react-redux";

import operationContact from "../../redux/contacts/operationContacts";
import contactSelector from "../../redux/contacts/contactSelector"

import style from "./Listcontact.module.css";
import {Typography} from "@material-ui/core";
import "./ListContactAnimation.css";


function ListContact({ contact, onDeleteContact }) {
  return (
    <ul>
      
      {contact.map(({ id, name, number }) => (
        <li key={id} className={style.ListContactItem}>
          <Typography >{name}:</Typography>
          <Typography >{number}</Typography>
         

          <button
            className={style.buttonDeleteContact}
            onClick={() => onDeleteContact(id)}
          ></button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  contact:contactSelector.getVisibleContact(state)

})
const mapDispatchToProps = {
   
  onDeleteContact: operationContact.deleteContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContact);
