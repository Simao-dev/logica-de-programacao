let chute = document.querySelector("#send")
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo  + 1);
let tentativa = 1;
var title = document.querySelector("#resultado")

chute.addEventListener("click", function(e){
    
    e.preventDefault();

    let name = document.querySelector("#dados");

    let value = name.value;

});

while ( value != numeroSecreto){
    
    if(value == numeroSecreto){
        break
    }else {
        if (value > numeroSecreto){
            title.innerHTML = `E menor que ${value}`
        }else {
            title.innerHTML = `E maior que ${value}`
        }
        tentativa++
    }
}

let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
title.innerHTML = `Você descobriu o número secreto! ${numeroSecreto} com ${tentativa} ${palavraTentativa}`