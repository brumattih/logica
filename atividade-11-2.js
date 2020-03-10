// Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc
const user = require('readline-sync')
const FasamImc = require('fasam-imc-calc');

var peso = user.questionInt("Digite o seu peso: ")
var altura = user.questionFloat("Digite a sua altura: ")

const imc = new FasamImc(peso, altura); // peso, altura
 
console.log(`IMC: ${imc.calc()}`);


