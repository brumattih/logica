// Adicione no programa anterior após a impressão dos dados que ele salve o objeto carro em formato JSON. 
// Utilize o JSON.stringify para transformar o objeto em string 
// e após isso utilize os métodos da biblioteca ‘fs’ para salvar o arquivo.
// Salve o json como ‘carro.json’
var user = require('readline-sync')
var fs = require('fs')

var carro = new Object()

carro.cor = user.question("Digite a cor do carro: ")
carro.modelo = user.question("Digite o modelo do carro: ")
carro.marca = user.question("Digite a marca do carro: ")

var carroToString = JSON.stringify(carro)

var caminhoDoArquivo = 'data/carro.json'
fs.writeFileSync(caminhoDoArquivo, carroToString)