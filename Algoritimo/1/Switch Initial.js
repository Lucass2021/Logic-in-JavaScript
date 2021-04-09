// Pedir para o usuário digitar um número de 1 a 3.
// Mostrar uma mensagem na tela diferente para cada número.

let number = parseInt(prompt("Digite um número de 1 a 3"));

switch (number) {
    case 1:
        alert("Você escolheu o número 1");
        break;
    case 2:
        alert("Você escolheu o número 2");
        break;
    case 3:
        alert("Você escolheu o número 3");
        break;
    default:
        alert("Escolha uma opção válida");
}
