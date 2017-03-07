/**
 * Created by serpilkuzu on 06/02/2017.
 */
define([
    'backbone',
    'views/RowView',
    'text!templates/listUsers.html'
], function(Backbone, RowView, ListTemplate){

    var listView = Backbone.View.extend({

        template : _.template(ListTemplate),
        noItemTemplate : _.template("<p>There is no user. Please create user.</p>"),

        initialize: function (options) {
            console.log("List view is being initialized...");
            this.collection = options.collection;
        },

        render: function () {
            var that = this;
            console.log("User collection is fetched.");
            that.$el.html(this.template);
            this.collection.fetch({
                success: function() {
                    if (that.collection.length > 0) {
                        that.collection.each(
                            function (model) {
                                var view = new RowView({model: model});
                                that.$('#table-body').append(view.render().el);
                            }
                        );
                    } else {
                        that.$(".panel-body").html(that.noItemTemplate);
                    }
                }
            });
            this.$el = that.$el;
            return this;
        }

    });

    return listView;
});