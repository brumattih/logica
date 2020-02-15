
// Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm). Calcular e imprimir o seguinte: 
// − Se o número de lados for igual a 3 escrever TRIANGULO e o valor da área 
// − Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área. 
// − Se o número de lados for igual a 5 escrever PENTÁGONO. 

var user = require('readline-sync')

var polig = user.question("Digite o número de lados de um polígono: ")

if (polig == 3 || polig == 4 || polig == 5) {
    var lados = user.question("Agora digite a medida de seus lados (em cm): ")

    if (polig == 3) {
        console.log(`TRIÂGULO - Perímetro: ${lados * 3}`)
    } else if (polig == 4) {
        console.log(`QUADRADO - Área: ${lados * lados}cm`)
    } else {
        console.log(`PENTÁGONO`)
    }

} else {
    console.log("Foi digitado um valor inválido. Um polígono deve ter 3, 4 ou 5 lados")
}