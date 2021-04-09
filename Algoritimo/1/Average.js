// Pedir para o usuário digitar dois numeros e mostrar a média

let number1 = parseFloat(prompt("Digite um número"));
let number2 = parseFloat(prompt("Digite outro número"));

let average = (number1 + number2) / 2;

alert(`A média de ${number1} e ${number2} = ${average}`);