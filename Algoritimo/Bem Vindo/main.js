/* 2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:
Ex:
Qual é o seu nome ? João da Silva
Olá João da Silva, é um prazer te conhecer!
*/

function mesage() {
    let name = document.getElementById("field").value;
    field.value = "";
    alert(`Olá ${name}, é um prazer te conhecer!`);
}
