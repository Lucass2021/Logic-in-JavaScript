// Pedir para o usuario digitar dois números e mostrar o resto da divisão e o número elevado ao quadrado

// usar switch case

let number1 = parseFloat(prompt("Digite um número"));
let number2 = parseFloat(prompt("Digite outro número"));

let operator = parseInt(prompt("Digite 1 para obter o resto e 2 para obter a elevação do número"));

let remainder = number1 % number2;
let cube = number1 ** number2;


switch (operator) {
    case 1:
        alert(`O resto de ${number1} % ${number2} = ${remainder}`);
        break;
    case 2:
        alert(`A elevação de ${number1} ao ${number2} = ${cube}`);
        break;
    default:
        alert("Escolha uma opção valida!");
}