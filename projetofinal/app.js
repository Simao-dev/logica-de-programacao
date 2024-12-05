let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativa = 1;
let title = document.querySelector("#resultado");
let chute = document.querySelector("#send");

chute.addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.querySelector("#dados");
    const value = parseInt(name.value); // Certifique-se que o valor seja um número

    if (value === numeroSecreto) {
        title.innerHTML = `Você descobriu o número secreto! ${numeroSecreto} em ${tentativa} ${tentativa > 1 ? "tentativas" : "tentativa"}`;
    } else {
        tentativa++;
        if (value > numeroSecreto) {
            title.innerHTML = `O número secreto é menor que ${value}`;
        } else {
            title.innerHTML = `O número secreto é maior que ${value}`;
        }
    }
});