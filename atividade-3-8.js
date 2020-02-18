// Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em uma linha.
// EX: usuário informou MAÇÃ
// O algoritmo imprime: 
// M
// A
// Ç
// Ã
var user = require('readline-sync')
var palavra = user.question("Digite uma palavra: ")
var tamanho = palavra.length
var n = 0

while (n <= tamanho) {
    console.log(palavra.charAt(n))
    n = n + 1
}