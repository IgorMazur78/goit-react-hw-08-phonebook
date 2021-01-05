import React, { Component } from "react";
import { connect } from "react-redux";
import operationContacts from "../../redux/contacts/operationContacts";
import { Button, Typography} from "@material-ui/core";
import style from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handelInputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handelSubmit = (evt) => {
    evt.preventDefault();

    this.props.onhandleAddContact(this.state.name, this.state.number);

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={style.formStyle}>
        <Typography variant="h6" className={style.formStyleTitle}>Phonebook</Typography>
        <form className={style.formStyleFormInput} onSubmit={this.handelSubmit}>
          <label>
           <Typography variant="h8">Name</Typography>
            <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handelInputChange}
              placeholder="Add name"
              autoFocus
            ></input>
            <br />
          </label>
          <label>
          <Typography variant="h8">Number</Typography>
            <br />
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handelInputChange}
              placeholder="Add number"
              autoFocus
            ></input>
          </label>
          <br />
          <Button  color = "secondary" variant="contained" type="submit" >
            Add contact
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onhandleAddContact: (name, number) =>
      dispatch(operationContacts.addContacts(name, number)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
