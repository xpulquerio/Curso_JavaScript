//Tarefa 29
var numeroDaTarefa = 29;

function converteStringParaArray(frase) {
    // não altere a linha acima
    
     /*
     * Complete o código abaixo atribuindo na variável resultado
     * o valor de acordo com as regras do exercício
     */
    
        var resultado = [];
    // escreva aqui seu código:

    for (var cont = 0; cont < frase.length ; cont++){
        resultado.push(frase[cont]);
    }
    
        
        
        
    // não altere as linhas abaixo
      return resultado;
    }

    var frase = "Eu vou ser campeão";

    converteStringParaArray(frase);

console.log("Tarefa " + numeroDaTarefa + ": " + converteStringParaArray(frase));
document.write("Tarefa " + numeroDaTarefa + ": " + converteStringParaArray(frase));