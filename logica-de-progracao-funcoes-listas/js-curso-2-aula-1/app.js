let numeroSecreto = gerarNumeroAleatorio();

function exibirTestoNaTela (tag, texto){
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTestoNaTela('h1', 'Jogo do numero secreto');
exibirTestoNaTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute() {
    let numero = document.querySelector('input').value;
    console.log(numeroSecreto == numero);
}

function gerarNumeroAleatorio () {
    
    return parseInt(Math.random() * 10 + 1);
}



function saudacao() {
  return("Olá, mundo");
}

console.log (saudacao())


function comprimentar (luiza) {
    return(`ola ${luiza}`);
}

console.log(comprimentar())