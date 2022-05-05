//Tarefa 24
var numeroDaTarefa = 24;

function retornaPrimeiroElemento(lista) {
    var resultado;
    if (lista.length > 0){
        resultado = "O primeiro elemento é "+lista[0];
    } else {
        return "O array está vazio";
    }
    
    return resultado;
}



var listaDeAprovados = ["Maria","João","Carlos"];
listaDeAprovados.push("Ewerson");

console.log("Tarefa " + numeroDaTarefa + ": " + retornaPrimeiroElemento(listaDeAprovados));
document.write("Tarefa " + numeroDaTarefa + ": " + retornaPrimeiroElemento(listaDeAprovados));