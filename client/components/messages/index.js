import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Messages = (props) => (
  <div>
    <strong>Chat: </strong>
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
  messages: PropTypes.array.isRequired
};

export const mapStateToProps = (state) => ({
  messages: state.messages.all
});

export default connect(mapStateToProps)(Messages);
