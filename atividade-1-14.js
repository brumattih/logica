// Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.
var user = require('readline-sync')

console.log("Digite dois números inteiros e descubra se o primeiro é divisível pelo segundo.")
var numero1 = user.question("Digite o primeiro número: ")
var numero2 = user.question("Digite o segundo número: ")

if (numero1 % numero2 == 0) {
    console.log(`Sim, ${numero1} é divísivel por ${numero2}`)    
}
else {
    console.log(`${numero1} não é divísivel por ${numero2}`) 
}