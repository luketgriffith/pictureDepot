import React from 'react';

export default React.createClass({
  
  goAdd(){
    this.props.addPic();
    
  },



  render() {
    return (
      <div>
        <h1>Picture Depot</h1>
        <button onClick={this.goAdd}>Add Picture</button>
      </div>
    );
  }

});
