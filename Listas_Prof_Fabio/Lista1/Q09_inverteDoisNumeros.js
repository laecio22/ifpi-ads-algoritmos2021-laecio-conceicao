//Programa que recebe dois números  e os mostra na ordem inversa
const prompt = require('prompt-sync')()

//Entrada
let numero1 = Number(prompt('Digite o primeiro número '))
let numero2 = Number(prompt('Digite o segundo número '))
const numeroAuxiliar = numero1

//Inverter o conteúdo das variáveis
numero1 = numero2
numero2 = numeroAuxiliar

//Saída
console.log(`Os valores após inversão são ${numero1} e ${numero2}`)


