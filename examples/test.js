var app = require("c3-line-backbone");

// load in some dummy data
var table = new app.Table();
var tableCounter = 0;
addRow();
addRow();

// create the view
var v = new app.View({el: yourDiv, model: table});


function addRow(){
	var cN = new app.Row({name: 'c'+ (tableCounter + 1), fields: [tableCounter, tableCounter + 1, tableCounter + 2]});
	table.add(cN);
	tableCounter++;
	if(tableCounter >= 40)
		clearInterval(it);
}

// load more data
var it = setInterval(addRow, 1000);


