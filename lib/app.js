require.config({
  baseUrl: "lib",
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
    'jquery' : 'http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min',
    'underscore' : 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min',
    'backbone' : 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
    'text' : 'http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
  }
});

require(['views/TableView'], function (TableView) {
  var tableView = new TableView();
});