//Tarefa 25
var numeroDaTarefa = 25;

function comparaStrings(primeiraString, segundaString) {
    var resultado;
    if (primeiraString.length < segundaString.length) {
        resultado = primeiraString + segundaString;
    } else {
        resultado = segundaString + primeiraString;
    }

    return resultado;
}



var primeiraString = "uva";
var segundaString = "abacaxi";

console.log("Tarefa " + numeroDaTarefa + ": A concatenação entre " + primeiraString + " e " + segundaString + " é " + comparaStrings(primeiraString, segundaString));
document.write("Tarefa " + numeroDaTarefa + ": A concatenação entre " + primeiraString + " e " + segundaString + " é " + comparaStrings(primeiraString, segundaString));