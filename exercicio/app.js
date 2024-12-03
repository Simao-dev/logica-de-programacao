/*let contador = 0;

while (contador < 10) {
    contador++
    alert(contador)
}*/

/*let contator = 11;

while (contator != 0) {
    contator --
    alert(contator)
}*/
/*let numero = prompt('Digite um numero de 1 a 60')

while (numero != 0) {
    numero --
    console.log(numero)
}*/

/*let numero = prompt('digite um numero de 1 a 60')
let neutro = 0

while(neutro != numero){
    neutro ++
    console.log(neutro)
}*/

// Exercicio da aula 3

// Crie um programa que utilize o console.log para exibir uma mensagem de boas vindas
let boasVindas = 'Boas vindas'
console.log(boasVindas)
//crie uma variavel chamada nome e atribua a ela o seu nome. Em seguida, ultilize o console.log
let nome = 'Pedro Simão'

console.log(`Ola ${nome}`)

//alert(`Ola ${nome}`)

//let linguagem = prompt('Qual a linguagem que você mais gosta')
//console.log(linguagem)

let valor1 = 30
let valor2 = 20
let resultado = valor1 - valor2
console.log(`A diferença de ${valor1} e ${valor2} é igual ${resultado}`)

/*let idade = prompt('Informe sua idade')

if( idade >= 18){
    console.log(`Parabéns você pode tirar sua cnh`)
}else {
    console.log('Infelizmente você ainda não pode tirar sua cnh')
}*/

let numero = prompt('Informe um numero')

if(numero < 0){
    console.log(`${numero} é negativo`)
}else{
    if(numero == 0){
        console.log('o numero informado é zero')
    }else {
        console.log(`${numero} é positivo`)
    }
}