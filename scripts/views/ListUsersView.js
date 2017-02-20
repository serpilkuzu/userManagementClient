/**
 * Created by serpilkuzu on 06/02/2017.
 */
define([
    'backbone',
    'collections/UsersCollection',
    'views/RowView',
    'text!templates/listUsers.html'
], function(Backbone, UsersCollection, RowView, ListTemplate){

    var listView = Backbone.View.extend({
        template : _.template(ListTemplate),
        userList : new UsersCollection(),
        initialize: function () {
            console.log("initializing");
            this.render();
        },
        render: function () {
            var that = this;
            that.$el.html(this.template);
            this.userList.each(
                function (model) {
                    var view = new RowView({model: model});
                    that.$('#table-body').append(view.render().el);
                }
            );
            this.$el = that.$el;
            return this;
        }
    });

    return listView;
});