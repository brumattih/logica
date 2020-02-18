// Faça um programa que pergunte ao usuário escolher duas opções A e B. 
// A encerra o programa, B é pra fazer uma soma.
// Se o usuário inserir A o programa fecha
// Se o usuário inserir B o programa vai realizar uma operação de soma, 
// solicitando dois números inteiros (n1 e n2) onde após o usuário inserir 
// o segundo número o algoritmo deve apresentar a soma e também pergunta se quer realizar outro cálculo.
// Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer que não entendeu o comando 
// e solicitar novamente para inserir A ou B
var user = require('readline-sync')
var letra = user.question("Escolha entre A ou B: ")

if (letra == 'B') {
    var n1 = user.questionInt("Insira um número inteiro: ")
    var n2 = user.questionInt("Insira outro número inteiro e te direi a soma entre os dois números: ")
    console.log(n1 + n2)

    var novoCalculo = user.question("Deseja realizar outro cálculo? Digite 'S' para SIM e 'N' para NÃO: ")
    while (novoCalculo == 'S') {
        var n1 = user.questionInt("Insira um número inteiro: ")
        var n2 = user.questionInt("Insira outro número inteiro e te direi a soma entre os dois números: ")
        console.log(n1 + n2)
        var novoCalculo = user.question("Deseja realizar outro cálculo? Digite 'S' para SIM e 'N' para NÃO: ")
    }
}

while (letra != 'A' && letra != 'B') {
    letra = user.question("Não entendi o comando! Escolha entre A ou B: ")

    if (letra == 'B') {
        var n1 = user.questionInt("Insira um número inteiro: ")
        var n2 = user.questionInt("Insira outro número inteiro e te direi a soma entre os dois números: ")
        console.log(`A soma de ${n1} + ${n2} é: ${n1 + n2}`)
        var novoCalculo = user.question("Deseja realizar outro cálculo? Digite 'S' para SIM e 'N' para NÃO: ")
        while (novoCalculo == 'S') {
            var n1 = user.questionInt("Insira um número inteiro: ")
            var n2 = user.questionInt("Insira outro número inteiro e te direi a soma entre os dois números: ")
            console.log(n1 + n2)
            var novoCalculo = user.question("Deseja realizar outro cálculo? Digite 'S' para SIM e 'N' para NÃO: ")
        }
    }

}

