// Name
var name = prompt("Enter your name: ");
while (!/^[a-zA-Z ]{2,30}$/.test(name) || !name) {
	alert("Please Enter Correct Name!");
	name = prompt("Enter your name: ");
}

// English Subject
var English = parseFloat(prompt("Enter your English Marks: "));
while (isNaN(English) || English < 0 || English > 100) {
	alert("Please add correct marks");
	English = parseFloat(prompt("Enter your English Marks: "));
}

// Math Subject
var Math = parseFloat(prompt("Enter your Maths Marks: "));
while (isNaN(Math) || Math < 0 || Math > 100) {
	alert("Please add correct marks");
	Math = parseFloat(prompt("Enter your Maths Marks: "));
}

// Chemistry Subject
var Chemistry = parseFloat(prompt("Enter your Chemistry Marks: "));
while (isNaN(Chemistry) || Chemistry < 0 || Chemistry > 100) {
	alert("Please add correct marks");
	Chemistry = parseFloat(prompt("Enter your Chemistry Marks: "));
}

// Physics Subject
var Physics = parseFloat(prompt("Enter your Physics Marks: "));
while (isNaN(Physics) || Physics < 0 || Physics > 100) {
	alert("Please add correct marks");
	Physics = parseFloat(prompt("Enter your Physics Marks: "));
}

// Pakistan Studies Subject
var Pst = parseFloat(prompt("Enter your P.St Marks: "));
while (isNaN(Pst) || Pst < 0 || Pst > 100) {
	alert("Please add correct marks");
	Pst = parseFloat(prompt("Enter your P.St Marks: "));
}

// Islamiyat Subject
var Islamiyat = parseFloat(prompt("Enter your Islamiyat Marks: "));
while (isNaN(Islamiyat) || Islamiyat < 0 || Islamiyat > 100) {
	alert("Please add correct marks");
	Islamiyat = parseFloat(prompt("Enter your Islamiyat Marks: "));
}

// Urdu Subject
var Urdu = parseFloat(prompt("Enter your Urdu Marks: "));
while (isNaN(Urdu) || Urdu < 0 || Urdu > 100) {
	alert("Please add correct marks");
	Urdu = parseFloat(prompt("Enter your Urdu Marks: "));
}

// Sum of all subjects marks
var sum_of_marks =
	English + Chemistry + Math + Physics + Pst + Islamiyat + Urdu;

// Total Number of marks
var total_marks = 700;

// Calculated Percentage
var percentage = (sum_of_marks / total_marks) * 100;

// Conditions to define grade
if (percentage >= 80.0 && percentage <= 100) {
	alert("Your Grade is A+");
} else if (percentage >= 70.0 && percentage <= 79.99) {
	alert("Your Grade is A");
} else if (percentage >= 60.0 && percentage <= 69.99) {
	alert("Your Grade is B");
} else if (percentage >= 50.0 && percentage <= 59.99) {
	alert("Your Grade is C");
} else if (percentage >= 40.0 && percentage <= 49.99) {
	alert("Your Grade is D");
} else if (percentage >= 33.0 && percentage <= 39.99) {
	alert("Your Grade is E.");
} else if (percentage < 33.0) {
	alert("Failed!");
}

// Display Details on Html Page
document.write('<div class= "container"');
document.write('<div class= "row justify-content-center ">');
document.write('<div class= "col-auto "></div>');
document.write("<br/>");

// Name Heading
document.write('<h1 class= "text-center" > Student\'s Name: ' + name + "</h1>");

// Table
document.write('<table class="table table-bordered">');

// Table Header
document.write('<thead class="thead-dark"');
document.write("<tr>");
document.write("<th> # </th>");
document.write("<th> Subject </th>");
document.write("<th> Marks </th>");
document.write("</tr>");
document.write("</thead");

// Row 1
document.write("<tr>");
document.write("<td> 1 </td>");
document.write("<td> English </td>");
document.write("<td>" + English + "</td>");
document.write("</tr>");

// Row 2
document.write("<tr>");
document.write("<td> 2 </td>");
document.write("<td> Math </td>");
document.write("<td>" + Math + "</td>");
document.write("</tr>");

// Row 3
document.write("<tr>");
document.write("<td> 3 </td>");
document.write("<td> Chemistry </td>");
document.write("<td>" + Chemistry + "</td>");
document.write("</tr>");

// Row 4
document.write("<tr>");
document.write("<td> 4 </td>");
document.write("<td> Physics </td>");
document.write("<td>" + Physics + "</td>");
document.write("</tr>");

// Row 5
document.write("<tr>");
document.write("<td> 5 </td>");
document.write("<td> Pakistan Studies </td>");
document.write("<td>" + Pst + "</td>");
document.write("</tr>");

// Row 6
document.write("<tr>");
document.write("<td> 6 </td>");
document.write("<td> Islamiyaat </td>");
document.write("<td>" + Islamiyat + "</td>");
document.write("</tr>");

// Row 7
document.write("<tr>");
document.write("<td> 7 </td>");
document.write("<td> Urdu </td>");
document.write("<td>" + Urdu + "</td>");
document.write("</tr>");

// Row 8
document.write("<tr>");
document.write("<td> 8 </td>");
document.write("<td> Sum of marks </td>");
document.write("<td>" + sum_of_marks + "</td>");
document.write("</tr>");
document.write("</table>");
document.write("<br/>");
document.write("<div/>");
document.write("<div/>");
document.write("<div/>");

// Percentage Heading
document.write(
	'<h3 class="text-center"> Calculated Percentage: ' +
		" " +
		percentage +
		"% </h3>"
);
