//Programa que recebe um valor em quilogramas  e transforma em gramas
const prompt = require('prompt-sync')()

//Entrada
const quilogramas = Number(prompt('Informe um valor em quilogramas (Kg) '))

//Transforma o valor de quilomgramas em gramas
const gramas = quilogramas * 1000

//Saída
console.log(`O valor é igual a ${gramas} gramas  `)
