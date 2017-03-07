/**
 * Created by serpilkuzu on 23/02/2017.
 */
var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}
require.config({
    baseUrl: "/base/scripts",
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
        'text' : '../libs/text',
        'requirejs' : '../libs/require'
    },

    deps: tests,

    callback: window.__karma__.start
});