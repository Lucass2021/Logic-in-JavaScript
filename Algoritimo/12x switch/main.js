// Mostrar o valor de uma compra em até 12x

let price = parseFloat(prompt("Qual o valor da compra?"));
let numeroParcelas = parseInt(prompt("Em quantas parcelas você gostaria?"));

switch (true) {
    case (numeroParcelas === 1):
        alert(`É ${numeroParcelas} parcela de R$ ${price}`);
        break;

    case (numeroParcelas === 2):
        let two = (price / 2).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${two}`);
        break;

    case (numeroParcelas === 3):
        let three = (price / 3).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${three}`);
        break;

    case (numeroParcelas === 4):
        let four = (price / 4).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${four}`);
        break;

    case (numeroParcelas === 5):
        let five = (price / 5).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${five}`);
        break;

    case (numeroParcelas === 6):
        let six = (price / 6).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${six}`);
        break;

    case (numeroParcelas === 7):
        let seven = (price / 7).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${seven}`);
        break;

    case (numeroParcelas === 8):
        let eight = (price / 8).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${eight}`);
        break;

    case (numeroParcelas === 9):
        let nine = (price / 9).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${nine}`);
        break;

    case (numeroParcelas === 10):
        let ten = (price / 10).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${ten}`);
        break;

    case (numeroParcelas === 11):
        let eleven = (price / 11).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${eleven}`);
        break;

    case (numeroParcelas === 12):
        let twelve = (price / 12).toFixed(2);
        alert(`São ${numeroParcelas} parcelas de R$ ${twelve}`);
        break;

}