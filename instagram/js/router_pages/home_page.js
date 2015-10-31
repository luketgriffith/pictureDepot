import React from 'react';

export default React.createClass({
  
  processData(item, wat){
    return  <div key ={wat} onClick={(event) => this.singleView(item.objectId)} className='mainDivs'>
            <h2>{item.userName}</h2>
            <img src={item.image}/>
            <div className='likesCaption'>
            <span>Likes: {item.likes}</span>
            <p>{item.caption}</p>
            </div>
           </div>;
    
  },

  singleView(id){
    this.props.goSingleView(id);
  },


  render() {
    return (
      <div className= 'mainPage'>
        {this.props.tacoSteak.map(this.processData)}
      </div>
    );
  }

});
