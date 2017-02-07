define(['jquery',
    'underscore',
    'backbone',
    'models/UserModel',
    'views/ListUsersView',
    'views/WelcomeView',
    'views/CreateUserView',
    'views/EditUserView'
], function($, _, Backbone, UserModel, ListUsersView, WelcomeView, CreateUserView, EditUserView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "welcome": "welcome",
            "create": "create",
            "list": "listUsers",
            "edit/:userId":  "editUser"
        }
    });

    var initialize = function () {

        var router = new AppRouter();

        router.on('route:welcome', function () {
            console.log("Router --> welcome");
            new WelcomeView();
        });

        router.on('route:listUsers', function () {
            console.log("Router --> listUsers");
            new ListUsersView();
        });

        router.on('route:create', function () {
            console.log("Router --> createUser");
            //this.loadView(new AnotherView());
            new CreateUserView();

        });

        router.on('route:editUser', function (id) {
            console.log("Router --> editUser");
            new EditUserView({userId: id});
        });

        Backbone.history.start();
    };


    return {
        initialize: initialize
    };
});