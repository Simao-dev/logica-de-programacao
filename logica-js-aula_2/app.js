alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual a o numero secreto o codigo vai se repetir
//while cria um loop ate que as confições exigidas sejam atendidas

while (chute != numeroSecreto ) {
    chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break
    } else {

        if(chute > numeroSecreto) {
            alert(` Você errou o numero secreto e menor que ${chute}`);
        }else {
            alert(`Voce errou o numero secreto e maior que ${chute}`);
        }

        //atribui mais 1 a variavel tentativas
        tentativas ++;
    }

}

let palavraTentativa = tentativas > 1 ?  'Tentativas' : 'Tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*if (tentativas > 1){
   
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/
