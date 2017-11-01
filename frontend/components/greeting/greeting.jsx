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
    this.handleDropdrop = this.handleDropdrop.bind(this);
  }

  componentDidMount(){
    this.state.dropActive = false;
  }


  handleDropdrop(e){
    this.setState({dropActive: !this.state.dropActive});
  }

render(){
  // <img src={user.avatar_url} ></img>
  //this img tag above is how you can insert the user's image
  return (
    this.props.currentUser ?
    (
    <div>
      <div className = 'auth-links'>
        <div className = 'auth-link-container'>
          <div className = 'user-profile' onClick= {this.handleDropdrop}>
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
