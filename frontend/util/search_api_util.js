
export const searchLocation = (location) => {
  return $.ajax({
    method: 'GET',
    url: `api/homes/search/${location}`
  });
};
