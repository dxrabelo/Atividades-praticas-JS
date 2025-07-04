import ler = require("readline-sync");
import { Stack } from "./stackMetodos" //Necessário trazer a classe junto com o arquivo onde se encontra.

const pilha = new Stack<string>();
let continua: string = '';

do {

    console.log("####### Fila de atendimento ###############");
    console.log("### Digite 1 Adicionar Livros na Pilha ############");
    console.log("### Digite 2 Listar todos os Livros ########");
    console.log("### Digite 3 Retirar Livro da Pilha #########");
    console.log("### Digite 0 Sair #########");
    let number = ler.questionInt(" -> ");

    switch (number) {
        case 1:
            pilha.push(ler.question("Nome: "))
            console.log("Cliente Adicionado!")
            break;

        case 2:
            if (!pilha.isEmpty()) {
                console.log("Lista de Livro na Pilha: ");
                pilha.printStack();
            } else {
                console.log("A Pilha esta Vazia!");
            }
            break;

        case 3:
            if (!pilha.isEmpty()) {
                pilha.pop();
                console.log("O Livro foi retirado da Pilha!");
            } else {
                console.log("A Pilha esta Vazia!");
            }
            break;
        case 0:
            console.log("Programa Finalizado!");
            process.exit(); // Encerra o programa imediatamente
            break;

        default:

    }

    continua = ler.question("Deseja continuar? s/n: ").toLowerCase();

} while (continua === 's')
