// Pedir para o user digir dois números e realizar a conversão

//Mostrar o resto da divisão
//Mostrar os respectivos números elevados

let number1 = prompt("Type a number");
let number2 = prompt("Type a number");

number1 = parseInt(number1);
number2 = parseInt(number2);

let resto = number1 % number2;
let elevado = number1 ** number2;

alert(`O Resto de ${number1} % ${number2} = ${resto}`);
alert(`${number1} ao cubo de ${number2} = ${elevado}`);