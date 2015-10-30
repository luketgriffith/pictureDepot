import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import UserModel from './resources/model';
import UserCollection from './resources/collection';
import $ from 'jquery';
import UserTemplate from './resources/user_template';
import _ from 'underscore';
import HomeTemplate from './router_pages/home_page';

let Router = Backbone.Router.extend({

  routes: {
    ""      : "showHome",
    "detail"  : "showDetail",
    "add": "showAdd",
    "wat": "wat",
    "preview": "showPreview"
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
    this.users.fetch().then(()=>{
      ReactDom.render(<HomeTemplate tacoSteak = {this.users.toJSON()}  
        whatever={this.users.toJSON()} goSingleView={(id)=>this.goto(`preview/${id}`)} />, document.querySelector('.app'));
    
    });
  }

});

export default Router;