// Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
// EX: usuário informou BANANA
// Algoritmo imprime:
// ANANAB

var user = require('readline-sync')
var palavra = user.question("Digite uma palavra e mostraemos a mesma invertida: ")
var letras = palavra.split("")
var invertido = ""
var i = letras.length - 1

while (i >= 0) {
    invertido += letras[i]
    i = i - 1
}
console.log(invertido)