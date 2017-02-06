/**
 * Created by serpilkuzu on 06/02/2017.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/welcomeTemplate.html'
], function($, _, Backbone, WelcomeTemplate) {

    var welcomeView = Backbone.View.extend({
        el: '#changing-div',
        template : _.template(WelcomeTemplate),
        initialize: function () {
            console.log("initializing");
            this.render();
        },
        render: function () {
            $(document).attr('title', "Welcome");
            $('ul.nav-pills li').removeClass('active');
            $('ul.nav-pills li.welcome-nav').addClass('active');
            this.$el.html(this.template({title: this.title}));
        }
    });

    return welcomeView;

});