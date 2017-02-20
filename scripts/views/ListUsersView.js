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
        noItemTemplate : _.template("<p>There is no user. Please create user.</p>"),

        initialize: function () {
            console.log("List view is being initialized...");
            this.collection = new UsersCollection();
        },

        render: function () {
            var that = this;
            var fetchUsers = this.collection.fetch();
            console.log("User collection is fetched.");
            that.$el.html(this.template);
            fetchUsers.done(function() {
                if (that.collection.length > 0) {
                    that.collection.each(
                        function (model) {
                            var view = new RowView({model: model});
                            that.$('#table-body').append(view.render().el);
                        }
                    );
                } else {
                    that.$el.html(that.noItemTemplate);
                }
            });
            this.$el = that.$el;
            return this;
        }

    });

    return listView;
});