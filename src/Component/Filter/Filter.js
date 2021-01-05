import React from "react";
import { connect } from "react-redux";
import contactAction from "../../redux/contacts/contactAction"
import contactSelector from "../../redux/contacts/contactSelector"

import style from "./Filter.module.css"
import { Typography} from "@material-ui/core";

 function Filter({value, onChange}) {
   
  return (
    <form className = {style.filter}>
      <Typography variant="h6" className = {style.filterTitle}>Find contacts by name</Typography>
      <input
      className = {style.filterInput
      }
        type="text"
        name="filter"
        value={value}
        onChange={e => onChange(e.target.value)}
        
      />
    </form>
  );
}
const mapStateToProps = state => ({
  value: contactSelector.getFilter(state)
})
const mapDispatchtoProps = {
  onChange: contactAction.filterContact
}
export default connect(mapStateToProps,mapDispatchtoProps)(Filter);