//Desafio 2;
var numeroDoDesafio = 2;


function tripleTheChances(chances) {
    var resultado = [];
    var tamanhaDoArray = chances.length;
    for (var i = 0; i < tamanhaDoArray; i++) {
        var x = chances[i]*3;
        resultado.push(x);
    }
    return resultado;

}

var lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



document.write("Desafio " + numeroDoDesafio + ": ");
console.log("Desafio " + numeroDoDesafio + ": ");
document.write(lista + " triplicada é: " + tripleTheChances(lista));
console.log(lista + " triplicada é: " + tripleTheChances(lista));