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
        },

        render: function () {
            var that = this;
            var fetchUser = this.model.fetch({
                success: function () {
                    console.log("User with id "+ that.userId +" is fetched.");
                    that.$el.html(that.template(that.model.attributes));
                }, error : function () {
                    console.warn("User with given id " + that.userId + " is not found!");
                    alert("User with given id " + that.userId + " is not found!");
                    Backbone.history.navigate("list", {trigger: true});
                }
            });
            return this;
        },

        events: {
            'click #editButton': 'editUser'
        },

        editUser: function () {
            var options = {
                success: function (model) {
                    console.log("User is updated. User id: " + model.get("id"));
                    alert("User is updated successfully.");
                },
                error: function (model, error) {
                    console.warn("User is not valid!");
                    alert(error);
                }
            };
            var editedUser = {
                name: $('#firstName').val(),
                surname: $('#surname').val(),
                age: parseInt($('#age').val()),
                email: $('#email').val()
            };

            this.model.save(editedUser, options);
        }

    });

    return editView;
});