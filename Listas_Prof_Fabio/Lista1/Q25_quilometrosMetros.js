//Programa que recebe um valor em metros  e transforma em quilometros e metros
const prompt = require('prompt-sync')()

//Entrada
const metros = Number(prompt('Informe um valor em metros '))

//Transforma o valor de metros em quilometros e metros
const quilometros = Math.trunc(metros / 1000)
const metrosResultantes = metros % 1000

//Saída
console.log(` O valor equivale a ${quilometros} Km e ${metrosResultantes} m `)
