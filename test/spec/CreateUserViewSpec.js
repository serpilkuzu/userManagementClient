/**
 * Created by serpilkuzu on 03/03/2017.
 */
define(["models/UserModel", 'views/CreateUserView'], function (UserModel, CreateUserView) {

    describe("CreateUserView", function () {

        var view;

        beforeEach(function () {
            view = new CreateUserView();
        });

        it('should be opened with empty input areas', function () {
            view.render();
            expect(view.$el.find('input').val()).toEqual('');
        });

        describe("when button clicked", function () {

            it("#createButton should be triggered", function () {
                view.render();
                spyOnEvent(view.$el.find('#createButton'), 'click');
                view.$el.find('#createButton').trigger('click');
                expect('click').toHaveBeenTriggeredOn('#createButton');
            });

            it("save() should be called", function () {
                spyOn(view, 'save');
                view.delegateEvents();
                view.render();

                view.$el.find('#createButton').trigger('click');
                expect(view.save).toHaveBeenCalled();
            });

            it("user validate() should be called", function () {
                spyOn(view, 'save');
                view.render();

                spyOn(view.model, 'validate').and.returnValue(true);

                view.$el.find('#createButton').trigger('click');
                expect(view.model.validate).toHaveBeenCalled();
            });

        });

        afterEach(function () {
            view = undefined;
        });

    });
});