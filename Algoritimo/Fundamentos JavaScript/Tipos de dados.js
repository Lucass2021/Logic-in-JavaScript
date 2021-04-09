let name = "Casa do Kimono";

console.log(name.length);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.indexOf("Ki")); //Procura algo na variável
console.log(name.replace("do Kimono", "da Colcci"));
console.log(name.slice(1, 4)); //Recorta um pedaço da variável

let spacedName = "       Nome Espaçado        "

console.log(spacedName.trim()); // Tira os espaços da variável, util em formulários.

// ===================== Numbers ===================== //

let a = 7;
let b = 2;

console.log(a ** b);

a++; //Incremento
b--;
console.log(a, b);

// ===================== Boolean ===================== //

console.log("5 >= 5", 5 >= 5); //True
console.log("5 <= 4", 5 <= 4);  //False

console.log("10 != 5", 10 != 5); //Diferente = True

console.log("4" == 4); //True
console.log("4" === 4); //False

// ===================== Operadores Lógicos ===================== //

let c = true;

console.log("!c", !c); // Negando um valor

console.log("!null", !null);  //Negando valores negativos por padrão = true
console.log("!undefined", !undefined); //Negando valores negativos por padrão = true
console.log("!false", !false); //Negando valores negativos por padrão = true
console.log("string vazia", !""); //Negando valores negativos por padrão = true
console.log("!0", !0); //Negando valores negativos por padrão = true

//&& Operador And
// Só retorna verdadeiro se todos os elementos forem verdadeiros

console.log(10 > 5 && 10 === 10); //true
console.log(10 > 11 && 10 > 9); //False

// || Operador ou
//Retorna somente o primeiro valor verdadeiro encontrado

console.log(null || 25 || ""); //Retorna 25
console.log("Teste" || 10 || undefined); //Retorna Teste


// ===================== Condicionais' ===================== //