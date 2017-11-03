import React from 'react';
import { Link } from 'react-router-dom';

class DropDown extends React.Component {

  constructor(props){
    super(props);
    //this.props.active ?
    this.handleModal = this.handleModal.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleModal(e) {
    e.stopPropagation();
    console.log("im in the handle modal");
    console.log(this.props);
    this.props.closeDropDown();
  }

  handleDropDown(e){
    e.stopPropagation();
    this.props.closeDropDown();
  }
  // <div className='drop-down' onClick={(e) => {e.stopPropagation()}}>
  // (e) => {e.stopPropagation()
  render(){
    return (
      this.props.open ?
      (
        <div>
          <div className="drop-down-mask" onClick={this.handleModal}></div>
          <div className='drop-down' onClick={this.handleDropDown}>
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
