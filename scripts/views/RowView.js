define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/row.html'
], function($, _, Backbone, rowTemplate){

    var RowView = Backbone.View.extend({

        tagName : "tr",
        template : _.template(rowTemplate),

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

    return RowView;
});
