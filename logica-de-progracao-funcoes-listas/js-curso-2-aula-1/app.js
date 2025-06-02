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

/* EXERCICIOS
//funcão para comprimentar //
function ola(){
    return('ola mundo')
}

let comprimentar = ola()

console.log (comprimentar)

// funão que recebe um nome como paremetro e exibe ola,[nome] //

function saudacao(nome){
    return(`ola ${nome}`)
}
 let pessoa = saudacao('luiza')

 console.log(pessoa)


 // função que recebe um numero como parametro e retorna o dobro dele //

 function dobro(n){
    return(n*2)
 }

 let resultado = dobro(2)

 console.log(resultado)

 //função que recebe 3 numeros como parametros e retorna a media deles //


 function media(n1,n2,n3) {
    return((n1+n2+n3) /3)
 }
 
 let funmedia = media(2,2,2)

 console.log(funmedia)

 //função que recebe dois numeros como parametro e retorna o maior deles //

 function maior(m1,m2){
    if (m1 == m2) {
        return `${m1} é igual a ${m2}`
    } else if (m1 > m2){
        return `${m1} é maior que ${m2}`
    } else {
        return `${m2} é maior que ${m1}`
    }
 }

 let omaior = maior(2,1)
 console.log(omaior)

 // função que recebe um numero como paremetro e retorna o resultado da multiplicação desse numero por ele mesmo //

 function mult(numero1){
    return(numero1 * numero1)
 }

 let multiplica = mult(10)

 console.log (multiplica) */