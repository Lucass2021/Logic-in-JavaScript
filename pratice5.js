//Ask for the user to number them show the average;

let number1 = prompt("Type a number");
let number2 = prompt("Type another number");

number1 = parseInt(number1);
number2 = parseInt(number2);


let average = (number1 + number2) / 2;

alert(`The average number of ${number1} and ${number2} = ${average}`);
