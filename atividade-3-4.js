// Faça um programa que recebe um número e imprima todos os números pares de 0 até o número inserido.
// Ex: usuário inseriu 8
// O programa imprime
// 0
// 2
// 4
// 6
// 8
var user = require('readline-sync')
var numero = user.questionInt("Digite um número e descubra todos os números pares abaixo dele: ")

while (numero >= 0) {

    if (numero % 2 == 0) {
        console.log(numero)
    }
    numero = numero - 1
}
