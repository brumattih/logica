// Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado 
// utilizando a função criada.
var user = require('readline-sync')

function calculaDias (ano, mes, dia) {
    return (ano * 365) + (mes * 30) + dia
}

var anos = user.questionInt("Quantos anos você tem? ")
var meses = user.questionInt("E quantos meses? ")
var dias = user.questionInt("E quantos dias? ")
console.log(`Você tem ${calculaDias(anos, meses, dias)} dias de vida`)