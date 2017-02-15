/**
 * Created by serpilkuzu on 06/02/2017.
 */
define([
    'backbone',
    'text!templates/welcome.html'
], function(Backbone, WelcomeTemplate) {

    var welcomeView = Backbone.View.extend({

        template : _.template(WelcomeTemplate),

        initialize: function () {
            console.log("initializing");
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

    return welcomeView;
});