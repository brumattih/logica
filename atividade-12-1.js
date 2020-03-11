// Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
// Para isso : 
// Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e inicialize 
// as propriedades com estes valores. 
// Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e cor. 
// Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor. 
// Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor
const user = require('readline-sync')

class Carro {
    constructor(nome, modelo, cor) {
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    }
}

const carro1Nome = user.question("Digite o nome do primeiro carro: ")
const carro1Modelo = user.question("Digite o modelo do primeiro carro: ")
const carro1Cor = user.question("Digite a cor do primeiro carro: ")

const carro2Nome = user.question("Digite o nome do segundo carro: ")
const carro2Modelo = user.question("Digite o modelo do segundo carro: ")
const carro2Cor = user.question("Digite a cor do segundo carro: ")

const carro1 = new Carro(carro1Nome, carro1Modelo, carro1Cor)
const carro2 = new Carro(carro2Nome, carro2Modelo, carro2Cor)

if (carro1.nome === carro2.nome && carro1.modelo === carro2.modelo) {
    console.log(`Os carros são iguais (mesmo nome e mesmo modelo!)`)
} else {
    console.log(`Os carros NÃO são iguais (nome e/ou modelo diferentes)`)
}