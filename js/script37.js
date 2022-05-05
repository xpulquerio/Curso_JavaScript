//Tarefa 37
var numeroDaTarefa = 37;

function numeroPrimo(x){
    var resultado = 0;
    for (i = 2; i <= x / 2; i++){
        if (x%i === 0){
            resultado++; //Se for divisivel por qualquer número até a metade significa que ele não é primo;
            //console.log(resultado);
            break;
        }
    }

    if (resultado === 1){
        return false;
    } else {
        return true;
    }

}

function buscaNumeroPrimos(n) {
    var numerosPrimos = [];

    for (var cont = 2; cont <= n; cont++) {
        if(numeroPrimo(cont)){
            numerosPrimos.push(cont);
        }
        //.log("Numero "+cont+" é primo ? "+numeroPrimo(cont));
        
        
    }

    return numerosPrimos;
}



var n = 15;

console.log("Tarefa " + numeroDaTarefa + ": Os primos entre 0 e " + n + " são: " + buscaNumeroPrimos(n));
document.write("Tarefa " + numeroDaTarefa + ": Os primos entre 0 e " + n + " são: " + buscaNumeroPrimos(n));


