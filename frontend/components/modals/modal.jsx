import React from 'react';
import ReactDOM from 'react-dom';
import SessionFormContainer from '../session_form/session_form_container';

class Modal extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.modalIsOpen) {
      return (
        <div id="session-modal">
          <div className="close-modal"></div>
          <div className="modal-content"></div>
        </div>
      );
    } else {
      return (
        <div className="modal-not-active"></div>
      );
    }
  }
}

export default Modal;
