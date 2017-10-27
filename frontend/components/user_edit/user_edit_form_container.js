import { connect } from 'react-redux';
import UserEditForm from './user_edit_form'
import { updateUser } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  //may want to check what formType string actually evaluates to
  return {
    currentUser: state.session.currentUser,
    errors: state.errors,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm);
