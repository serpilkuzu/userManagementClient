/**
 * Created by serpilkuzu on 06/03/2017.
 */
define(['views/NavbarView'], function (NavbarView) {

    describe('NavbarView', function () {

        var view;

        beforeEach(function () {
            view = new NavbarView({selected: 'list'});
            view.render();
        });

        it('should be defined', function () {
            expect(view).toBeDefined();
        });

        it('should show li elements', function () {
            expect(view.$el.context.tagName).toEqual("DIV");
            expect(view.$el.find('ul')).toBeDefined();
            expect(view.$el.find('li').length).toEqual(3);
        });

        it('should be able to make selected li element active', function () {
            expect(view.$el.find('li.list-nav')).toHaveClass('active');
        });

        it('should be able to remove active class from remaining li elements', function () {
            expect(view.$el.find('li').not('li.list-nav')).not.toHaveClass('active');
        });

        afterEach(function () {
            view = undefined;
        });

    });

});