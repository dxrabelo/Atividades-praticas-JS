// Importar do pacote para entrada de dados
const readline = require("readline-sync");

// Função que calcula a diferença entre dois produtos
function calcularDiferenca(n1, n2, n3, n4) {
    return (n1 * n2) - (n3 * n4);
}

// loop principal
let repetir = true;

while (repetir) {

    // Entrada de dados
    const numero1 = readline.questionFloat("Digite o primeiro número n1: ");
    const numero2 = readline.questionFloat("Digite o segundo número n2: ");
    const numero3 = readline.questionFloat("Digite o terceiro número n3: ");
    const numero4 = readline.questionFloat("Digite o quarto número n4: ");

    // Cálculo
    const diferenca = calcularDiferenca(numero1, numero2, numero3, numero4);

    // Saída formatada
    console.log(`\nDiferença: ${diferenca.toFixed(1)}`);

    // Pergunta se deseja repetir
    repetir = readline.keyInYNStrict("Deseja repetir? (S/N): ");
    console.log();
}
