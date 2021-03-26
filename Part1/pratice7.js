/*Pedir para o user digitar dois número e se a média for
maior que 5 mostrar um bollean */

let number1 = prompt("Type a number");
let number2 = prompt("Type other number");

number1 = parseInt(number1);
number2 = parseInt(number2);

let average = (number1 + number2) / 2;
alert(`The average of ${number1} and ${number2} = ${average} ${average >= 5} `);

