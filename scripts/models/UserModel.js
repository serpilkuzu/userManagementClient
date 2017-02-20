define([
  'backbone'
], function(Backbone) {
  var UserModel = Backbone.Model.extend({
    defaults: {
      id: -1,
      name: "1",
      surname: "2",
      age: 2,
      gender: 0,
      email: "sample@gmail.com"
    }
  });
  return UserModel;
});
