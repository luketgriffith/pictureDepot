import Backbone from 'backbone';
import personCollection from './person_collection';
import contactsTemplate from './views/home';
import personTemplate from './views/person';
import $ from 'jquery';

let Router = Backbone.Router.extend({
  routes: {
    //routes: functions called when route is triggered
    "": "home",   //home page doesn't need a name
    "person1": "person1page",
    "person2": "person2page"
  },


  initialize: function(appElement){
    this.$el = appElement;
    this.people = new personCollection();
    let router= this;
    this.$el.on('click', '.names', function(event){
      
        let $li= $(event.currentTarget);
        var nameId = $li.data('todo-id');
        router.navigate(`people/${nameId}`);
        router.person1page(nameId);

    })
  },

  home: function  () {
    
     this.people.fetch().then(function(){
      this.$el.html(contactsTemplate(this.people.toJSON()) );

    }.bind(this))
  },

    showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },
  person1page: function(nameId){
    let dude = this.people.get(nameId);
     if (dude) {
      // todos have fetched and we grabbed the one we want
      this.$el.html( personTemplate(dude.toJSON()) );
    } else {
      // todos not fetched so we need to load the one we want
      let router = this;
      dude = this.people.add({objectId: nameId});
      this.showSpinner();
      dude.fetch().then(function() {
        router.$el.html( personTemplate(dude.toJSON()) );
      });
    }
    
  },
  person2page: function(){
    //do something
    console.log('about');
  },
  start: function(){
    Backbone.history.start();   //Backbone.history watches the URL chain to see if it changes. start starts it
  }

});

export default Router;