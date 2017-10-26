import {connect} from 'react-redux';
import DropDown from './drop_down';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => (dispatch(logout()))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(DropDown)
