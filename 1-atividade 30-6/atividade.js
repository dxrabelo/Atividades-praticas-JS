
// Importa o pacote readline-sync para entrada de dados
const readline = require("readline-sync");

// Função principal
function calcularNovoSalario() {
    // Leitura do salário atual
    const salario = readline.questionFloat("Digite o salário atual: R$ ");
    // Digitação do abono
    const abono = readline.questionFloat("Digite o valor do abono: R$ ");
    // Leitura do abono
    const novoSalario = salario + abono;
    // Exibição do novo salário
    console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)}`);

}
calcularNovoSalario();