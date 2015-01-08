var app = require("c3-line-backbone");
var table = app.csv("n1;1;2;3\nn2;3;4;5\n");
var v = new app.View({
  el: yourDiv,
  model: table
});
