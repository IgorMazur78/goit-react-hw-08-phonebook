import React, {Component} from "react";
import {connect} from "react-redux"

import Form from "../Form/formEditor";
import ListContact from "../ContactList/ListContact";
import Filter from "../Filter/Filter";
import operationContact from "../../redux/contacts/operationContacts";
import contactSelector from "../../redux/contacts/contactSelector"
import {isLogIn} from "../../redux/auth/authSelector"
// import { render } from "react-dom";


// 
class PhoneBook extends Component {

  componentDidMount(){
    if(!this.props.isAuthLogIn){
        this.props.history.replace("/login")
        return;
    }
    // this.props.onFetchContact()
  }
  componentDidUpdate(){
    if(!this.props.isAuthLogIn){
        this.props.history.replace("/login")
        return;
    }
  }
  
  render(){
    return (
        <div className="App">
          {this.props.isLoadingContacts && <h1>LOADING ...</h1>}
          <Form />
          <Filter />
          <ListContact />
        </div>
      );
  }
    

  
  
}
const mapStateToProps = state => ({
isLoadingContacts: contactSelector.getLoading(state),
isAuthLogIn: isLogIn(state)
})

const mapDispatchToProps = {
  onFetchContact: operationContact.fetchContacts,
  
};



export default connect(mapStateToProps,mapDispatchToProps)(PhoneBook);
