import * as ApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveAllReviews = (reviews) => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews: reviews
  };
};

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review: review
  };
};

export const removeReview = (id) => {
  return {
    type: REMOVE_REVIEW,
    id: id
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
  };
};


//thunks

export const fetchReviews = (homeId) => (dispatch) => {
  return ApiUtil.fetchReviews(homeId).then((reviews) => (dispatch(receiveAllReviews(reviews))));
}

export const fetchReview = (bookingId) => (dispatch) => {
  return ApiUtil.fetchReview(bookingId).then((review) => (dispatch(receiveReview(review))));
}

export const createReview = (review) => (dispatch) => {
  return ApiUtil.createReview(review).then((review) => (dispatch(receiveReview(review))));
};

export const updateReview = (review) => (dispatch) => {
  return ApiUtil.updateReview(review).then((review) => (dispatch(receiveReview(review))));
};

export const deleteReview = (id) => (dispatch) => {
  return ApiUtil.deleteReview(id).then((review) => (dispatch(removeReview(review.id))));
};
