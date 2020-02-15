// Faça um programa que receba três notas, calcule e mostre a média aritmética entre elas, caso a média aritmética seja:
// 	Media maior ou igual a 7 imprimir : 
// 		 ALUNO APROVADO 
// Media menor que 7 imprimir : 
// 		 ALUNO REPROVADO
var nota1 = 6
var nota2 =  6
var nota3 = 6
var media = ((nota1 + nota2 + nota3) / 3)

if (media >= 7) {
    console.log(`A média das provas foi de ${media}. ALUNO APROVADO!`)    
}
else {
    console.log(`A média das provas foi de ${media}. ALUNO REPROVADO!`)    
}