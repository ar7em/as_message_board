import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Messages = (props) => (
  <div>
    <div>
      <strong>Chat: {props.chatName}</strong>
      <a href="#/list">(back to catalogue)</a>
    </div>
    <ul>
      {
        props.messages.map((item, index) => (
          <li key={index}>{item.author}: {item.message}</li>
        ))
      }
    </ul>
  </div>
);

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  chatName: PropTypes.string.isRequired
};

export const mapStateToProps = (state, ownProps) => ({
  messages: state.messages.all.filter((item) => (
    item.chat === ownProps.chatName
  ))
});

export default connect(mapStateToProps)(Messages);
