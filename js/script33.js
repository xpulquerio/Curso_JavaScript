//Tarefa 33
var numeroDaTarefa = 33;




function calculaIMC(altura, peso) {
    return (peso / (altura * altura)).toFixed(2);
}

var altura = 1.74;
var peso = 65;




console.log("Tarefa " + numeroDaTarefa + ": O IMC para altura: " + altura + " e peso: " + peso + " é " + calculaIMC(altura, peso));
document.write("Tarefa " + numeroDaTarefa + ": O IMC para altura: " + altura + " e peso: " + peso + " é " + calculaIMC(altura, peso));