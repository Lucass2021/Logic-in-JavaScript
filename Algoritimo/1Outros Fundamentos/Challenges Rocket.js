// 1. Declare uma variável de nome weight

// let weight;


// 2. Que tipo de dado é a variável acima?
// console.log(typeof weight)

// 3. Declare uma variável e atribua valores para cada
// um dos dados:
// * name: String
// * age: Number (integer)
// * stars: Number (float)
// * isSubscribed: Boolean


// let name = "Lucas";
// let age = 19;
// let stars = 4.5;
// let isSubscribed = true;


// 4. A variável student abaixo é de que tipo de
// dados?

//Object


// 4.1 Atribua a ela as mesmas propriedades e valores
// do exercício 3.


// 4.2 Mostre no console a seguinte mensagem:

// <name> de idade <age> pesa <weight kg.

// Atenção, substiua <name> <age> e zweight> pelos
//     valores de cada propriedade do objeto
//     

let student = {
    name: "Lucas",
    age: 19,
    stars: 4.5,
    weight: 72.5,
    isSubscribed: true,
}

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}Kg`);

// 5. Declare uma variável do tipo Array, de nome
// students e atribua a ela nenhum valor, ou seja,
// somente o Array vazio

// 6. Reatribua valor para a variável acima, colocando
// dentro dela o objeto student da questão 4. (Não
// copiare colar o objeto, mas usar o objeto criado e
// inserir ele no Array)

// 7. Coloque no console o valor da posição zero do
// Array acima
let students = [
    student,
];
// 8. Crie um novo student e coloque na posição 1 do
// Array students

let student2 = {
    name: "Mayk",
    age: 23,
    stars: 5.0,
    weight: 80.5,
    isSubscribed: true,
}


students = [
    student,
    student2,
];
console.log(students[1]);
