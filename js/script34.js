//Tarefa 34
var numeroDaTarefa = 34;



function multiplicaPorDois(numeros) {
    /*
     * Complete a função multiplicando todos os elementos
     * do array `numeros` por dois e retornando um array
     * com esses resultados
     */
    var resultado = []
     for (var cont = 0; cont < numeros.length; cont++){
    resultado.push(numeros[cont]*2);
         
     }
    return resultado;
    
     
    }


    var numeros = [1,2,3,4,5,6,7,8];






console.log("Tarefa " + numeroDaTarefa + ": "+multiplicaPorDois(numeros));
document.write("Tarefa " + numeroDaTarefa + ": "+multiplicaPorDois(numeros));