import React from 'react';

class UploadPhotoForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

  }



  handleFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result})
    };

    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    // e.preventDefault();
    const formData = new FormData();

    formData.append("user[avatar]", this.state.imageFile);
    const userFields = Object.values(this.props.currentUser);

    userFields.forEach((field) => {
      formData.append(`user[${field}]`, this.props.currentUser[field]);
    })
    console.log(this.props.currentUser.id);
    this.props.updateUserPhoto(formData, this.props.currentUser.id);
  }



  render(){

    let errors = this.props.errors.session.sessionErrors.map((error) => ((<li>{error}</li>)));



    return(

    <div className="user-edit-form">
      <div className="form-header"><span>Profile Photo</span></div>
      <div className="form-wrapper">
      <form className="edit-form" onSubmit={this.handleSubmit}>

        <div className="input-field">
          <input type="file" placeholder="First Name" onChange={this.handleFile}></input>
        </div>
          <div className="button-container">
            <button>Save</button>
          </div>
          <img src={this.state.imageUrl}/>

      </form>
    </div>
    </div>
    );

  }
}
export default UploadPhotoForm;
