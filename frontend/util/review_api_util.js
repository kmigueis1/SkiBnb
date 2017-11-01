export const fetchReviews = (homeId) => {
  return $.ajax({
    method: 'GET',
    url: `api/homes/${homeId}/reviews`,
  });
};

export const fetchReview = (bookingId) => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings/${bookingId}/review`,
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: `api/reviews`,
    data: { review: review }
  });
};

export const deleteReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  });
};
