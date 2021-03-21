/* % Modulo é o resto da divisão, serve para saber se o n é par ou impar
EX: 6%2 É 0, ou seja é par, 6:5 é 1, ou seja é impar;

** É o número ao cubo, 3**2 = 9;

++ e --, aumentam ou diminuiem o valor da variavel */

// Pedir para o user digir dois números e realizar a conversão

//Mostrar o resto da divisão
//Mostrar os respectivos números elevados

let number1 = prompt("Type a number");
let number2 = prompt("Type another number");

number1 = parseInt(number1);
number2 = parseInt(number2);

let resto = number1 % number2;
alert(`O resto da divisão de ${number1} e ${number2} = ${resto}`);

let quadrado = number1 ** number2;
alert(`O ${number1} elevado ao ${number2} = ${quadrado}`);