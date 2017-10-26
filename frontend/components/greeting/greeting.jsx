import React from 'react';
import { Link } from 'react-router-dom';
class Greeting extends React.Component {

render(){

  return (
    this.props.currentUser ?
    <div>
    <h1>{`Welcome, ${this.props.currentUser.first_name}`}</h1>
    <button onClick={this.props.logout}>Log Out</button>
    </div> :

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

  );
}

}

export default Greeting;
