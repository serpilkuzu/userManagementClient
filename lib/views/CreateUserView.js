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
], function($, _, Backbone, CreateUserTemplete) {

    var createUserView = Backbone.View.extend({
        el: '#changing-div',
        template : _.template(CreateUserTemplete),
        initialize: function () {
            console.log("initializing");
            this.render();
        },
        render: function () {
            $(document).attr('title', "Create User");
            $('ul.nav-pills li').removeClass('active');
            $('ul.nav-pills li.create-nav').addClass('active');
            this.$el.html(this.template);
        }
    });

    return createUserView;

});