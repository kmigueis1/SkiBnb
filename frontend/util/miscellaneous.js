export const createBookingDate = (booking) => {
  let endDate = booking.end_date.split("-");
  let endDateYear = parseInt(endDate[0]);
  let endDateMonth = parseInt(endDate[1]);
  let endDateDay = parseInt(endDate[2]);
  let bookingDate = new Date(endDateYear, endDateMonth - 1, endDateDay);
  return bookingDate;
}

export const createDateObject = (date) => {
  let endDate = date.split("-");
  let endDateYear = parseInt(endDate[0]);
  let endDateMonth = parseInt(endDate[1]);
  let endDateDay = parseInt(endDate[2]);
  let bookingDate = new Date(endDateYear, endDateMonth - 1, endDateDay);
  return bookingDate;
}
