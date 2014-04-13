/// <reference path="Scripts/jquery-2.1.0.js" />

var studentsArray = [{ fname: "Peter", lname: "Ivanov", grade: 3 },
                     { fname: "Milena", lname: "Grigorova", grade: 6 },
                     { fname: "Gergana", lname: "Borisova", grade: 12 },
                     { fname: "Bojko", lname: "Petrov", grade: 7 }];

var tableBody = $("table tbody");

for (var i = 0; i < studentsArray.length; i++) {
    var tableRow = $("<tr></tr>");
    tableRow.html("<td>" + studentsArray[i].fname + "</td>" +
        "<td>" + studentsArray[i].lname + "</td>" +
        "<td>" + studentsArray[i].grade + "</td>");
    tableRow.appendTo(tableBody);
}

