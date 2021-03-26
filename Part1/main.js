/*1)

//Perguntar nome do user e dar as boas vindas

//Comandos:
//Alert
//Prompt
//Variable (like a cup to save memory)


let name = prompt("What is your name?");
alert(`You are welcome ${name}!`);

/*
let real = prompt("U R going backwards our fowards?");
alert(`${real} Then`);
*/

//2)

//Pedir para o user digitar dois números e mostrar a soma
//Comandos
//prompt
//alert
//parseInt
//parseFloat

let value1 = prompt("Say a Number to sum");
let value2 = prompt("One more number");

//Convert string to number
value1 = parseFloat(value1);
value2 = parseFloat(value2);

let results = value1 + value2;
alert(`You sum is equal to ${results}`);

/*Peguei os dados do usuário pelo prompt, coloquei em um copo
com uma colher converti/tirei esses dados e coloquei em outro copo
e entreguei para ele os resultados dos dados.*/



