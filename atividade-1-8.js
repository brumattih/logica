// Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é Equilátero, Isósceles ou Escaleno. 
// 	Sendo que: 
// − Triângulo Equilátero: possui os 3 lados iguais. 
// − Triângulo Isóscele: possui 2 lados iguais. 
// − Triângulo Escaleno: possui 3 lados diferentes. 

var user = require('readline-sync')

console.log("A seguir, você deverá digitar a medida de cada lado de um triângulo.")
var lado1 = user.question("Digite a medida do primeiro lado do triângulo: ")
var lado2 = user.question("Digite a medida do segundo lado do triângulo: ")
var lado3 = user.question("Digite a medida do primeiro lado do triângulo: ")

if (lado1 == lado2 && lado2 == lado3) {
    console.log("Triângulo Equilátero: possui os 3 lados iguais.")    
}
else if (lado1 != lado2 && lado2 != lado3) {
    console.log("Triângulo Escaleno: possui 3 lados diferentes.")
}
else {
    console.log("Triângulo Isóscele: possui 2 lados iguais. ")
}

