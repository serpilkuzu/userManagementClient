/**
 * Created by serpilkuzu on 06/02/2017.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/welcome.html'
], function($, _, Backbone, WelcomeTemplate) {

    var welcomeView = Backbone.View.extend({
        el: '#changing-div',
        template : _.template(WelcomeTemplate),
        initialize: function () {
            console.log("initializing");
            this.changeText();
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
        },
        changeText : function () {
            $(document).attr('title', "Welcome");
            document.getElementsByClassName("inner-header").innerHtml = "Welcome";
            $('ul.nav-pills li').removeClass('active');
            $('ul.nav-pills li.welcome-nav').addClass('active');
            $("#inner-header").text("Welcome");
        }
    });

    return welcomeView;
});