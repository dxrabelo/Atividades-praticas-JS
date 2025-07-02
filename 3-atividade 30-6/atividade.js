
// Importação do pacote readline-sync
const readline = require("readline-sync");

// Função para calcular o salario líquido
function calcularSalarioLiquido(salarioBruto, adicionalNoturno, horasExtras, descontos) {
  const ValorHoraExtra = horasExtras * 5;
  return salarioBruto + adicionalNoturno + ValorHoraExtra - descontos;

}

// entrada de dados
const salarioBruto = readline.questionFloat("Digite o salário bruto: ");
const adicionalNoturno = readline.questionFloat("Digite o adicional noturno: ");
const horasExtras = readline.questionFloat("Digite o número de horas extras: ");
const descontos = readline.questionFloat("Digite o total de descontos: ");

// cálculo do salário líquido
const salarioLiquido = calcularSalarioLiquido(salarioBruto, adicionalNoturno, horasExtras, descontos);

// exibição do resultado
console.log(`\nO salário líquido é: R$ ${salarioLiquido.toFixed(2)}`);
