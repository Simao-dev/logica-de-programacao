let numeroSecreto = gerarNumeroAleatorio();

function exibirTestoNaTela (tag, texto){
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTestoNaTela('h1', 'Jogo do numero secreto');
exibirTestoNaTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute() {
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio () {
    
    return parseInt(Math.random() * 10 + 1);
}