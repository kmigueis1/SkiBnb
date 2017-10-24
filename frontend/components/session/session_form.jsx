import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

  }


  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({password: "", username: ""});
  }

  handleUsername(e){
    this.setState({username: e.target.value});
  }

  handlePassword(e){
    this.setState({password: e.target.value});
  }

  render(){
    let header = this.props.formType === '/signup' ? (<h1>Sign Up</h1>) : (<h1>Log In</h1>);

    let link = this.props.formType === '/signup' ? ('/login') : ('/signup');
    // let errors = Object.values(this.props.errors);
    // console.log(this.props.errors.session.sessionErrors);
    return (
      <div>
        {header}
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" onChange={this.handleUsername} value={this.state.username}></input>
          </label>

          <label>Password
            <input type="text" onChange={this.handlePassword} value={this.state.password}></input>
          </label>
          <button>Submit</button>
        </form>
        <Link to={link} >{link.slice(1)}</Link>
      </div>
    );


  }
}


export default SessionForm;
