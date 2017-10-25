import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
      password: ""

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({password: "", email: "", first_name: "", last_name: "", phone: "", password: ""});
  }

  handleEmail(e){
    this.setState({email: e.target.value});
  }

  handlePassword(e){
    this.setState({password: e.target.value});
  }


  handlePhone(e){
    this.setState({phone: e.target.value});
  }

  handleFirstName(e){
    this.setState({first_name: e.target.value});

  }

  handleLastName(e){
    this.setState({last_name: e.target.value});
  }


  render(){
    let header = this.props.formType === '/signup' ? (<h1>Sign Up</h1>) : (<h1>Log In</h1>);

    let link = this.props.formType === '/signup' ? ('Log in') : ('Sign up');
    let text = this.props.formType === '/signup' ? ('Already have a Skibnb account?') : ("Don't have an account?");
    let submitName = this.props.formType === '/signup' ? ('Sign up') : ('Log in');
    // let errors = Object.values(this.props.errors);
    let errors = this.props.errors.session.sessionErrors.map((error) => ((<li>{error}</li>)));
    let signupFields = this.props.formType === '/signup' ? (
      <div>
        <div className="input-field">
          <input type="text" placeholder="First Name" onChange={this.handleFirstName} value={this.state.first_name} />
          <i className="icon fa fa-user-o"></i>
        </div>

        <div className="input-field">
          <input type="text" placeholder="Last Name" onChange={this.handleLastName} value={this.state.last_name}></input>
            <i className="icon fa fa-user-o"></i>
        </div>

        <div className="input-field">
          <input type="text" placeholder="Phone" onChange={this.handlePhone} value={this.state.phone}></input>
            <i className="icon"></i>
        </div>
      </div>) : (<h1></h1>);

      // <div className="form-exit"><Link to='/' ><i className="icon fa fa-times"></i></Link></div>
    return (
      <div className="auth-modal">
        <div className="auth-form">
          <div className="form-exit"><Link to='/' ><i>&times;</i></Link></div>
          <div>{header}</div>
          <div className="bar"></div>
          {
            errors.length ? (<div className="auth-errors">
            <div className="errors-left"><i className="icon fa fa-exclamation-triangle"></i></div>
             <div className="errors-right">
              <ul>
                {errors}
              </ul>
            </div>
          </div>) : (null)
        }
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <div className="input-field">
              <input type="text" placeholder="Email address" onChange={this.handleEmail} value={this.state.email}></input>
              <i className="icon fa fa-envelope-o"></i>
            </div>

            {signupFields}
              <div className="input-field">
                <input type="password" placeholder="Create a Password" onChange={this.handlePassword} value={this.state.password}></input>
                <i className="icon fa fa-lock"></i>
              </div>
              <div className="button-container">
                <button>{submitName}</button>
              </div>
          </form>



          <form className="guest-form">
            <input className="guest-hidden" type="text" value={'guest'}></input>
            <input className="guest-hidden" type="password" value={'password'}></input>
            <div className="guest-container">
              <button>Guest Login</button>
            </div>
          </form>
          <div className="bar"></div>

          <div className="auth-footer">
            <p>{text}</p>
            <Link to={link} >{link}</Link>
          </div>

        </div>
      </div>
    );


  }

}


export default SessionForm;
