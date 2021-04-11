// Pedir para o usuario digitar dois números e mostrar um boolean indicando se a média for maior que 5

let number1 = parseFloat(prompt("Digite um número"));
let number2 = parseFloat(prompt("Digite outro número"));

let average = (number1 + number2) / 2;

switch (true) {
    case (average >= 5):
        alert(true);
        break;
    case (average < 5):
        alert(false);
        break;
    default:
        alert("Nothing");
        break;
}

// ou com if else

// if (average >= 5) {
//     alert(true);
// } else {
//     alert(false);
// }