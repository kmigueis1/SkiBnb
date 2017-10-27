import React from 'react';

class UploadPhotoForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);

  }



  handleFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result})
    }.bind(this);
    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    // e.preventDefault();
    const data = new FormData();
    if(this.state.imageFile) data.append("this.state.imageFile");
    const user = Object.assign({}, this.props.currentUser);

    this.props.updateUserPhoto(user);
  }



  render(){

    let errors = this.props.errors.session.sessionErrors.map((error) => ((<li>{error}</li>)));



    return(
      <div className="user-edit-form">
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
    );

  }
}
export default UploadPhotoForm;
