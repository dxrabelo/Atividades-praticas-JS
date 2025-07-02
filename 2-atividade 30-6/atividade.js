// Importar dados de entrada de dados 
const readline = require("readline-sync");

// Função para calcular média de 4 notas
function calcularMedia() {
    // Leitura das 4 notas
    const nota1 = readline.questionFloat("Digite a primeira nota: ");
    const nota2 = readline.questionFloat("Digite a segunda nota: ");
    const nota3 = readline.questionFloat("Digite a terceira nota: ");
    const nota4 = readline.questionFloat("Digite a quarta nota: ");
    
    // Cálculo da média
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    // Exibição da média
    console.log(`A média das notas é: ${media.toFixed(2)}`);
}

calcularMedia();
