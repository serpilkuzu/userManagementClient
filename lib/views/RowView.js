define(['jquery',
  'underscore',
  'backbone',
  'models/UserModel',
  'text!templates/row.html'
], function($, _, Backbone, UserModel, rowTemplate){

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
