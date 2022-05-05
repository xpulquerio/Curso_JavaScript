//TAREFA 11
var numeroDaTarefa = 11;

function exponencial(base, expoente) {
    //não altere a linha acima
        
    /*
     * Na linha 36, declare uma variável chamada `potencia`
     * e atribua a ela o valor da variável `base` elevada a variável
     * `expoente`
     */
      
        var potencia;
        
        potencia = base**expoente;
        
    
    
    
    //não altere as linhas abaixo
      return potencia;
    }

console.log("Tarefa "+numeroDaTarefa+": 10^2 = "+exponencial(10, 2));
document.write("Tarefa "+numeroDaTarefa+": 10^2 = "+exponencial(10, 2));