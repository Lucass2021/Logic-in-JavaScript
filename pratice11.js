//Pedir para o user digitar dois números e mostrar se foi aprovado ou não
//A nota de corte é 5
//Se qualuqer nota for 0 ele reprova automaticamente com if e else

let number1 = prompt("Type your 1° grade");
let number2 = prompt("Type you 2° grade");

number1 = parseInt(number1);
number2 = parseInt(number2);

let average = (number1 + number2) / 2;

if (number1 === 0) {
    alert("You failled");
} else if (number2 === 0) {
    alert("You failled");
} else {

    if (average > 5) {
        alert("You succeed");
    } else if (average <= 5) {
        alert("You failed");
    }

}
