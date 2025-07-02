const readline = require('readline-sync');


// Entrada de dados
let soma = 0;
let numero;

do {
  numero = readline.questionInt('Digite um número: ');

  if (numero > 0) {
    soma += numero;
  }

} while (numero !== 0);

console.log(`\nA soma dos números positivos é: ${soma}`);

// O loop continua até que o usuário digite 0, momento em que a soma dos números positivos é exibida.