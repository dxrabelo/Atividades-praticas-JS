
const readline = require('readline-sync');

// Entrada de dados 
let inicio = readline.questionInt('Digite o primeiro numero do intervalo: ');
let fim = readline.questionInt('Digite o segundo numero do intervalo: ');

// Verificar se o intervalo é válido
if (inicio >= fim) {
    console.log("Intervalo invalido!");
} else {
    console.log(`No intervalo entre ${inicio} e ${fim}`);

    for (let i = inicio; i <= fim; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} e divisivel por 3 e 5`);
        }
    }
}

