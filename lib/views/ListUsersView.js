/**
 * Created by serpilkuzu on 06/02/2017.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/UserModel',
    'collections/UsersCollection',
    'views/RowView'
], function($, _, Backbone, UserModel, UsersCollection, RowView){

    var listView = Backbone.View.extend({
        el: '.container',
        initialize: function () {
            console.log("initializing");
            this.render();
        },
        render: function () {
            var template = _.template("<p>Hello from other side</p>");
            this.$el.html(template);
        }
    });

    return listView;
});