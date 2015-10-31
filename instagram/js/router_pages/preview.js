import React from 'react';
import showHome from './home_page';

export default React.createClass({

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
      <div className= 'chimichangas'>
        <h2>{this.props.thumbTitle}</h2>
        <img src={this.props.thumbnail}/>
        <span>Likes: {this.props.likes}</span>
        <p>{this.props.cap}</p>
        <button onClick={this.likeIt}>Like</button>
        <button onClick={this.gohome}>Go Back</button>
      </div>
    );
  }

});
