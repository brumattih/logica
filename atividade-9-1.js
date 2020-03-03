// Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.pi.R3).
// Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.
var user = require('readline-sync')
var pi = 3.14159

function volumeRaio(raio) {

    return 4 * 3, 14 * (raio ** 3) / 3

}

var valorRaio = user.questionInt("Digite o valor do raio de uma esfera: ")

console.log(`O volume dessa esfera é de: ${volumeRaio(valorRaio)}`)

