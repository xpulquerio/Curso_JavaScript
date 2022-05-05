//Tarefa 36
var numeroDaTarefa = 36;

console.log("Tarefa " + numeroDaTarefa + ": ");
document.write("Tarefa " + numeroDaTarefa + ": ");

function imprimaQuadradoAsterisco(n) {

    for(var cont = 0; cont < n ; cont++){
        var texto = "*";
        for (var cont1 = 1; cont1 < n; cont1++){
            texto = texto+"*";
        }
        document.write(texto);
        document.write(" ");
        console.log(texto);
    }
}

imprimaQuadradoAsterisco(5);
