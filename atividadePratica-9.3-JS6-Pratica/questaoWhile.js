const readline = require('readline-sync');

// Entrada de dados
let menoresDe21 = 0;
let maioresDe50 = 0;

let idade = readline.questionInt('Digite uma idade: ');

while (idade >= 0) {
    if (idade < 21) {
        menoresDe21++;
    } else if (idade > 50) {
        maioresDe50++;
    }

    idade = readline.questionInt('Digite uma idade: ');
} 

console.log(`\nTotal de pessoas menores de 21 anos: ${menoresDe21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maioresDe50}`);