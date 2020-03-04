// Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função. 
// Escreva o resultado da função na tela dizendo qual menor número.
var user = require('readline-sync')

function menorNumero(x, y) {
    if (x < y) {
        return x
    } else {
        return y
    }
}

var numero1 = user.questionInt("Digite um número: ")
var numero2 = user.questionInt("Digite mais um número: ")
console.log(`O menor número é: ${menorNumero(numero1, numero2)}`)