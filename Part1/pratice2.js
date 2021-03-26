//1)Perguntar nome do user e dar as boas vindas

let name = prompt("Type your name");
alert(`U R Welcome ${name}`);


//2)Pedir para o user digitar dois números e mostrar a soma

let number1 = prompt("Type a number");
let number2 = prompt("Another Number");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

let results = number1 + number2;

alert(`The sum is ${results}`);
