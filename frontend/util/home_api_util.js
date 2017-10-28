export const fetchHomes = () => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user: user}
  });
};
