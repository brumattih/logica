// Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e a soma dos pares
// EX: valores fornecidos 1,2,3,4,5
// Impares -> 1 * 3  * 5 = 15
// Pares -> 2 = 4 = 6
// O programa imprime : 
// Produtos dos impares : 15
// Soma dos pares : 6



var user = require('readline-sync')
var n = 1
var somaPar = 0
var produtoImpar = 1

while (n <= 5) {
    var numero = user.questionInt("Digite cinco números: ")
    if (numero % 2 == 0) {
        somaPar = somaPar + numero
    } else {
        produtoImpar = produtoImpar * numero
    }
    n = n + 1
}

console.log(`Produto dos ímpares: ${produtoImpar}`)
console.log(`Soma dos pares: ${somaPar}`)