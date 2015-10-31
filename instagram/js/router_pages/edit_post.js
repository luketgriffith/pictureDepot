import React from 'react';

export default React.createClass({
  
  savePic(){
    this.props.savePicture();
  },


  gohome(){
    this.props.goback();
  },

  thumbnail(image){
 
  },
  thumbTitle(image){

  },
  cap(image){

  },
  likes(image){

  },
  likeIt(){
    this.props.likePic();
  },

  render() {
    return (
      <div className= 'enchiladas'>
        <h2>{this.props.thumbTitle}</h2>
        <img src={this.props.thumbnail}/>
        <span>Likes: {this.props.likes}</span>
        <p>{this.props.cap}</p>
        <input type='text' className='newTitle' placeholder='Your new title'/>
        <input type='text' className='newImg' placeholder='Your new image URL'/>
        <textarea type='text' className='newCaption' placeholder
        ='Your new caption'/>
        <button onClick={this.likeIt}>Like</button>
        <button onClick={this.gohome}>Go Back</button>
        <button onClick={this.savePic}>Save Changes</button>
      </div>
    );
  }

});