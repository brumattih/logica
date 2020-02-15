// Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos). 

var user = require('readline-sync')

var nome = user.question("Digite seu nome: ")
var sexo = user.question("Dige seu Sexo (F ou M): ")
var estado = user.question("Digite seu estado civil: ")

if ((sexo == 'F' || sexo == 'f') && (estado == 'casada' || estado == 'CASADADA')) {
    var tempoCasamento = user.question("Digite o o tempo de casada (anos): ")
}