import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  return {
    bookingId: ownProps.match.params.booking_id
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReview: (review) => (dispatch(createReview(review)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
