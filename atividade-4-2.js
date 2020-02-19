// Escreva um programa que pedirá para o usuário dois números entre 1 e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre imprimindo o número na tela do usuário. 
// Entretanto, caso o número seja divisível por 7, o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível por 5, o programa deve imprimir “Pong”. 
// Caso o número seja divisível por 7 e 5, o programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez precisem fazer uso do recurso “user.questionInt()” 
// que transforma o conteúdo de um input do usuário de string para inteiro.

var user = require('readline-sync')

num1 = 0
num2 = 0
var num1 = user.questionInt("Digite o primeiro número entre 1 e 100: ")
var num2 = user.questionInt("Digite o segundo número entre 1 e 100: ")

while (num1 < num2) {
    if (num1 % 5 == 0 && num1 % 7 == 0) {
        console.log("Ping Pong")
        num1++
    } else if (num1 % 7 == 0) {
        console.log("Ping")
        num1++
    } else if (num1 % 5 == 0) {
        console.log("Pong")
        num1++
    } else {
        console.log(num1)
        num1++
    }
}

while (num2 < num1) {
    if (num2 % 5 == 0 && num2 % 7 == 0) {
        console.log("Ping Pong")
        num2++
    } else if (num2 % 7 == 0) {
        console.log("Ping")
        num2++
    } else if (num2 % 5 == 0) {
        console.log("Pong")
        num2++
    } else {
        console.log(num2)
        num2++
    }
}