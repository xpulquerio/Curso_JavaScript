//TAREFA 21
var numeroDaTarefa = 21;

function verificaParOuImpar(elementoA) {

    var resultado;

    if (elementoA % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
    return resultado;
}

var x = 1;
var y = 2;

console.log("Tarefa " + numeroDaTarefa + ": " + x + " é " + verificaParOuImpar(x) + " e " + y + " é "+verificaParOuImpar(y));
document.write("Tarefa " + numeroDaTarefa + ": " + x + " é " + verificaParOuImpar(x) + " e " + y + " é "+verificaParOuImpar(y));