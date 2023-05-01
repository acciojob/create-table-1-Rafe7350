function insert_Row() {
    //Write your code here
  var table= documemt.getElementId("samleTable");

	var newRow = table.insertRow(0);

	var leftCell = newRow.insertCell(0);
  var righttCell = newRow.insertCell(1);

	leftCell.innerHTML= "New Cell1";
	leftCell.innerHTML= "New Cell1";
}
