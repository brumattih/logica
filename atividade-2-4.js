// Uma empresa abriu uma linha de crédito para os funcionários.
//  O valor da prestação não pode ultrapassar 30% do salário. 

// Faça um programa que receba o salário, o valor do empréstimo 
// e o número de prestações e informe se o empréstimo pode ser concedido. 
// Nenhum dos valores informados pode ser zero ou negativo.

var user = require('readline-sync')
var salario = user.questionInt("Digite o valor de seu salário: R$")
var emprestimo = user.questionInt("Digita o valor do empréstimo: R$")
var prestacao = user.questionInt("Digite o número de prestações: ")

if (salario > 0 && emprestimo > 0 && prestacao > 0) {
    if ((emprestimo / prestacao) < (salario * 0.30)) {
        console.log("O empreéstimo pode ser concedido!")
    } else {
        console.log("O empréstimo não pode ser concedido, o valor da prestação ultrapassa 30% do salário.")
    }


} else {
    console.log("O valor não pode ser zero ou negativo!")
}

