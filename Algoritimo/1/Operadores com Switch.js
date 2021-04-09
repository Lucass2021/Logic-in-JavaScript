// // Pedir para o usuário digitar dois números e mostrar a soma,
// suntração, multiplicação e divisão

let number1 = parseFloat(prompt("Digite um número"));
let number2 = parseFloat(prompt("Digite outro número"));
let operator = parseInt(prompt("Digite 1 para somar, 2 para subtrair, 3 para multiplar e 4 para dividir"));

let sum = number1 + number2;
let minus = number1 - number2;
let times = number1 * number2;
let division = number1 / number2;

switch (operator) {
    case 1:
        alert(`A soma de ${number1} + ${number2} = ${sum}`);
        break;
    case 2:
        alert(`A subtração de ${number1} - ${number2} = ${minus}`);
        break;
    case 3:
        alert(`A multiplicação de ${number1} x ${number2} = ${times}`);
        break;
    case 4:
        alert(`A divisão de ${number1} ÷ ${number2} = ${division}`);
        break;
}


