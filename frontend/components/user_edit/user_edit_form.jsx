
import React from 'react';

class UserEditForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      email: props.currentUser.email,
      first_name: props.currentUser.first_name,
      last_name: props.currentUser.last_name,
      phone: props.currentUser.phone
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);

  }


  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign(this.props.currentUser, this.state);
    this.props.updateUser(user);
  }

  handleFirstName(e){
    this.setState({first_name: e.target.value});

  }

  handleLastName(e){
    this.setState({last_name: e.target.value});
  }

  handleEmail(e){
    this.setState({email: e.target.value});
  }

  handlePhone(e){
    this.setState({phone: e.target.value});
  }


  render(){

    let errors = this.props.errors.session.sessionErrors.map((error) => ((<li>{error}</li>)));



    return(
      <div className="user-edit-form">
      <form className="edit-form" onSubmit={this.handleSubmit}>
        <div className="input-field">
          <input type="text" placeholder="First Name" onChange={this.handleFirstName} value={this.state.first_name}></input>
        </div>
        <div className="input-field">
          <input type="text" placeholder="Last Name" onChange={this.handleLastName} value={this.state.last_name}></input>
        </div>
        <div className="input-field">
          <input type="text" placeholder="Email address" onChange={this.handleEmail} value={this.state.email}></input>
        </div>
        <div className="input-field">
          <input type="text" placeholder="Phone" onChange={this.handlePhone} value={this.state.phone}></input>
        </div>


          <div className="button-container">
            <button>Save</button>
          </div>
      </form>
    </div>
    );

  }
}
export default UserEditForm;
