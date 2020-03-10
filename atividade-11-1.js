// Utilize o módulo https://www.npmjs.com/package/notas-universitarias-util
// Para fazer um programa que calcule a média universataria. 
// Peça entradas para o usuário de notas e no final calcule a média usando o módulo acima. 
// Caso ele seja aprovado imprimir aprovado se não reprovado.
var user = require('readline-sync')
var medias = require('notas-universitarias-util')

 
const notas = {
  g1: 1,
  g2: 1,
  g3: 1
}
 
console.log(notas)
console.log(medias.default(4).aprovado(notas))