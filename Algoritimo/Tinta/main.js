// 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
//     sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

let largura = parseInt(prompt("Qual a largura da parede?"));
let altura = parseInt(prompt("Qual a altura da parede?"));

let areaMetroQuadrado = largura * altura

let tinta = (areaMetroQuadrado / 2);

alert(tinta);





