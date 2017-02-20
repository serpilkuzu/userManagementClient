define([
    'backbone',
    '../models/UserModel'
], function(Backbone, UserModel){

    var userCollection = Backbone.Collection.extend({
        model: UserModel,
        url: "http://localhost:8080/users"
    });

    return userCollection;
});