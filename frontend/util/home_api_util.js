export const fetchHomes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/homes',
  });
};

export const fetchHome = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/homes/${id}`,
  });
};

export const createHome = (home) => {
  return $.ajax({
    method: 'POST',
    url: `api/homes`,
    data: { home: home }
  });
};

export const updateHome = (home) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/homes/${home.id}`,
    data: { home: home }
  });
};

export const deleteHome = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/homes/${id}`
  });
};
