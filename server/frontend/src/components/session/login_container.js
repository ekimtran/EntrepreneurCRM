import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import LoginForm from './login';

const mstp = (state) => {
  return {
    errors: state.errors.session,
  };
};

const mdtp = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mstp, mdtp)(LoginForm);
