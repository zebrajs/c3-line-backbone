var Backbone = require("backbone-thin");
var Row = Backbone.Model.extend({
  defaults: {'name': '', 'fields': []}
});
var Table = Backbone.Collection.extend({
  model: Row
});

module.exports.Row = Row;
module.exports.Table = Table;
