import React from 'react';

export default React.createClass({
  
  processData(item, wat){
    return <div key ={wat} onClick={(event) => this.singleView(item.objectId)}>
            <h2>{item.userName}</h2>
            <img src={item.image}/>
            <span>{item.objectId}</span>
           </div>;
    
  },

  singleView(id){
    this.props.goSingleView(id);
  },


  render() {
    return (
      <div>
        {this.props.tacoSteak.map(this.processData)}
      </div>
    );
  }

});
