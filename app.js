const inputQuantidade = document.getElementById("quantidade");
const inputDe = document.getElementById("de");
const inputAte = document.getElementById("ate");
const botaoSortear = document.getElementById("btn-sortear");
const botaoReiniciar = document.getElementById("btn-reiniciar");
const resultado = document.getElementById("resultado").querySelector("label");

const mensageDoSorteio = "Números sorteados: ";

function sortear() {
    const quantidade = parseInt(inputQuantidade.value);
    const de = parseInt(inputDe.value);
    const ate = parseInt(inputAte.value);

    if (de > ate || quantidade > ate - de + 1) {
        alert("Out of Ranges!");
        return 0;
    }

    const numerosSorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        do {
            numero = obterNumeroAleatorio(de, ate);
        } while (numerosSorteados.includes(numero));

        numerosSorteados.push(numero);
    }

    numerosSorteados.sort((a, b) => a - b);
    resultado.innerHTML = "Números sorteados: " + numerosSorteados;
    if (botaoReiniciar.getAttribute("class") == "container__botao-desabilitado") alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max + 1 - min) + min);
}

function reiniciar() {
    if (botaoReiniciar.getAttribute("class") == "container__botao") {
        inputQuantidade.value = "";
        inputDe.value = "";
        inputAte.value = "";

        resultado.innerHTML = mensageDoSorteio + "nenhum até agora";
        alterarStatusBotao();
    }
}

function alterarStatusBotao() {
    if (botaoReiniciar.classList.contains("container__botao")) {
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
    } else {
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    }
}