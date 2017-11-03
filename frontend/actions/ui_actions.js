export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';


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
