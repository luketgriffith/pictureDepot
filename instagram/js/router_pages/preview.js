import React from 'react';
import showHome from './home_page';

export default React.createClass({

  gohome(){
    this.props.goback();
  },

  findData(item, id){
    if(id===item.objectId){
      return <div key ={wat}>
            <h2>{item.userName}</h2>
            <img src={item.image}/>
            <span>{item.objectId}</span>
           </div>;
    }
  },

  render() {
    return (
      <div>
        <h1>Scrub</h1>
        {this.props.view.map(this.findData)}
        <button onClick={this.gohome}>Go Back</button>
      </div>
    );
  }

});
