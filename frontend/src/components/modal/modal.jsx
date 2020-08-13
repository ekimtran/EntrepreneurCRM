import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import '../../stylesheets/modal.css';

import LoginForm from '../session/login';
import SignupForm from '../session/signup';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "login":
      component = <LoginForm />;
      break;
    case "signup":
      component = <SignupForm />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mstp = (state) => ({
  modal: state.ui.modal,
});

const mdtp = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mstp, mdtp)(Modal);
