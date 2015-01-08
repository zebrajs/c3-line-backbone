var View = require("backbone-viewj");
var c3 = require("c3");
var extend = require('js-extend').extend

module.exports = View.extend({
  initialize: function(opts) {
    var cOpts = {
      bindto: this.el,
      data: {
        columns: []
      }
    };
    extend(cOpts, opts);
    this.c3 = c3.generate(cOpts);
    this.listenTo(this.model, "add", function(row) {
      this.c3.load({
        columns: [convertRow(row)]
      });
      console.log(c3);
    }, this);
    this._loadAll();
  },
  _loadAll: function() {
    this.data = this.model.map(convertRow);
    this.c3.load({
      columns: this.data
    });
  }
});

var convertRow = function(row) {
  // this function converts our backbone collection into a c3 array
  var arr = Array.apply(undefined, row.get('fields'));
  arr.unshift(row.get('name'));
  console.log(arr);
  return arr;
}
