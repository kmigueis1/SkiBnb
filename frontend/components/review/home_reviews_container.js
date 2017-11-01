import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import HomeReviews from './home_reviews';

const mapStateToProps = (state) => {
  return {
    reviews: state.entities.reviews
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    homeId: ownProps.homeId,
    fetchReviews: (homeId) => (dispatch(fetchReviews(homeId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeReviews);
