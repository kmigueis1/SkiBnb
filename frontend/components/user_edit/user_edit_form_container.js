import { connect } from 'react-redux';
import UserEditForm from './user_edit_form'
import { updateUserPhoto } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  //may want to check what formType string actually evaluates to
  return {
    currentUser: state.session.currentUser,
    errors: state.errors,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUserPhoto: (formData) => dispatch(updateUserPhoto(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm);
