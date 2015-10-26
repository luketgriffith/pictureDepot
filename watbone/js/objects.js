import Backbone from 'backbone';




let objectModel = Backbone.Model.extend({      //creating new constructor specifically for people (customized)
    urlRoot:'http://api.parse.com/1/classes/items',  //for posting, Backbone will add correct ID to end of this for specific IDs
    idAttribute: 'objectId'

});

export default objectModel;  