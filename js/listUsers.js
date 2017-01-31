/**
 * Created by serpilkuzu on 27/01/2017.
 */
var app = {};

app.UserModel = Backbone.Model.extend({
    defaults: {
        name: 'Serpil',
        surname: 'Kuzu',
        age: 25,
        email: 'serpilkuzu@asd.com',
        gender: 0
    }
});

app.UserCollection = Backbone.Collection.extend({
    model: app.UserModel
});

// dummy data for User Collection
var user1 = new app.UserModel();
var user2 = new app.UserModel({
    name: "user 2"
});
var user3 = new app.UserModel({
    name: "user 3"
});

app.users = new app.UserCollection();
app.users.add(user1);
app.users.add(user2);
app.users.add(user3);

app.RowView = Backbone.View.extend({
    tagName: 'tr',
    template : _.template($('#row-template').html()),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

app.AppView = Backbone.View.extend({
    el: '#table-body',
    initialize: function(){
        _.bindAll(this, 'render', 'renderOne');
    },
    render: function() {
        this.collection.each(this.renderOne);
        return this;
    },
    renderOne: function (model) {
        var view = new app.RowView({model: model});
        this.$el.append(view.render().el);
        return this;
    }
});
app.appView = new app.AppView({collection: app.users});
$("table-body").append(app.appView.render().$el);