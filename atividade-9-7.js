// Faça uma função que recebe um número e devolve seu valor absoluto. 
// No final peça um número para o usuário e exiba o valor absoluto.
var user = require('readline-sync')

function valorAbsoluto(x) {
    if (x < 0) {
        return x * -1
    } else {
        return x
    }
}

var numero = user.questionInt("Digite um número: ")
console.log(`O valor absoluto do número digitado é: ${valorAbsoluto(numero)}`)