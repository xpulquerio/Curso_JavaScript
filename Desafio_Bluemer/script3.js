//Desafio 3;
var numeroDoDesafio = 3;


var rodadas = 50;
var duracaoMinutos = 5;

//300 / 5 = 60 pedras por rodada;
//60 / 15 = 4 pedras por minuto;

var quantidade = rodadas*duracaoMinutos*4;

console.log("A catapulta lançou "+quantidade+" pedras em "+rodadas+" de "+duracaoMinutos+" minutos.");
document.write("A catapulta lançou "+quantidade+" pedras em "+rodadas+" rodadas de "+duracaoMinutos+" minutos.");