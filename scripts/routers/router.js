define([
    'backbone',
    'views/ListUsersView',
    'views/WelcomeView',
    'views/CreateUserView',
    'views/EditUserView',
    'views/NavbarView',
    'collections/UsersCollection'
], function(Backbone, ListUsersView, WelcomeView, CreateUserView, EditUserView, NavbarView, UsersCollection) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "welcome": "welcome",
            "create": "create",
            "list": "listUsers",
            "edit/:userId":  "editUser",
            "*default": "welcome"
        }
    });

    var initialize = function () {

        var router = new AppRouter();

        router.on('route:welcome', function () {
            console.log("Router --> welcome");
            $('title').text("Welcome");
            var view = new WelcomeView();
            $('#view-container').html(view.render().el);
            var navbarView = new NavbarView({selected: "welcome"});
            $('#left-navbar').html(navbarView.render().el);
        });

        router.on('route:listUsers', function () {
            console.log("Router --> listUsers");
            $('title').text("List Users");
            var view = new ListUsersView({collection: new UsersCollection()});
            $('#view-container').html(view.render().el);
            var navbarView = new NavbarView({selected: "list"});
            $('#left-navbar').html(navbarView.render().el);
        });

        router.on('route:create', function () {
            console.log("Router --> createUser");
            $('title').text("Create User");
            var view = new CreateUserView();
            $('#view-container').html(view.render().el);
            var navbarView = new NavbarView({selected: "create"});
            $('#left-navbar').html(navbarView.render().el);
        });

        router.on('route:editUser', function (id) {
            console.log("Router --> editUser");
            $('title').text("Edit User");
            var view = new EditUserView({userId: id});
            $('#view-container').html(view.render().el);
            var navbarView = new NavbarView({selected: "edit"});
            $('#left-navbar').html(navbarView.render().el);
        });

        Backbone.history.start();
    };


    return {
        initialize: initialize
    };
});