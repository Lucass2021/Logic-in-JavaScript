let number1 = prompt("Type a number");
number1 = parseInt(number1, 10);
alert(`You choosed ${number1}`);

let number2 = prompt("Another number");
number2 = parseInt(number2);
alert(`You choosed ${number2}`);


let results = number1 - number2;

alert(`The subtraction of ${number1} - ${number2} = ${results}`);

let results1 = number1 * number2;
alert(`The multiply of ${number1} X ${number2} = ${results1}`);

let result2 = number1 / number2;
alert(`The division of ${number1} / ${number2} = ${result2}`);

let result3 = number1 + number2;
alert(`The sum of ${number1} + ${number2} = ${result3}`);


//Name 
let name = prompt("Type your name");
alert(`Welcome back ${name}`);