// Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no 
// final exiba o preço de cada produto junto com o valor total. 
// após inserir todos os produtos o programa deve pedir o valor a ser pago, 
// caso o valor passe do da compra exibir o troco, 
// se o valor for menor informar que a compra vai ser cancelada. 
var user = require('readline-sync')

var produtos = []

var numProduto = user.questionInt("Digite o número de produtos a ser inserido: ")

while (numProduto > 0) {
    var valorProduto = user.questionInt(`Digite o valor do Produto ${numProduto}: `)
    produtos.push(valorProduto)
    numProduto--
}

n = produtos.length -1
while (n > 0) {
    console.log(`Produto ${n} - ${produtos[n]}`)
    n--
}

