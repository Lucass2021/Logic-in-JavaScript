// Pedir para o usuário digitar um número e mostrar a tabuada desse número
// de 1 a 1000

let number1 = prompt("Digite um número");

number1 = parseInt(number1);


for (i = 1; i <= 10; i++) {
    console.log(`${number1} * ${i} é igual a ${number1 * i}`)

}