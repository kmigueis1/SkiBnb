import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';


const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_REVIEWS:
      // newState = Object.assign({}, {}, action.reviews);
      newState = action.reviews
      return newState;
    case RECEIVE_REVIEW:
      newState = Object.assign({}, state, {[action.review.id]: action.review});
      return newState;
    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default: return state;
  }
};

export default ReviewsReducer;
