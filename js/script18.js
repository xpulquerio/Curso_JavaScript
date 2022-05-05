//TAREFA 18
var numeroDaTarefa = 18;

function comparacaoEntreElementos(elementoA, elementoB) {

    var resultado;

    resultado = elementoA && elementoB;


    return resultado;
}
var x = true;
var y = false;

console.log("Tarefa " + numeroDaTarefa + ": " + x + " e " + y + " = " + comparacaoEntreElementos(x, y));
document.write("Tarefa " + numeroDaTarefa + ": " + x + " e " + y + " = " + comparacaoEntreElementos(x, y));