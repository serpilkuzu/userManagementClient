/**
 * Created by serpilkuzu on 07/02/2017.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/editUser.html'
], function($, _, Backbone, EditTemplate) {

    var editView = Backbone.View.extend({
        el: '#changing-div',
        template : _.template(EditTemplate),
        initialize: function (options) {
            console.log("edit user with userId " + options.userId);
            this.changeText();
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
        },
        changeText: function () {
            $(document).attr('title', "Edit User");
            $('ul.nav-pills li').removeClass('active');
            $('ul.nav-pills li.list-nav').addClass('active');
            $("#inner-header").text("Edit User");
        }
    });

    return editView;
});