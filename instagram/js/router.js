import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import UserModel from './resources/model';
import UserCollection from './resources/collection';
import $ from 'jquery';
import UserTemplate from './resources/user_template';
import _ from 'underscore';
import HomeTemplate from './router_pages/home_page';
import PreviewTemplate from './router_pages/preview';
import HomeTop from './resources/home_top';
import AddPicture from './router_pages/add_pic';
import EditPost from './router_pages/edit_post';

let Router = Backbone.Router.extend({

  routes: {
    ""      : "showHome",
    "detail"  : "showDetail",
    "add": "showAdd",
    "wat": "wat",
    "preview/:id": "preview",
    "edit/:id": "edit",
    "add": "addPic"
  },

  initialize(appElement) {
    this.el = appElement;
    this.users = new UserCollection();
    let router = this;
  },
  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showHome() {
      ReactDom.render(<HomeTop addPic={()=>this.goto(`add`)}/>, document.querySelector('.top'))
    this.users.fetch().then(()=>{
      ReactDom.render(<HomeTemplate tacoSteak = {this.users.toJSON()}  
      goSingleView={(id)=>this.goto(`preview/${id}`)}/>, document.querySelector('.app'));
      
    });
  },
  preview(id){

    let dumpster = this.users.toJSON().find(item=>item.objectId === id)
    ReactDom.render(<PreviewTemplate thumbnail ={dumpster.image}
    thumbTitle={dumpster.userName} 
    likes = {dumpster.likes}
    cap={dumpster.caption}
    
    editPost={()=>{this.goto(`edit/${dumpster.objectId}`)}
    
    }

    likePic={()=>{
      let picLike = new UserModel({
        likes: dumpster.likes+1,
        objectId: dumpster.objectId
      });
       picLike.save();    
    }}
    goback={()=>this.goto(`/`)}/>, document.querySelector('.app'));

  },
  edit(id){
    let dumpster = this.users.toJSON().find(item=>item.objectId === id)
    ReactDom.render(<EditPost
    thumbnail ={dumpster.image}
    thumbTitle={dumpster.userName} 
    likes = {dumpster.likes}
    cap={dumpster.caption}
    savePicture={()=>{
    let name = document.querySelector('.newTitle').value;
    let imgUrl = document.querySelector('.newImg').value;
    let newCap = document.querySelector('.newCaption').value;
    console.log(name);
    let editPic = new UserModel({
      objectId: dumpster.objectId,
      userName: name,
      image: imgUrl,
      caption: newCap
    
    });
    editPic.save();
    setTimeout(this.goto(`/`), 5000);
    
  }
  }/>, document.querySelector('.app'))
  
    
  },

  addPic(){
    ReactDom.render(<AddPicture savePicture={()=>{
    let name = document.querySelector('.nameInput').value;
    let imgUrl = document.querySelector('.imgInput').value;
    let newCap = document.querySelector('.captionInput').value;

    let newPic = new UserModel({
      userName: name,
      image: imgUrl,
      caption: newCap,
      likes: 0
    });
    newPic.save();
    this.goto(`/`);


    }
    }/>, document.querySelector('.app'));
  }

});

export default Router;