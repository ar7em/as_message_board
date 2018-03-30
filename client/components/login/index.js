import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import PropTypes from "prop-types";
import * as userActions from "actions/user";

class Login extends Component {
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.rename(this.input.value);
      }}>
        What is your nickname?
        <input ref={(input) => {this.input = input;}} />
        <button type="submit">
          Login
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  rename: PropTypes.func.isRequired
};

export const mapDispatchToProps = (dispatch) => ({
  rename: (name) => {
    if (name) {
      dispatch(userActions.rename(name));
      dispatch(push("/list"));
    }
  }
});

export default connect(null, mapDispatchToProps)(Login);
