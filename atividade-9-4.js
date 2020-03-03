// Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a tabuada de 1 até N. 
// Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// ...
// N x N = N2
// Após isso solicite o usuário um número e forneça o argumento do usuário para a função.
var user = require('readline-sync')

function calculaTabuada(N) {

    for (let index = 1; index < N; index++) {
        console.log (index * N)
    }
 return 
}

var numero = user.questionInt("Digite um número: ")
console.log(calculaTabuada(numero))
