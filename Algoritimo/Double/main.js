// 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
// sua terça parte.
//     Ex:
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

//Ask for number
let number = parseFloat(prompt("Digite um número"));

//Apply requiments to number
let double = number * 2
let oneThird = (number / 3).toFixed(2)



//Show results

alert(`O número escolhido foi ${number}, sendo seu dobro ${double} e sua terça parte ${oneThird}`);