/**
 * Created by serpilkuzu on 06/02/2017.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/UserModel',
    'collections/UsersCollection',
    'views/RowView',
    'text!templates/listUsers.html'
], function($, _, Backbone, UserModel, UsersCollection, RowView, ListTemplate){

    var listView = Backbone.View.extend({
        el: '#changing-div',
        template : _.template(ListTemplate),
        userList : new UsersCollection(),
        initialize: function () {
            console.log("initializing");
            this.changeText();
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            this.userList.each(this.renderOne);
        },
        renderOne: function (model) {
            var view = new RowView({model: model});
            $('#table-body').append(view.render().el);
            return this;
        },
        changeText: function () {
            $(document).attr('title', "List Users");
            $('ul.nav-pills li').removeClass('active');
            $('ul.nav-pills li.list-nav').addClass('active');
            $("#inner-header").text("List of Users");
        },
        deleteUser: function (event) {
            // TODO serpil
        },
        editUser: function (model) {
            // TODO serpil
        }
    });

    return listView;
});