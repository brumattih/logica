// Faça um algoritmo que receba um número e imprima todos seus divisores.
// EX : usuário informou 21
// O algoritmo imprime :
// 1
// 3
// 7
// 21
// DICA: Você pode precisar usar a operação de módulo (a%b)

var user = require('readline-sync')
var numero = user.questionInt("Digite um número e descubra todos os seus divisores: ")
var divisores = 0
while (divisores <= numero) {

    if (numero % divisores == 0) {
        console.log(divisores)
    }
    divisores = divisores + 1
}
