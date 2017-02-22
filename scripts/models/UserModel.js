define([
  'backbone'
], function(Backbone) {
    var UserModel = Backbone.Model.extend({
        urlRoot:  "http://localhost:8080/users",
        validate: function (attrs, options) {

            var email_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if(!attrs.name || attrs.name == '') {
                return "User name should be defined!";
            } else if(!attrs.surname || attrs.surname == '') {
                return "User surname should be defined!";
            } else if(!email_filter.test(attrs.email)) {
                return "User email is not valid!";
            } else if(!attrs.age || attrs.age < 0) {
                return "Age is not valid!";
            }
        }
    });
    return UserModel;
});
