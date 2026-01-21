// Problem
let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number?", 2);

alert(a + b); // 12

// My solution
//Ensure the numbers are recognised as numbers and not as strings

let a = Number("1");
let b = Number("2");
let c = prompt("First number?", a);
let d = prompt("Second number?", b);
alert(a + b); // 3

// Alternative solution 1
// Add a unary plus to convert the string into a number on the prompt
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

// Alternative solution 2
// Add a unary plus to convert the string into a number in the equation
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3