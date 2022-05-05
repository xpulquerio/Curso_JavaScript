//TAREFA 22
var numeroDaTarefa = 22;

function determinarGeracao(anoDeNascimento) {
    var resultado;

    if (anoDeNascimento <= 1945) {
        return "Geração silenciosa";
    } else if (1945 < anoDeNascimento && anoDeNascimento <= 1964) {
        return "Boomers";
    } else if (1964 < anoDeNascimento && anoDeNascimento <= 1980) {
        return "Geração X";
    } else if (1980 < anoDeNascimento && anoDeNascimento <= 1996) {
        return "Millennials";
    } else {
        return "Geração Z";
    }
    return resultado;
}

var x = 1995;

console.log("Tarefa " + numeroDaTarefa + ": Nascidos em " + x + " são " + determinarGeracao(x));
document.write("Tarefa " + numeroDaTarefa + ": Nascidos em " + x + " são " + determinarGeracao(x));