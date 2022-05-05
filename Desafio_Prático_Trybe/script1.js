//Desafio 1;
var numeroDoDesafio = 1;


function calculadoraAdicaoSubtracao(numero, outroNumero, operacao){
    var resultado;

    if (operacao === "+"){
        resultado = numero + outroNumero;

    } else if (operacao === "-") {

        resultado = numero - outroNumero;
    } else {
        resultado = 0;
    }




    return resultado;
}

var x = 10;
var y = 5;





document.write("Desafio "+numeroDoDesafio+": ");
console.log("Desafio "+numeroDoDesafio+": ");
document.write(x+" + "+y+" = "+calculadoraAdicaoSubtracao(x,y,"+")+" e "+x+" - "+y+" = "+calculadoraAdicaoSubtracao(x,y,"-"));
console.log(x+" + "+y+" = "+calculadoraAdicaoSubtracao(x,y,"+")+" e "+x+" - "+y+" = "+calculadoraAdicaoSubtracao(x,y,"-"));