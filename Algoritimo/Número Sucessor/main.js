// 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
// sucessor.
// Ex:
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

let number = parseInt(prompt("Digite um número"));

let prevNumber = number - 11
;
let nextNumber = number + 1;

alert(`O número escolhido é ${number}, o seu antecessor é ${prevNumber} e seu sucessor
é ${nextNumber}`);