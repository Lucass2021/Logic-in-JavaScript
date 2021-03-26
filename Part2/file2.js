/*Pedir para o user digitar dois número e se a média for
maior que 5 mostrar um bollean */

let number1 = prompt("Type ur 1° grade");
let number2 = prompt("Type ur 2° grade");

let average = (number1 + number2) / 2;

if (average > 5) {
    alert(`You are aprovved true`)
} else if (average <= 5) {
    alert(`You reproved false`);
}


RE DO THIS