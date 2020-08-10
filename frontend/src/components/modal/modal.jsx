import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import '../../stylesheets/modal.css';
// import LoginFormContainer from "../session_form/login_form_container";
// import SignupFormContainer from "../session_form/signup_form_container";
// import PopupContainer from "../popup/popup_container";
// import NotificationIndex from "../notification/notify_index_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    // case "login":
    //   component = <LoginFormContainer />;
    //   break;
    // case "signup":
    //   component = <SignupFormContainer />;
    //   break;
    // case "popup":
    //   component = <PopupContainer />;
    //   break;
    // case "notification":
    //   component = <NotificationIndex />;
    //   break;
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
