//Fazer jogador1 digitar um número
//Fazer jogador2 digitar um número


//Se foram iguais mostrar mensagem de Empate

//Sortear um número entre 0 e 1

//Se o número sorteado for  0, ganha quem escolher o MENOR
//Se o número sorteado for  1, ganha quem escolher o MAIOR

let jogador1 = prompt("J1 - Digite um número");
let jogador2 = prompt("J2 - Digite um número");

jogador1 = parseFloat(jogador1);
jogador2 = parseFloat(jogador2);

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