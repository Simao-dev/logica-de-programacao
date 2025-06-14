let numeroSecreto = gerarNumeroAleatorio();
exibirMensagemInicial();
let tentativas = 1;

function exibirTestoNaTela (tag, texto){
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    
}

function exibirMensagemInicial(){
    exibirTestoNaTela('h1', 'Jogo do numero secreto');
    exibirTestoNaTela('p', 'Escolha um numero entre 1 e 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTestoNaTela('h1', 'Acertou!');
        exibirTestoNaTela('p', 'Você descobriu o número segreto!');
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} `;
        exibirTestoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTestoNaTela('p', `O número é menor que ${chute}`);
        }else {
            exibirTestoNaTela('p', `O número é maior que ${chute}`);
        }
        tentativas ++;
        limpaCampo()
    }
}

function gerarNumeroAleatorio () {
    
    return parseInt(Math.random() * 10 + 1);
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto =  gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

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



/* function calculaImc (peso,altura){
    return(peso/(altura*altura))
 }
 
let imc = calculaImc(70,1.70)

console.log(imc)*/

/*function calculoDolar(real){
    return(4.80*real)
}

let valor = calculoDolar(5)

console.log(valor)


function fatorial(numero){

    let numeroInicial = numero
    for (i = numeroInicial - 1; i > 1; i --) {
        numero = numero * i

    }
    
    return(numero)
    
}


   console.log(fatorial(5))

function perimetrometro(altura, largura){
        
    const perimetro = 2

    return(perimetro * (largura + altura))


}

   let dados = perimetrometro (170,150)

   console.log(dados) 


function areaDoCirculo(raio){
    const perimetro = 2
    const pi = 3.14
    resultado = perimetro * pi * raio 
    return(resultado)
}

let dados = areaDoCirculo(9)

console.log(dados)  


function tabuada(numero){
    let resultado = 0
    for (i = 1; i <= 10; i ++) {
        resultado = numero * i
        console.log(`o resultado de ${numero} x ${i} = ${resultado}`)
    }

}
tabuada(5)*/