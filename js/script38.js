//Tarefa 38
var numeroDaTarefa = 38;

function transformarPalavraEmArrayInvertido(elementoString){
    var temp = [];
    for (var cont = (elementoString.length-1); cont >= 0; cont--){
        temp.push(elementoString[cont]);
    }
    return temp;
}

function transformarArrayEmString (elementoArray){
    var resultado = elementoArray[0];
        for (var cont = 1; cont <=elementoArray.length-1; cont++){
            resultado = resultado+elementoArray[cont];
        }

    return resultado;
}

function ehPalindromo(palavra){
    var resultado;
    var arrayInvertido = transformarPalavraEmArrayInvertido(palavra);
    var stringInvertida = transformarArrayEmString(arrayInvertido);

    if (palavra === stringInvertida){
        resultado = "SIM, SOU UM PALÍNDROMO";
    } else {
        resultado = "INFELIZMENTE, NÃO SOU UM PALÍNDROMO";
    }
    
    return resultado;
}

var x = "mirim";
var y = "casa";



console.log("Tarefa " + numeroDaTarefa + ": "+x+", "+ehPalindromo(x));
document.write("Tarefa " + numeroDaTarefa + ": "+x+", "+ehPalindromo(x));