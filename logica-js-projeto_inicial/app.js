/*let informacaoUsuario = window.prompt('Digite um numero entre 1 e 40')
let numeroSecreto = 40;

if ( informacaoUsuario == numeroSecreto) {
    window.alert(`você acertou o numero serecreto ${numeroSecreto}`)
} else{
    window.alert('você errou')
}
*/
let quantidadeMilhas = 4000;
let PorcetagemDesconto = 0;

if (quantidadeMilhas >= 30000){
    PorcetagemDesconto = PorcetagemDesconto + 20;
}

else {
    if(quantidadeMilhas > 5000){
        PorcetagemDesconto = PorcetagemDesconto + 10;
    }
}


console.log(PorcetagemDesconto)
