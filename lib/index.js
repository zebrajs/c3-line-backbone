module.exports.View = require("./view.js");
var model = require("./model.js");
module.exports.Model = model;
module.exports.Row = model.Row;
module.exports.Table = model.Table;

module.exports.csv = function(text, opts) {
  opts = opts || {};
  var deli = opts.deli || ";";

  // load in some dummy data
  var table = new model.Table();

  function addRow(line) {
    var fields = line.split(deli);
    var cFields = fields.splice(1);
    var name = fields[0];
    var cN = new model.Row({
      name: name,
      fields: cFields
    });
    table.add(cN);
  }
  text.split("\n").forEach(addRow);
  
  return table;
};
