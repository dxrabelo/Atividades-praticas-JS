import ler = require("readline-sync");

const numerosSet: Set<number> = new Set<number>();

console.log("Digite 10 valores inteiros (valores repetidos serao ignorados): ");

while (numerosSet.size < 10) {
    const entrada = ler.question(`Digite ${numerosSet.size + 1}º numero: `);

    const numero = parseInt(entrada);

    // validação da entrada
    if (isNaN(numero)) {
        console.log("Digite um numero inteiro valido.");
        continue;
    }

    // Tenta adicionar no Set (valores repetidos são ignorados)
    const tamanhoAntes = numerosSet.size;
    numerosSet.add(numero);

    if (numerosSet.size === tamanhoAntes) {
        console.log("Numero ja informado. Tente novamente!: ");
    }


}

console.log(`\nListar dados do Set`);
const numerosOrdenados = [...numerosSet].sort();
numerosOrdenados.forEach((numero) => console.log(numero));
