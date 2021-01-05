import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "../Form/formEditor";
import ListContact from "../ContactList/ListContact";
import Filter from "../Filter/Filter";
import operationContact from "../../redux/contacts/operationContacts";
import contactSelector from "../../redux/contacts/contactSelector";
import { isLogIn } from "../../redux/auth/authSelector";
import style from "./phone.module.css"


//
class PhoneBook extends Component {
  componentDidMount() {
    this.props.onFetchContact();

    if (!this.props.isAuthLogIn) {
      this.props.history.replace("/login");
      return;
    }
  }

  componentDidUpdate() {
    if (!this.props.isAuthLogIn) {
      this.props.history.replace("/login");
      return;
    }
  }

  render() {
    return (
      <div className={style.phone}>
        {this.props.isLoadingContacts && <h1>LOADING ...</h1>}
        <Form />
        <Filter />
        <ListContact />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoadingContacts: contactSelector.getLoading(state),
  isAuthLogIn: isLogIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchContact: () => dispatch(operationContact.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
