// Faça um programa que receba um número via teclado e verifique se este número é par ou ímpar.

var user = require('readline-sync')

var numero = user.question("Digite um número e descubra se ele é par ou ímpar (UAU!): ")
if (numero % 2 === 0){
    console.log("Este número é par!")
} else {
    console.log("Este número é ímpar!")
}