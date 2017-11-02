import React from 'react';
import { Link } from 'react-router-dom';

class DropDown extends React.Component {

  constructor(props){
    super(props);

  }


  render(){
    return (
      this.props.active ?
      (
      <div className='drop-down' onClick={(e) => {e.stopPropagation()}}>
        <Link to='/user/edit'>
        <div className='drop-down-item'>
          <span>Edit Profile</span>
        </div>
        </Link>
        <Link to='/account/bookings'>
        <div className='drop-down-item'>
          <span>My Bookings</span>
        </div>
        </Link>
        <div onClick={this.props.logout} className='drop-down-item last-item'>
          <span>Log Out</span>
        </div>
      </div>
    ) : ("")
    );
  }

}


// <div className='drop-down' onClick={(e) => {e.stopPropagation()}}>
//put event listener on App and have it automatically change the state of all drop downs to close
//The dropdown itself has to be a class react component which is connected to the store and listens to
//that slice of state.

export default DropDown;
