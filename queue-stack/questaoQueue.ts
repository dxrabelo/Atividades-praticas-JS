import ler = require("readline-sync");
import { Queue } from "./queueMetodos" //Necessário trazer a classe junto com o arquivo onde se encontra.

const fila = new Queue<string>();
let continua: string = '';

do {

    console.log("####### Fila de atendimento ###############");
    console.log("### Digite 1 Adicionar Cliente na Fila ############");
    console.log("### Digite 2 listar todos os Clientes ########");
    console.log("### Digite 3 Retirar Cliente da Fila #########");
    console.log("### Digite 0 Sair #########");
    let number = ler.questionInt(" -> ");

    switch (number) {
        case 1:
            fila.enqueue(ler.question("Nome: "))
            console.log("Cliente Adicionado!")
            break;

        case 2:
            if (!fila.isEmpty()){
            fila.printQueue();
            console.log("Lista de Clientes na Fila: ");
            } else {
                console.log("A Fila esta Vazia!");
            }
            break;

        case 3:
            if (!fila.isEmpty()){
            fila.dequeue();
            console.log("O Cliente foi Chamado!");
            } else {
                console.log("A Fila esta Vazia!");
            }
            break;
        case 0:
            console.log("Programa Finalizado!")
            process.exit(); // Encerra o programa imediatamente
            break;

        default:

            
    }

    continua = ler.question("Deseja continuar? s/n: ").toLowerCase();

} while (continua === "s")