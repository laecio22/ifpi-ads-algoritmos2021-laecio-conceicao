//Programa que recebe um valor em quilometros  e transforma em metros
const prompt = require('prompt-sync')()

//Entrada
const quilometro = Number(prompt('Informe um valor em quilometros '))

//Transforma o valor de quilometros em metros
const metro = quilometro * 1000

//Saída
console.log(`O valor é igual a ${metro} metros  `)
