// Criar um módulo que calcule a média de uma coleção de números. 
// Para isso crie um arquivo chamado calcula-media.js. 
// No módulo exporte uma função media(arr) que recebe como argumento um array de números. 
// A função deve iterar por esses números e retornar sua média. 
// Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3 números, 
// utilize o módulo criado para calcular a média e no final imprima o resultado para o usuário.
var user = require('readline-sync')
var modulo = require('./calcula-media.js')

var guardaNumero = []

for (var i = 0; i < 3; i++) {
    var n = user.questionInt("Digite um número: ")
    guardaNumero.push(n)
}

console.log(modulo.calculaMedia(guardaNumero))
