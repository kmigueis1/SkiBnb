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

    <div>

      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>

    </div>

  );
}

}

export default Greeting;
