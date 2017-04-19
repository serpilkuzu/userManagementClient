/**
 * Created by serpilkuzu on 03/03/2017.
 */
define(["collections/UsersCollection", 'views/ListUsersView', 'jquery'], function (UsersCollection, ListUsersView, $) {
    describe("ListUsersView", function () {

        var view;

        var MOCK_FETCH_DATA = [{
            id: 1,
            name: "Ali",
            surname: "Kaya",
            age: 20,
            email: "ali@gmail.com"
        }, {
            id: 2,
            name: "Ahmet",
            surname: "Yıldırım",
            age: 20,
            email: "ahmet@gmail.com"
        }];

        beforeEach(function () {
            view = new ListUsersView({collection: new UsersCollection()});

            // mock data to fetch response
            spyOn($, 'ajax').and.callFake(function (options) {
                options.success(MOCK_FETCH_DATA);
            });

            view.render();
        });

        it("should be defined", function () {
            expect(view).toBeDefined();
        });

        it("should have #table-body", function () {
            expect(view.$el.find('#table-body')).toBeDefined();
        });

        it("should have header in table", function () {
            expect(view.$el.find('#inner-header').text()).toEqual("Users");
        });

        it("should have table columns with correct text", function () {
            expect(view.$el.find('thead tr').children().length).toEqual(5);

            expect(view.$el.find('thead tr th:nth-child(1)').text()).toEqual("Name");
            expect(view.$el.find('thead tr th:nth-child(2)').text()).toEqual("Surname");
            expect(view.$el.find('thead tr th:nth-child(3)').text()).toEqual("Email");
            expect(view.$el.find('thead tr th:nth-child(4)').text()).toEqual("Age");
            expect(view.$el.find('thead tr th:nth-child(5)').text()).toEqual("Edit");
        });


        it("should be able to show users on table", function () {
            expect(view.$el.find('#table-body tr:first-child td:nth-child(1)').text()).toEqual(MOCK_FETCH_DATA[0].name);
            expect(view.$el.find('#table-body tr:first-child td:nth-child(2)').text()).toEqual(MOCK_FETCH_DATA[0].surname);
            expect(view.$el.find('#table-body tr:first-child td:nth-child(3)').text()).toEqual(MOCK_FETCH_DATA[0].email);
            expect(parseInt(view.$el.find('#table-body tr:first-child td:nth-child(4)').text())).toEqual(MOCK_FETCH_DATA[0].age);
        });

        it("should be able to show correct number of users", function () {
            expect(view.$el.find("#table-body tr").length).toEqual(MOCK_FETCH_DATA.length);
        });

        it("should be able to trigger click event on edit button", function () {
            spyOnEvent(view.$el.find('#table-body tr:first-child td:nth-child(5)'), 'click');
            view.$el.find('#table-body tr:first-child td:nth-child(5)').trigger('click');
            expect('click').toHaveBeenTriggeredOn(view.$el.find('#table-body tr:first-child td:nth-child(5)'));
        });

        afterEach(function () {
            view = undefined;
        });

    });
});