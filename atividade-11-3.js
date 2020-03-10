// Faça um algoritmo que receba um número e diga se ele é par ou primo
// Utilize o pacote :  https://www.npmjs.com/package/canivetesuiconode

const user = require('readline-sync')
const calculo = require('canivetesuiconode')

const num = user.question("Digite um número: ")
console.log(calculo.NumeroPar(num))
console.log(calculo.NumeroPrimo(num))
