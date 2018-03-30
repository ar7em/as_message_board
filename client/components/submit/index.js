import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as messagesActions from "actions/messages";

import style from "./style.css";

class Submit extends Component {
  render() {
    return (
      <form className={style.Submit} onSubmit={(e) => {
        e.preventDefault();
        this.props.submit("1", this.input.value, "me");
        this.input.value = "";
      }}>
        <input autoComplete="off" className={style.Submit__input} ref={(input) => {this.input = input;}} />
        <button type="submit" className={style.Submit__send}>
          Send
        </button>
      </form>
    );
  }
}

Submit.propTypes = {
  submit: PropTypes.func.isRequired
};

export const mapDispatchToProps = (dispatch) => ({
  submit: (chat, message, author) => {
    dispatch(messagesActions.submit(chat, message, author));
  }
});

export default connect(null, mapDispatchToProps)(Submit);
