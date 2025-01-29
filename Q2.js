document.getElementById('task2').onclick = function() {
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var birthYear = prompt("Please enter your birth year:");

var currentYear = 2025;
var age = currentYear - birthYear;

document.getElementById("greeting").innerHTML = "<p>Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?</p>";
}