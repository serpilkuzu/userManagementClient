/**
 * Created by serpilkuzu on 07/02/2017.
 */
define([
    'backbone',
    'text!templates/editUser.html',
    'collections/UsersCollection',
    'models/UserModel'
], function(Backbone, EditTemplate, UsersCollection, UserModel) {

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
                    that.$el.html(that.template);
                    that.$('#firstName').val(that.model.get("name"));
                    that.$('#surname').val(that.model.get("surname"));
                    that.$('#age').val(that.model.get("age"));
                    that.$('#email').val(that.model.get("email"));
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
                error: function (model, error) {
                    alert(error);
                }
            };
            var editedUser = new UserModel({
                id: this.userId,
                name: $('#firstName').val(),
                surname: $('#surname').val(),
                age: parseInt($('#age').val()),
                email: $('#email').val()
            });

            if (editedUser.isValid()) {
                editedUser.save();
                alert("User is updated successfully.");
            } else {
                this.model.save(editedUser, options);
                console.warn("User is not valid!");
            }
        }

    });

    return editView;
});