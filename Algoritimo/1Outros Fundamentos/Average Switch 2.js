// Pedir para o usuario digitar duas notas e mostrar uma mensagem dizendo
// se foi aprovado ou não, nota de corte é 5.

let number1 = parseFloat(prompt("Digite sua primeira nota"));
let number2 = parseFloat(prompt("Digite sua segunda nota"));

let average = (number1 + number2) / 2;

switch (true) {
    case (average >= 5):
        alert(`Você foi aprovado com a nota de ${average}`);
        break;
    case (average < 5):
        alert(`Você foi reprovado com a nota de ${average}`);
        break;
}