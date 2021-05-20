//Programa que recebe um valor em metros  e transforma em centimetros
const prompt = require('prompt-sync')()

//Entrada
const metro = Number(prompt('Informe um valor em metros '))

//Transforma o valor de quilometros em metros
const centimetro = metro * 100

//Saída
console.log(`O valor é igual a ${centimetro} cm  `)
