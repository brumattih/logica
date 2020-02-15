// Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. 
// Sendo que: 
// − Triângulo Retângulo: possui um ângulo reto. (igual a 90º) 
// − Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º) 
// − Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)

var user = require('readline-sync')

console.log("A seguir, você deverá digitar a medida de cada ângulo de um triângulo.")

var ang1 = user.question("Digite a medida do primeiro ângulo do triângulo: ")
var ang2 = user.question("Digite a medida do segundo ângulo do triângulo: ")
var ang3 = user.question("Digite a medida do primeiro ângulo do triângulo: ")

if (ang1 < 90 && ang2 < 90 && ang3 < 90) {
    console.log("Triângulo Acutângulo - possui três ângulos agudos (menores que 90º)")
  
} else if (ang1 == 90 || ang2 == 90 || ang3 ==  90) {
    console.log("Triângulo Retângulo - possui um ângulo reto. (igual a 90º)")
} else {
    console.log("Triângulo Obtusângulo - possui um ângulo obtuso (maior que 90º)")
}
