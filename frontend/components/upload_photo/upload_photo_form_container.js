import { connect } from 'react-redux';
import UploadPhotoForm from './upload_photo_form'
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
    updateUserPhoto: (formData, userId) => dispatch(updateUserPhoto(formData, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoForm);
