/**
 * Created by serpilkuzu on 06/02/2017.
 */
define([
    'backbone',
    'text!templates/createUser.html',
    'models/UserModel'
], function(Backbone, CreateUserTemplate, UserModel) {

    var createUserView = Backbone.View.extend({

        template : _.template(CreateUserTemplate),

        initialize: function () {
            console.log("CreateUserView is being initialized");
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            return this;
        },

        events: {
            'click #createButton': 'createUser'
        },

        createUser: function () {
            var options = {
                success: function (model) {
                    console.log("User is created. User id: " + model.get("id"));
                    alert("User is created successfully. User id: " + model.get("id"));
                    Backbone.history.navigate("list", {trigger: true});
                },
                error: function (model, error) {
                    console.warn("User is not valid. Error message: " + error);
                    alert(error);
                }
            };
            var user = new UserModel ({
                name: $('#firstName').val(),
                surname: $('#surname').val(),
                age: parseInt($('#age').val()),
                email: $('#email').val()
            });

            user.save(user, options);
        }

    });

    return createUserView;
});