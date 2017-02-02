/**
 * Created by serpilkuzu on 27/01/2017.
 */

var users = new UserCollection();
users.fetch().done(function(data) {
    app.appView = new TableView({collection: users});
    $("table-body").append(app.appView.render().$el);
});
