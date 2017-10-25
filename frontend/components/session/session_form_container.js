import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  //may want to check what formType string actually evaluates to
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.errors,
    formType: ownProps.location.pathname
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = signup;
  let processGuest = login;

  if(ownProps.location.pathname === '/login'){
    processForm = login;
  }

  return {
    processForm: (user) => dispatch(processForm(user)),
    processGuest: (user) => dispatch(processGuest(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
