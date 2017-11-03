import Greeting from './greeting';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openDropDown } from '../../actions/ui_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => (dispatch(logout())),
    openDropDown: () => (dispatch(openDropDown()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
