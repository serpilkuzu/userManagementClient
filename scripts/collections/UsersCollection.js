define([
  'jquery',
  'underscore',
  'backbone',
  'models/UserModel'
], function($, _, Backbone, UserModel){
  var UsersCollection = Backbone.Collection.extend({
    model: UserModel,
      initialize: function(){
      var user1 = new UserModel({id: 1, name: 'user 1', surname: 'surname 1'});
      var user2 = new UserModel({id: 2, name: 'user 2', surname: 'surname 2'});
      var user3 = new UserModel({id: 3, name: 'user ', surname: 'surname '});
      this.add([user1, user2, user3]);
    }
  });
  return UsersCollection;
});
