/**
 * Created by serpilkuzu on 01/03/2017.
 */
define(['collections/UsersCollection', 'jquery'], function (UsersCollection, $) {
    describe("UsersCollection", function () {

        var usersCollection;

        beforeEach(function () {
            usersCollection = new UsersCollection();
        });

        it("should be defined", function () {
            expect(usersCollection).toBeDefined();
        });

        describe("when it fetches", function () {

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
                spyOn(usersCollection, 'fetch').and.callThrough();
                spyOn($, 'ajax').and.callFake(function (options) {
                    options.success(MOCK_FETCH_DATA);
                });
                usersCollection.fetch();
            });

            it("fetch() should be called", function () {
                expect(usersCollection.fetch).toHaveBeenCalled();
            });

            it("should call the right url", function () {
                expect($.ajax.calls.mostRecent().args[0].url).toEqual(usersCollection.url);
            });

            it("should get data from server", function () {
                expect(usersCollection.models[0].get("name")).toEqual(MOCK_FETCH_DATA[0].name);
                expect(usersCollection.models[0].get("surname")).toEqual(MOCK_FETCH_DATA[0].surname);
                expect(usersCollection.models[0].get("age")).toEqual(MOCK_FETCH_DATA[0].age);
                expect(usersCollection.models[0].get("email")).toEqual(MOCK_FETCH_DATA[0].email);
            });

            afterEach(function () {
                usersCollection = undefined;
            });

        });
    });
});