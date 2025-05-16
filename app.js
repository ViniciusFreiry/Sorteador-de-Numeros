const botaoSortear = document.getElementById("btn-sortear");
const botaoReiniciar = document.getElementById("btn-reiniciar");
const resultado = document.getElementById("resultado").querySelector("label");

const mensageDoSorteio = "Números sorteados: ";


function sortear() {
    const inputQuantidade = parseInt(document.getElementById("quantidade").value);
    const inputDe = parseInt(document.getElementById("de").value);
    const inputAte = parseInt(document.getElementById("ate").value);

    const numerosSorteados = [];
    let numero;

    for (let i = 0; i < inputQuantidade; i++) {
        numero = obterNumeroAleatorio(inputDe, inputAte);
        numerosSorteados.push(numero);
    }

    resultado.innerHTML = "Números sorteados: " + numerosSorteados;
    botaoReiniciar.setAttribute("class", "container__botao");
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max + 1 - min) + min);
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";

    resultado.innerHTML = mensageDoSorteio + "nenhum até agora";
    botaoReiniciar.setAttribute("class", "container__botao-desabilitado");
}