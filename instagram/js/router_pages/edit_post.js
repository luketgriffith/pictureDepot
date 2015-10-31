import React from 'react';

export default React.createClass({
  
  savePic(event){
    event.preventDefault();
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
  getInitialState() {
    return {
      message1: this.props.thumbTitle,
      message2: this.props.thumbnail,
      message3: this.props.cap
    };
  },

  updateMessage(event) {
    let newMessage = event.target.value;

    this.setState({
      message1: newMessage,
    });
  },
  updateMessage2(event) {
    let newMessage = event.target.value;

      this.setState({
      message2: newMessage,
    });
  },
    updateMessage3(event) {
    let newMessage = event.target.value;

      this.setState({
      message3: newMessage,
    });
  },
  render() {
    return (
      <div className= 'enchiladas'>
        <h2>{this.props.thumbTitle}</h2>
        <img src={this.props.thumbnail}/>
        <span>Likes: {this.props.likes}</span>
        <p>{this.props.cap}</p>
        <input type='text' onChange={this.updateMessage} 
             className='newTitle' value={this.state.message1} 
              placeholder='Your new title'/>

        <input type='text' onChange= {this.updateMessage2} 
            className='newImg' value={this.state.message2} 
            placeholder='Your new image URL'/>
        <textarea type='text' onChange={this.updateMessage3} 
            className='newCaption' value={this.state.message3} 
            placeholder ='Your new caption'/>
        <button onClick={this.likeIt}>Like</button>
        <button onClick={this.gohome}>Go Back</button>
        <button onClick={this.savePic}>Save Changes</button>
      </div>
    );
  }

});