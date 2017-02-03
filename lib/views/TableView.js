define([
  'jquery',
  'underscore',
  'backbone',
  'models/UserModel',
  'collections/UsersCollection',
  'views/RowView'
], function($, _, Backbone, UserModel, UsersCollection, RowView){
    var TableView = Backbone.View.extend({
        el: '#table-body',
        tagName: 'tr',
        events: {
            'click .deleteButton' : 'deleteUser',
            'click .editButton' : 'editUser'
        },
        initialize: function(){
            this.render();
        },
        render: function(){
            var userList = new UsersCollection();
            userList.each(this.renderOne);
            return this;
        },
        renderOne: function (model) {
            var view = new RowView({model: model});
            $('#table-body').append(view.render().el);
            return this;
        },
        deleteUser: function (event) {
            // TODO serpil
        },
        editUser: function (model) {
            // TODO serpil
        }
    });
    return TableView;
});