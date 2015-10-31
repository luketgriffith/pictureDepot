import React from 'react';

export default React.createClass({
  
  goAdd(){
    this.props.addPic();
    
  },



  render() {
    return (
      <div>
        <button onClick={this.goAdd}>Add Picture</button>
      </div>
    );
  }

});
