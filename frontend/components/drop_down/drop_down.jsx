import React from 'react';
import { Link } from 'react-router-dom';

class DropDown extends React.Component {

  constructor(props){
    super(props);
    this.handleModal = this.handleModal.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleModal(e) {
    e.stopPropagation();
    this.props.closeDropDown();
  }

  handleDropDown(e){
    e.stopPropagation();
    this.props.closeDropDown();
  }
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
export default DropDown;
