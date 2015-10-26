import Backbone from 'backbone';
import objectModel from './objects'
let ObjectGroup = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/items',
  
  model: objectModel,

  parse: function(data){
    return data.results;
  }

});

export default ObjectGroup;    