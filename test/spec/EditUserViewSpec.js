/**
 * Created by serpilkuzu on 06/03/2017.
 */
define(['views/EditUserView', 'jquery'], function (EditUserView, $) {

    describe('EditUserView', function () {

        var view;

        var MOCK_GET_DATA = {
            id: 1,
            name: 'Ayşe',
            surname: 'Keskin',
            age: 20,
            email: 'ayse@gmail.com'
        };

        beforeEach(function () {
            view = new EditUserView({userId: MOCK_GET_DATA.id});
            spyOn($, 'ajax').and.callFake(function(options) {
                options.success(MOCK_GET_DATA);
            });
        });

        it("should be defined", function () {
            expect(view).toBeDefined();
        });

        it("should put data to correct input elements", function () {
            view.render();
            expect(view.$el.find('#firstName').val()).toEqual(MOCK_GET_DATA.name);
            expect(view.$el.find('#surname').val()).toEqual(MOCK_GET_DATA.surname);
            expect(view.$el.find('#email').val()).toEqual(MOCK_GET_DATA.email);
            expect(parseInt(view.$el.find('#age').val())).toEqual(MOCK_GET_DATA.age);
        });

        describe("when saving user", function () {

            it("#saveButton should be triggered", function () {
                view.render();

                spyOnEvent(view.$el.find('#saveButton'), 'click');
                view.$el.find('#saveButton').trigger('click');
                expect('click').toHaveBeenTriggeredOn('#saveButton');
            });

            it("save() should be called", function () {
                spyOn(view, 'save');

                view.delegateEvents();
                view.render();

                view.$el.find('#saveButton').trigger('click');
                expect(view.save).toHaveBeenCalled();
            });


            it("user validate() should be called", function () {
                spyOn(view, 'save');
                spyOn(view.model, 'validate').and.returnValue(true);

                view.render();

                view.$el.find('#saveButton').trigger('click');
                expect(view.model.validate).toHaveBeenCalled();
            });

        });

        afterEach(function () {
            view = undefined;
        });

    });
});