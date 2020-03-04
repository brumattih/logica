// Crie um programa que receba 3 entrada do usuário. 
// A cor, o modelo e a marca, crie um objeto Carro e atribua as entradas do usuário neste objeto.
// No final o programa deve imprimir as informações do carro.
// Utilize a criação de objetos para resolver este problema
var user = require('readline-sync')

var carro = new Object()

carro.cor = user.question("Digite a cor do carro: ")
carro.modelo = user.question("Digite o modelo do carro: ")
carro.marca = user.question("Digite a marca do carro: ")

console.log(carro)