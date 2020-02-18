// Criar um algoritmo que realize a multiplicação de dois números maiores que zero 
// SEM usar o operador de multiplicação (*)

var user = require('readline-sync')
var numero1 = user.questionInt("Digite o primeiro número: ")
var numero2 = user.questionInt("Digite o segundo número: ")
var soma = 0
while (numero1 > 0) {
    soma = soma + numero2
    numero1 = numero1 - 1
}
console.log(`O resultado da múltiplacação entre ${numero1} e ${numero2} é: ${soma}`)