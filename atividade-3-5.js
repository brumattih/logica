// Faça um programa que calcule a potência (potenciação) de um número. 
// Para isso ele deve receber dois números de entrada: o primeiro número é a base da potência, 
// o segundo número será a potência.

// EX: usuário inseriu 2 para base e 4 para potência.
// O programa imprime : 
// 16
// Lembrando: 2 elevado a 4 = 2*2*2*2

var user = require('readline-sync')
var numero = user.questionInt("Digite um número para ser a base de uma potência: ")
var potencia = user.questionInt("Agora digite um número para ser a potência: ")
var resultado = 0

while (numero > 0) {
    resultado = resultado + potencia
    numero = numero - 1
}
console.log(`O resultado é: ${resultado}`)

