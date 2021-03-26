// Pedir para o usuário digitar um número e mostrar a tabuada desse número
// de 1 a 50, e colocar uma linha a cada 10 números

let number = prompt("Type a number");

number = parseInt(number);

for (i = 1; i <= 50; i++) {
    console.log(`${number} X ${i} é igual a ${number * i}`);
    if (i % 10 === 0) {
        console.log("Linha");
    }
}

