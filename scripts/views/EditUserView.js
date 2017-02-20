/**
 * Created by serpilkuzu on 07/02/2017.
 */
define([
    'backbone',
    'text!templates/editUser.html'
], function(Backbone, EditTemplate) {

    var editView = Backbone.View.extend({

        template : _.template(EditTemplate),

        initialize: function (options) {
            console.log("edit user with userId " + options.userId);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

    return editView;
});