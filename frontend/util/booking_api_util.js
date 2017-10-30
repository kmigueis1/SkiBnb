export const fetchBookings = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/bookings',
  });
};

export const fetchBooking = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`,
  });
};

export const createBooking = (booking) => {
  return $.ajax({
    method: 'POST',
    url: `api/bookings`,
    data: { booking: booking }
  });
};

export const updateBooking = (booking) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: { booking: booking }
  });
};

export const deleteBooking = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookings/${id}`
  });
};
