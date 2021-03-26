// 3) Ask to the user type a number then convert to integer;

let number1 = prompt("Type any number");
let result1 = parseInt(number1);
alert(`The number you typed was ${result1}`);

let number2 = prompt("Give me a seconde one");
let result2 = parseInt(number2);
alert(`Your second number is ${result2}`);

//Subtraia os resultados anteriores
let subtraction = result1 - result2;
alert(`The subtraction is ${subtraction}`);
alert(`Because ${result1} - ${result2} is ${subtraction}`);

//Multiple os resultados iniciais
let multiply = result1 * result2;
alert(`The numbers multiply are equal to ${multiply}`);
alert(`Because ${result1} times ${result2} is equal to ${multiply}`);

//Divide os resultados iniciais

let division = result1 / result2;
alert(`The number dived are equal to ${division}`);
alert(`Because ${result1} dived by ${result2} is equal to ${division}`);

//Some os resultados iniciais
let sum = result1 + result2;
alert(`The sum is ${sum}`);
alert(`Because the sum of ${result1} + ${result2} is equal to ${sum}`);