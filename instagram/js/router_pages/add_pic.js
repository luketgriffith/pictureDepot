import React from 'react';

export default React.createClass({
  
  savePic(){
    this.props.savePicture();
  },


  render() {
    return (
      <div>
        <input type='text' placeholder = 'User Name' className='nameInput'/>
        <input type='text' placeholder='Image URL' className='imgInput'/>
        <textarea type='text' placeholder='Caption' className='captionInput'/>
        <button onClick={this.savePic}>Save</button>
      </div>
    );
  }

});
