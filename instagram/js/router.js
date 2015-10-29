import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import UserModel from './resources/model';
import UserCollection from './resources/collection';
import $ from 'jquery';
import UserTemplate from './resources/user_template';
import _ from 'underscore';
let Router = Backbone.Router.extend({

  routes: {
    ""      : "showHome",
    "detail"  : "showDetail",
    "add": "showAdd"
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

  showHome(){
    this.users.fetch().then(()=>{
      let x = this.users.toJSON();
      console.log(x);
       _.each(x, function(y){
   
        var root = <div className = {y.objectId}>
                      <h2>{y.userName}</h2>
                      <img src={y.image}/>
                  </div>
        ReactDom.render(root, document.querySelector('.app'));
       });
    });
  },

});

export default Router;