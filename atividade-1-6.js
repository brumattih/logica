// Tendo como entrada a altura e o sexo codificado da seguinte forma: 
// 	Valor 1 para feminino
// 	 Valor 2 para masculino
// de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes 
// Fórmulas: 
// - para homens: (72.7 * Altura) – 58 
// - para mulheres: (62.1 * Altura) – 44.7 


var user = require('readline-sync')

var sexo = user.question("Digite seu sexo. 1 para feminino, 2 para masculino: ")

if (sexo == 1 || sexo == 2) {
    var altura = user.question("Agora digite sua altura: ")

    if (sexo == 1) {
        console.log(`Seu peso ideal é de: ${(62.1 * altura) - 44.7} KG`)
    }
    else {        
        console.log(`Seu peso ideal é de: ${(72.7 * altura) - 58} KG`)
    }

} else {
    console.log ("Foi digitado um valor inválido. É necessário digitar 1 para feminino ou 2 para masculino.")
}