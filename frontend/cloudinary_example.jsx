import React from 'react';


class UploadButton extends React.Component {

  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) => {
      if(error === null){
        //upload successful
        this.props.postImage(image[0].url);

      }else {
        //upload not successful
      }
    }.bind(this));
  }

  render(){
    return(
      <button onClick={this.upload} >Submit</button>
    );
  }
}


//in PARENT COMPONENT with necessary slice of state:
//reference your backend to see what keys you need to send to controller
postImage(url){
  let img = {url: url}
  $.ajax({
    method: "POST",
    url: '/api/images',
    data: {image: img},
    processData: false,
    contentType: false,
    success: (image)=>{
      images = this.state.images;
      this.setState({images: images})
    }.bind(this)
  })
}

render(){
  return (
    <div>
      <UploadButton postImage={this.postImage} />
    </div>
  );
}
