// Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, 
// se mais de um possuir maior idade apresentar o nome de todos os que possuem maior idade.
// Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade e 
// inicialize essas variáveis nas propriedades do objeto.
// Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade. 
// Crie o objeto do aluno e adicione em um array.
// Repita esse passo para os outros alunos. 
// Ao final o algoritmo deve iterar pelo array de alunos  e descobrir quais são os alunos 
// com maior idade e imprimir seus nomes.
const user = require('readline-sync')

const listaAluno = []

class Aluno {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const aluno1Nome = user.question("Digite o nome do primeiro aluno: ")
const aluno1Idade = user.questionInt("Digite a idade do primeiro aluno: ")
const aluno1 = new Aluno(aluno1Nome, aluno1Idade)
listaAluno.push(aluno1)

const aluno2Nome = user.question("Digite o nome do segundo aluno: ")
const aluno2Idade = user.questionInt("Digite a idade do segundo aluno: ")
const aluno2 = new Aluno(aluno2Nome, aluno2Idade)
listaAluno.push(aluno2)

const aluno3Nome = user.question("Digite o nome do terceiro aluno: ")
const aluno3Idade = user.questionInt("Digite a idade do terceiro aluno: ")
const aluno3 = new Aluno(aluno3Nome, aluno3Idade)
listaAluno.push(aluno3)

const calculaMaior = Math.max(listaAluno[0].idade, listaAluno[1].idade, listaAluno[2].idade)

console.log("O(s) aluno(s) com maior idade: ")
if (calculaMaior == listaAluno[0].idade) {
    console.log(listaAluno[0].nome)
}
if (calculaMaior == listaAluno[1].idade) {
    console.log(listaAluno[1].nome)
}
if (calculaMaior == listaAluno[2].idade) {
    console.log(listaAluno[2].nome)
}