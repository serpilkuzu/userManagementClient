/**
 * Created by serpilkuzu on 28/02/2017.
 */
define(["models/UserModel", 'views/CreateUserView', 'jquery'], function (UserModel, CreateUserView, $) {

    describe("UserModel", function () {

        var MOCK_GET_DATA = {
            name: 'Ayşe',
            surname: 'Keskin',
            age: 20,
            email: 'ayse@gmail.com'
        };

        describe("when it fetches", function () {

            var userModel;

            beforeEach(function() {
                spyOn($, 'ajax').and.callFake(function(options) {
                    options.success(MOCK_GET_DATA);
                });

                userModel = new UserModel();
                userModel.fetch();

            });

            it("should be defined", function () {
                expect(userModel).toBeDefined();
            });

            it('should go to the right url', function() {
                expect($.ajax.calls.mostRecent().args[0].url).toEqual(userModel.urlRoot);
            });

            it('should get data from server', function() {
                expect(userModel).toBeDefined();
                expect(userModel.get('name')).toEqual(MOCK_GET_DATA.name);
                expect(userModel.get('surname')).toEqual(MOCK_GET_DATA.surname);
                expect(userModel.get('age')).toEqual(MOCK_GET_DATA.age);
                expect(userModel.get('location')).toEqual(MOCK_GET_DATA.location);
            });

            afterEach(function() {
                userModel = undefined;
            });

        });

        describe('when validating user', function () {

            var userModel;

            var validationErrors = {
                name: "User name should be defined!",
                surname: "User surname should be defined!",
                email: "User email is not valid!",
                age: "Age is not valid!"
            };

            beforeEach(function () {
                userModel = new UserModel();
                spyOn(userModel, 'validate').and.callThrough();

                spyOn($, 'ajax').and.callFake(function(options) {
                    options.success(MOCK_GET_DATA);
                });
            });

            it("validation messages should be returned on invalid user name", function () {
                userModel.set({name: ''}, {validate: true});
                expect(userModel.validate).toHaveBeenCalled();
                expect(userModel.validationError[0]).toEqual(validationErrors.name);
            });

            it("validation messages should be returned on invalid user surname", function () {
                userModel.set({name: 'Serpil'}, {validate: true});
                expect(userModel.validate).toHaveBeenCalled();
                expect(userModel.validationError[0]).toEqual(validationErrors.surname);
            });

            it("validation messages should be returned on invalid user email", function () {
                userModel.set({name: 'Serpil', surname: 'Kuzu'}, {validate: true});
                expect(userModel.validate).toHaveBeenCalled();
                expect(userModel.validationError[0]).toEqual(validationErrors.email);
            });

            it("validation messages should be returned on invalid user age", function () {
                userModel.set({name: 'Serpil', surname: 'Kuzu', email: 'serpil@gmail.com'}, {validate: true});
                expect(userModel.validate).toHaveBeenCalled();
                expect(userModel.validationError[0]).toEqual(validationErrors.age);
            });

            afterEach(function () {
                userModel = undefined;
            });
        });

    });
});