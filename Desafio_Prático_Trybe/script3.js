//Desafio 3;
var numeroDoDesafio = 3;


function vezesLetraAparece(frase, letra) {
    var tamanhaDaString = frase.length;
    var contador = 0;
    for (var i = 0; i < tamanhaDaString; i++) {
        if (frase[i] === letra) {
            contador++;
        }
    }
    return contador;

}

var frase = "The Lord of The Rings";
var letra = "o";



document.write("Desafio " + numeroDoDesafio + ": ");
console.log("Desafio " + numeroDoDesafio + ": ");
document.write("Na frase '" + frase + "' a letra '" + letra + "' aparece " + vezesLetraAparece(frase, letra) + " vezes!");
console.log("Na frase '" + frase + "' a letra '" + letra + "' aparece " + vezesLetraAparece(frase, letra) + " vezes!");