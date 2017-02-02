define([
  'jquery',
  'underscore',
  'backbone',
  'models/UserModel'
], function($, _, Backbone, UserModel){
  var UsersCollection = Backbone.Collection.extend({
    model: UserModel,
    initialize: function(){
      var user1 = new UserModel();
      user1.set({id: 1, name: 'user1', surname: 'surname 1'});
      var user2 = new UserModel();
      user2.set({id: 2, name: 'user2', surname:'surname 2'});
      this.add(user1);
      this.add(user2);
    }
  });
  return UsersCollection;
});
