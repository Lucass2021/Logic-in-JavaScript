//Pedir para o user digitar dois números e mostrar se foi aprovado ou não
//A nota de corte é 5
//Se qualuqer nota for 0 ele reprova automaticamente com || 0

let number1 = prompt("Type ur 1° grade");
let number2 = prompt("Type ur 2° grade");

number1 = parseInt(number1);
number2 = parseInt(number2);

let average = (number1 + number2) / 2;

if (average <= 5 || number1 === 0 || number2 === 0) {
    alert("You failed");
} else {
    alert("You succed");
}
