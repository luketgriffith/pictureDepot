import Backbone from 'Backbone';

let UserModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/users',

  idAttribute: 'objectId'

});

export default UserModel;
