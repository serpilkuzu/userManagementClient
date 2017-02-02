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
    initialize: function(){
       this.render();
    },
    render: function() {
      var userList = new UsersCollection();
      userList.each(this.renderOne);
      return this;
   },
   renderOne: function (model) {
        var view = new RowView({model: model});
        $('#table-body').append(view.render().el);
        return this;
    }
    /*initialize: function(){
      this.render();
    },
    render: function() {
      var template = _.template("<tr><td>name</td><td>surname</td><td>email</td><td>age</td><td><button class='btn btn-warning'>Edit</button><button class='btn btn-danger'>Delete</button></td></tr>");
      this.$el.html(template);
    }*/
  });
  return TableView;
});
