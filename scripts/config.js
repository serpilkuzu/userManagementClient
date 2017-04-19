/**
 * Created by serpilkuzu on 06/02/2017.
 */
require.config({
    baseUrl: "scripts",
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }

    },
    paths: {
        'jquery' : '../libs/jquery-3.1.1.min',
        'underscore' : '../libs/underscore-min',
        'backbone' : '../libs/backbone-min',
        'text' : '../libs/text'
    }
});
