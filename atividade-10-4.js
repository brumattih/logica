// Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir, 
// caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro para 
// que não salve 1 objeto carro e sim uma coleção de carros (utilizando arrays, 
// em vez de serializar/deserializar o objeto será o array que possui os carros). 

// Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou adicionar, 
// caso o usuário escolha exibir deve ser exibido todos os carros cadastrados.
var user = require('readline-sync')
var fs = require('fs')


var start = user.question("Você deseja adicionar ou exibir? A para adicionar - E para exibir: ")

if (start == 'A') {
    var carro = new Object()

    carro.cor = user.question("Digite a cor do carro: ")
    carro.modelo = user.question("Digite o modelo do carro: ")
    carro.marca = user.question("Digite a marca do carro: ")

    var carroToString = JSON.stringify(carro)

    var caminhoDoArquivo = 'data/carros.json'
    fs.writeFileSync(caminhoDoArquivo, carroToString)

} else if (start == 'E') {
    var carroToString = fs.readFileSync('data/carros.json')
    var carro = JSON.parse(carroToString)
    console.log(carro)
}






