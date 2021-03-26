/* 7)Ask the user 2 grades, and inform him if he was aprovved, average note is 50

let grade1 = prompt("Inform ur 1° grade");
let grade2 = prompt("Inform ur 2° grade");

grade1 = parseInt(grade1);
grade2 = parseInt(grade2);

let average = (grade1 + grade2) / 2;

if (average >= 50) {
    alert(`Congrats, your average was ${average}`);
} else {
    alert(`Not today Son, your average was ${average}`);
}
*/

//8)Fazer jogador1 digitar um número
//Fazer jogador2 digitar um número

//Sortear um número entre 0 e 1
//Se foram iguais mostrar mensagem de Empate
//Se o número sorteado for  0, ganha quem escolher o MENOR
//Se o número sorteado for  1, ganha quem escolher o MAIOR

let jogador1 = prompt("J1 - Type 0 or 1");
let jogador2 = prompt("J2 - Type 0 or 1");

jogador1 = parseInt(jogador1);
jogador2 = parseInt(jogador2);



if (jogador1 === jogador2) {
    alert("Empate");
} else {
    let sorteio = Math.floor(Math.random() * 2);

    if (sorteio === 0) {
        if (jogador1 < jogador2) {
            alert("J1 venceu");
        } else {
            alert("J2 Venceu");
        }

    } else (sorteio === 1)
    if (jogador1 > jogador2) {
        alert("J1 Venceu");
    } else {
        alert("J2 Venceu");
    }

};

