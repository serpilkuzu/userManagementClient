define([
    'backbone'
], function (Backbone) {
    var UserModel = Backbone.Model.extend({
        urlRoot: "http://localhost:8080/users",

        validate: function (attrs, options) {

            var email_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            var errors = [];

            if (!attrs.name || attrs.name == '') {
                errors.push("User name should be defined!");
            } else if (!attrs.surname || attrs.surname == '') {
                errors.push("User surname should be defined!");
            } else if (!email_filter.test(attrs.email)) {
                errors.push("User email is not valid!");
            } else if (!attrs.age || attrs.age < 0) {
                errors.push("Age is not valid!");
            }

            return errors.length > 0 ? errors : false;
        }
    });

    return UserModel;
});
