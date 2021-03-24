// Pedir para o user type a number from 1 to 6, and show a different
// Message for each number

let number = prompt("Digite um número de 1 a 6");

number = parseInt(number);

if (number === 1) {
    alert("Você escolheu o N° 1");
} else if (number === 2) {
    alert("Você escolheu o N°2");
} else if (number === 3) {
    alert("Você escolheu o N°3");
} else if (number === 4) {
    alert("Você escolheu o N°4");
} else if (number === 5) {
    alert("Você escolheu o N°5");
} else if (number === 6) {
    alert("Você escolheu o N°6");
} else if (number >= 7 || number <= 0) {
    alert("Você digitou um N° invalido");
}