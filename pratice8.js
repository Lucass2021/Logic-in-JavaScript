// Ask the user 2 grades, and inform him if he was aprovved, average note is 50

let number1 = prompt("Type your 1° grade");
let number2 = prompt("Type your 2° grade");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

let result = (number1 + number2) / 2;


if (result > 5) {
    alert("Congratulations, you are aprovved!");
} else if (result <= 5) {
    alert("You reproved");
}
