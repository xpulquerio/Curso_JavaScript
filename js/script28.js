//Tarefa 28
var numeroDaTarefa = 28;

console.log("Tarefa " + numeroDaTarefa + ":");
document.write("Tarefa " + numeroDaTarefa + ": ");

function imprimirLista(lista) {

    for (var cont = 0; cont < lista.length; cont++) {
        console.log(lista[cont]);
        document.write(lista[cont]);
        document.write(" ");
    }


}

var lista = ["Ewerson", "Janiele", "Sintia"];

imprimirLista(lista);