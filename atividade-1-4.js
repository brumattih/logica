// As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
// e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, 
// calcule e escreva o valor total da compra


var user = require('readline-sync')

var maca = user.question("Digite o número de maças compradas: ")

if (maca < 12) {
    console.log(`O valor total da compra é de: R$${maca * 0.30} REAIS`)
} else {
    console.log(`O valor total da compra é de : R$${maca * 0.25} REAIS`)
}
