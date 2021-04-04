// 3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
// final uma mensagem.
// Ex:
// Nome do Funcionário: Maria do Carmo
// Salário: 1850,45
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

function getData() {
    let name = document.getElementById("nameField").value;
    let salary = document.getElementById("salaryField").value;

    salary = parseFloat(salary);

    alert(`O Funcionário: ${name} recebe o Salario de R$${salary}`)


    nameField.value = "";
    salaryField.value = "";

}