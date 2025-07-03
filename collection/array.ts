import ler = require("readline-sync");

//  Cria um array para guardar as cores
const cores: string[] = [];

console.log("Digite 5 cores: ")

for (let i = 0; i < 5; i++) {
    const cor = ler.question(`Cor ${i + 1}:`).trim();

    // Verificar se o usuário digitou algo
    if (cor === "") {
        console.log("Digite uma cor valida.");
        // Volta o loop para digitar novamente
        i--;
        // Pula para prox repetição
        continue;
    }

    cores.push(cor);
}

console.log("\nListar todas as cores: ");
cores.forEach(cor => console.log(cor));

const coresOrdenadas = [...cores].sort();
console.log("\nOrdenar as cores: ");
coresOrdenadas.forEach(cor => console.log(cor));