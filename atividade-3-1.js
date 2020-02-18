// Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP” de acordo com o número inserido.
// EX: usuário inseriu 3
// O programa imprime:
//  BIP BIP
//  BIP BIP
//  BIP BIP


var user = require('readline-sync')
var numBIP = user.questionInt("Digite o número de BIP BIP que você deseja receber: ")
while (numBIP > 0) {
    console.log("BIP BIP")
    numBIP = numBIP - 1
}