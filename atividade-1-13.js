// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.

var user = require('readline-sync')

var numero = user.question("Digite um número (positivo ou negativo): ")

if (numero < 0) {
    console.log(`O triplo de ${numero} é ${numero*3}`)
} else if (numero > 0) {
    console.log(`O dobro de ${numero} é ${numero*2}`)
} else {
    console.log("O dobro de 0 é... 0")
}