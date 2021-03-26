//Pedir para o user digitar dois números e mostrar se foi aprovado ou não
//A nota de corte é 5
//Se qualuqer nota for 0 ele reprova automaticamente com if e else


let grade1 = prompt("Type ur 1° grade");
let grade2 = prompt("Type ur 2° grade");

grade1 = parseInt(grade1);
grade2 = parseInt(grade2);

let average = (grade1 + grade2) / 2;

if (grade1 === 0 || grade2 === 0) {
    alert("Failled");

    if (average >= 5) {
        alert("Congrats");
    } else if (average < 5) {
        alert("fail");
    }
}

