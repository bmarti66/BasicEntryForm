var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails() {
      var empID = document.getElementById("empID").value;
      var firstName = document.getElementById("firstName").value;      
      var lastName = document.getElementById("lastName").value;

      if(!empID || !firstName || !lastName) {
        alert("Please fill in all of the boxes");
        return;
      }

      var display = document.getElementById("display");

      var newRow = display.insertRow(row);

      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);      
      var cell3 = newRow.insertCell(2);

      cell1.innerHTML = empID;
      cell2.innerHTML = firstName;
      cell3.innerHTML = lastName;

      row++;
}