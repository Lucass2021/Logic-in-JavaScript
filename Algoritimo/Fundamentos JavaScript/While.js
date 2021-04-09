// loops

let counter = 0;

while (counter <= 5) {
    console.log(counter);
    ++counter;
}

//Com Break

let contador = 0;

while (contador <= 5) {
    if (contador === 3) {
        break;
    };
    console.log(contador);
    ++contador;
}

// Multiplo de 3 imprimir ping
// Multiplo de 5 imprimir pong
// Multiplo de 3 e 5 imprimir ping e pong

let counter = 0;

while (counter < 100) {
    switch (true) {
        case (counter % 3 === 0 && counter % 5 === 0):
            console.log(`${counter} - Ping Pong`);
            break;
        case (counter % 3 === 0):
            console.log(`${counter} - Ping`);
            break;
        case (counter % 5 === 0):
            console.log(`${counter} - Pong`);
            break;

    }
    counter++;
}



// if (counter % 3 === 0 && counter % 5 === 0) {
//     console.log(`${counter} - Ping Pong`);
// } else if (counter % 3 === 0) {
//     console.log(`${counter} - Ping`)
// } else if (counter % 5 === 0) {
//     console.log(`${counter} - Pong`);
// }


// counter++;