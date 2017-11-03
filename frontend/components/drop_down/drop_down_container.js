import {connect} from 'react-redux';
import DropDown from './drop_down';
import { logout } from '../../actions/session_actions';
import { closeDropDown } from '../../actions/ui_actions';


const mapStateToProps = (state) => {
  return {
    open: state.ui.dropdown.open
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => (dispatch(logout())),
    closeDropDown: () => (dispatch(closeDropDown()))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(DropDown)
