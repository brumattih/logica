// Escreva um programa para ler 3 valores inteiros (considere que  não serão lidos valores iguais) e escrevê-los em ordem crescente. 

var user = require('readline-sync')

var num1 = user.questionInt("Digite o primeiro número inteiro: ")
var num2 = user.questionInt("Digite o segundo número inteiro: ")
var num3 = user.questionInt("Digite o terceiro número inteiro: ")

if (num1 < num2 && num1 < num3) {
    if (num2 < num3) {
        console.log(num1, num2, num3)
    } else {
        console.log(num1, num3, num2)
    }
}

if (num2 < num1 && num2 < num3) {
    if (num1 < num3) {
        console.log(num2, num1, num3)
    } else {
        console.log(num2, num3, num1)
    }
}

if (num3 < num1 && num3 < num2) {
    if (num1 < num2) {
        console.log(num3, num1, num2)
    } else {
        console.log(num3, num2, num1)
    }
}
