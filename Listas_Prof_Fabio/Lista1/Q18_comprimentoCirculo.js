//Programa que recebe o valor do raio de uma circunferência e calcula seu comprimento
const prompt = require('prompt-sync')()

//Entrada
const raio = Number(prompt('Informe o valor do raio do círculo '))
const pi = 3.14

//Calcula a área do círculo
const comprimento = (2 * pi * raio).toFixed(2)

//Saída
console.log(`O comprimento do círculo em metros é de ${comprimento} m`)