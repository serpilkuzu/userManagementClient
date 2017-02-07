/**
 * Created by serpilkuzu on 06/02/2017.
 */
/**
 * Created by serpilkuzu on 06/02/2017.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/createUser.html'
], function($, _, Backbone, CreateUserTemplate) {

    var createUserView = Backbone.View.extend({
        el: '#changing-div',
        template : _.template(CreateUserTemplate),
        initialize: function () {
            console.log("initializing");
            this.changeText();
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
        },
        changeText: function () {
            $(document).attr('title', "Create User");
            $('ul.nav-pills li').removeClass('active');
            $('ul.nav-pills li.create-nav').addClass('active');
            $("#inner-header").text("New User");
        }
    });

    return createUserView;
});