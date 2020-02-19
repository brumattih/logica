// Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos números fornecidos.

var user = require('readline-sync')
var n = 1
var total = 0

while (n <= 15) {
    var numero = user.questionInt("Digite quinze números e descubra a média entre eles: ")
    n = n + 1
    total = total + numero
    
}


console.log(`A média dos números é: ${total/15}`)