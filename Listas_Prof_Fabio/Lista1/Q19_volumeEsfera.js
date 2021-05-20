//Programa que recebe o valor do raio de uma esfera e calcula seu volume
const prompt = require('prompt-sync')()

//Entrada
const raio = Number(prompt('Informe o valor do raio da esfera '))
const pi = 3.14

//Calcula o volume da esfera
const volume = (4 * pi * (raio * raio * raio) / 3).toFixed(2)

//Saída
console.log(`A esfera possui volume de ${volume} m³`)