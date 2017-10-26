import React from 'react'


const DropDown = (props) => {
  return (
    props.active ?
    (
    <div className='drop-down' onClick={(e) => {e.stopPropagation()}}>
      <ul>
        <li>Hello</li>
        <li>There</li>
      </ul>
    </div>
  ) : ("")
  );
}

// <div className='drop-down' onClick={(e) => {e.stopPropagation()}}>
//put event listener on App and have it automatically change the state of all drop downs to close
//The dropdown itself has to be a class react component which is connected to the store and listens to
//that slice of state.

export default DropDown;
