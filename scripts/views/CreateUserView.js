/**
 * Created by serpilkuzu on 06/02/2017.
 */
define([
    'backbone',
    'text!templates/createUser.html'
], function(Backbone, CreateUserTemplate) {

    var createUserView = Backbone.View.extend({

        template : _.template(CreateUserTemplate),

        initialize: function () {
            console.log("initializing");
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            return this;
        }

    });

    return createUserView;
});