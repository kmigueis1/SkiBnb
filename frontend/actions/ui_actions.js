export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';
export const STOP_LOADING = 'STOP_LOADING';

export const openDropDown = () => {
  return {
    type: OPEN_DROPDOWN,

  };
};

export const closeDropDown = () => {
  return {
    type: CLOSE_DROPDOWN
  };
};

export const stopLoading = () => {
  console.log("I am stop loading!!!!");

  return{
    type: STOP_LOADING
  };
};
