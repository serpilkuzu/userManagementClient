/**
 * Created by serpilkuzu on 06/03/2017.
 */
define(['views/RowView', 'models/UserModel'], function (RowView, UserModel) {

    describe('RowView', function () {

        var view;
        var model;

        beforeEach(function () {
            model = new UserModel({
                id: 1,
                name: "Ahsen",
                surname: "Doğan",
                email: "ahsen@gmail.com",
                age: 20

            });
            view = new RowView({model: model});
            view.render();
        });

        it("should be defined", function () {
            expect(view).toBeDefined();
        });

        it("should be able to return a table row", function () {
            expect(view.$el.context.tagName).toEqual("TR");
        });

        it("should be able to fill row with given user data", function () {
            expect(view.$el.find('td:nth-child(1)').text()).toEqual(model.get("name"));
            expect(view.$el.find('td:nth-child(2)').text()).toEqual(model.get("surname"));
            expect(view.$el.find('td:nth-child(3)').text()).toEqual(model.get("email"));
            expect(parseInt(view.$el.find('td:nth-child(4)').text())).toEqual(model.get("age"));
        });

        it("should be able to trigger click event on edit button", function () {
            spyOnEvent(view.$el.find('td a'), 'click');
            view.$el.find('td a').trigger('click');
            expect('click').toHaveBeenTriggeredOn(view.$el.find('td a'));
        });

        afterEach(function () {
            view = undefined;
        });

    });

});