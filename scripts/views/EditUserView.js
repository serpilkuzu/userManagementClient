/**
 * Created by serpilkuzu on 07/02/2017.
 */
define([
    'backbone',
    'text!templates/editUser.html',
    'models/UserModel'
], function(Backbone, EditTemplate, UserModel) {

    var editView = Backbone.View.extend({

        template : _.template(EditTemplate),

        initialize: function (options) {
            console.log("EditUserView is being initialized. User id : " + options.userId);
            this.userId = options.userId;
            this.model = new UserModel({id: this.userId});
            this.listenTo(this.model, "invalid", this.showValidationErrors);
        },

        render: function () {
            var that = this;
            this.model.fetch({
                success: function () {
                    console.log("User with id "+ that.userId +" is fetched.");
                    that.$el.html(that.template(that.model.attributes));
                }, error : function (model, response, options) {
                    console.warn("User with given id " + that.userId + " is not found!");
                    alert(response.text);
                    alert("User with given id " + that.userId + " is not found!");
                    Backbone.history.navigate("list", {trigger: true});
                }
            });
            return this;
        },

        events: {
            'click #saveButton': 'save'
        },

        save: function () {
            var options = {
                success: function (model) {
                    console.log("User is updated. User id: " + model.get("id"));
                    alert("User is updated successfully.");
                    Backbone.history.navigate("list", {trigger: true});
                },
                error: function (model, error) {
                    console.warn("User is not valid!");
                    alert(error);
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

    return editView;
});