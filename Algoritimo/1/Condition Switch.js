// Pedir para o usuário digitar números e mostrar uma mensagem informando
// se foi aprovado ou reprovado a nota de corte é 5
// Porém se qualquer uma das notas for 0 reprova automaticamente

let grade1 = parseFloat(prompt("Digite sua primeira nota"));
let grade2 = parseFloat(prompt("Digite sua segunda nota"));

let average = (grade1 + grade2) / 2;

switch (true) {
    case (grade1 === 0 || grade2 === 0):
        alert(`Voce foi reprovado pois zerou uma prova`);
        break;
    case (average >= 5):
        alert(`Você foi aprovado com a nota ${average}`);
        break;
    case (average < 5):
        alert(`Voce foi reprovado com a nota ${average}`);
        break;
}