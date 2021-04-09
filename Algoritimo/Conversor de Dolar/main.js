// 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5.50.


let wallet = parseInt(prompt("Quanto reais você tem?"));

let dolar = 5.50

let real = (wallet / dolar).toFixed(2);

alert(`R$${wallet} em dolares é U$ ${real}`);





