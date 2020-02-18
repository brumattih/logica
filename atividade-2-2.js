// Faça um programa onde o usuário irá escolher se quer Converter graus Celsius para Fahrenheit 
// ou Fahrenheit para Celsius. 

var user = require('readline-sync')
var graus = user.questionInt("Digite 1 para converter Graus Celsius para Fahrenheit ou 2 para converter Fahrenheit para Celsius: ")


if (graus == 1) {
        var grauCelsius = user.question("Digite o número de graus Celsius que deseja converter para Farenheit: ")
        console.log(`${grauCelsius} graus Celsius é igual a ${(grauCelsius * 9/5) + 32} graus Farenheit`)
} else if (graus == 2) {
        var grauFarenheit = user.question("Digite o número de graus Farenheit que deseja converter para Celsius: ")
    console.log(`${grauFarenheit} graus Farenheit é igual a ${(grauFarenheit - 32) * 5/9} graus Celsius`)
} else {
    console.log(`Valor inválido. É necessário digitar 1 ou 2.`)
}