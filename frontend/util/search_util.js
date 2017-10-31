export const searchLocation = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBkJs35X0ZAAcPwTVI7J2mp9FjuGyf-_F8'
  });
};
