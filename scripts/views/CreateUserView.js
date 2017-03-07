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
            this.model = new UserModel({});
            this.listenTo(this.model, "invalid", this.showValidationErrors);
        },

        render: function () {
            this.$el.html(this.template);
            return this;
        },

        events: {
            'click #createButton': 'save'
        },
        save: function () {
            var options = {
                success: function (model, response, options) {
                    console.log("User is created. User id: " + model.get("id"));
                    alert("User is created successfully. User id: " + model.get("id"));
                    Backbone.history.navigate("list", {trigger: true});
                },
                error: function (model, response, options) {
                    console.warn("An error occurred. The error is ", response.text);
                }
            };

            var userAttributes = {
                name: this.$el.find('#firstName').val(),
                surname: this.$el.find('#surname').val(),
                age: this.$el.find('#age').val(),
                email: this.$el.find('#email').val()
            };

            this.model.save(userAttributes, options);
        },

        showValidationErrors: function (model, errors) {
            alert(errors);
        }

    });

    return createUserView;
});