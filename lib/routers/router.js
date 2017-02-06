define(['jquery',
    'underscore',
    'backbone',
    'models/UserModel',
    'views/TableView',
    'views/ListUsersView',
    'views/WelcomeView',
    'views/CreateUserView'
], function($, _, Backbone, UserModel, TableView, ListUsersView, WelcomeView, CreateUserView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "welcome": "welcome",
            "create": "create",
            "list": "listUsers"
            // edit/:userId:  "editUser"
        }
    });

    var initialize = function () {

        var router = new AppRouter();

        router.on('route:welcome', function () {

            console.log("Router --> welcome");
            new WelcomeView();
        });


        router.on('route:listUsers', function () {

            console.log("Router --> list");
            new TableView();
        });

        router.on('route:create', function () {

            console.log("Router --> createUser");
            //this.loadView(new AnotherView());
            new CreateUserView();

        });

        Backbone.history.start();
    };


    return {
        initialize: initialize
    };
});