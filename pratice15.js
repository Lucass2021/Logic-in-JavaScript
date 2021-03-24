// Pedir para o user type a number from 1 to 6, and show a different
// Message for each number com Switch

let number = prompt("Type a number from 1 to 6");

number = parseInt(number);

switch (number) {
    case 1:
        alert("Você escolheu o N° 1");
        break;
    case 2:
        alert("Você escolheu o N° 2");
        break;
    case 3:
        alert("Você escolheu o N° 3");
        break;
    case 4:
        alert("Você escolheu o N° 4");
        break;
    case 5:
        alert("Você escolheu o N° 5");
        break;
    case 6:
        alert("Você escolheu o N° 6");
        break;

    default:
        alert("Você escolheu um N° invalido");
        break;
}