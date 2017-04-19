/**
 * Created by serpilkuzu on 15/02/2017.
 */
define([
    'backbone',
    'text!templates/navbar.html'
], function(Backbone, NavbarTemplate) {

    var navbarView = Backbone.View.extend({

        template : _.template(NavbarTemplate),

        initialize: function (options) {
            console.log("initializing navbar");
            this.selected = options.selected;
        },

        render: function () {
            this.$el.html(this.template());
            this.$('ul.nav-pills li').removeClass('active');

            // Make selected li element active on navbar
            if (this.selected == "welcome") {
                this.$('li.welcome-nav').addClass('active');
            } else if(this.selected == "create") {
                this.$('li.create-nav').addClass('active');
            } else if (this.selected == "list" || this.selected == "edit") {
                this.$('li.list-nav').addClass('active');
            }
            return this;
        }

    });

    return navbarView;
});