// Escreva um programa para ler o ano de nascimento de uma pessoa e 
// escrever uma mensagem que diga se ela poderá ou não votar este ano 
// (não é necessário considerar o mês em que ela nasceu).

var user = require('readline-sync')

var anoNasc = user.question("Digite seu ano de nascimento: ")
var idade = 2020 - anoNasc

if (idade >= 16) {
    console.log("Você pode votar!")
} else {
    console.log("Você não pode votar!")
}

console.log("Esse é meu primeiro pull request, apenas para um teste!")