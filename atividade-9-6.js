// Escreva uma função que receba dois números o primeiro será a base e o segundo a potência e no final 
// a função retorna a base elevada pela potência.
// Faça um programa que peça ao usuário a base e a potência e forneça para a função, no final imprima o resultado. 
// OBS: O algoritmo só precisa saber lidar com números inteiros.
var user = require('readline-sync')

function calculaPotencia(base, potencia) {
    return base ** potencia
}

var valorBase = user.questionInt("Digite o valor da base: ")
var valorPotencia = user.questionInt("Digite o valor da potência: ")
console.log(calculaPotencia(valorBase, valorPotencia))