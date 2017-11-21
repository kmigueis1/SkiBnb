import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../drop_down/drop_down';
import DropDownContainer from '../drop_down/drop_down_container';

class Greeting extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      dropActive: false
    };
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount(){
    this.state.dropActive = false;
  }


  handleDropDown(e){
    this.props.openDropDown();
  }

render(){
  return (
    this.props.currentUser ?
    (
    <div>
      <div className = 'auth-links'>
        <div className = 'auth-link-container'>
          <div className = 'user-profile' onClick= {this.handleDropDown}>
            <img className ='avatar-photo' src={this.props.currentUser.avatar_url} ></img>
            <DropDownContainer active={this.state.dropActive}/>
          </div>
        </div>
      </div>
    </div>
  ) :

    (
      <div className='auth-links'>
      <div className='auth-link-container'>
        <div className='auth-link'>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
      <div className='auth-link-container'>
        <div className='auth-link'>
          <Link to='/login'>Log In</Link>
        </div>
      </div>

    </div>
  )

  );
}

}

export default Greeting;
