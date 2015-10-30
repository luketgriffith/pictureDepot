import React from 'react';
import showHome from './home_page';

export default React.createClass({

  gohome(){
    this.props.goback();
  },

  thumbnail(userName, image, objectId){
    return <div>
            <h2>{image.userName}</h2>
            <img src={image.image}/>
            <span>{image.objectId}</span>
           </div>;
  },

  render() {
    return (
      <div>
        <img src={this.props.thumbnail}/>
        <button onClick={this.gohome}>Go Back</button>
      </div>
    );
  }

});
