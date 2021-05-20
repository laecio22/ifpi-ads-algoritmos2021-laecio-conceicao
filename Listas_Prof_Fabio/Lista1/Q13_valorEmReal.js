//Programa que recebe  um valor em real  e calcula 70% dele
const prompt = require('prompt-sync')()

//Entrada
const valorReal = Number(prompt('Informe um valor em Real '))

// calcula 70% do valor informado
const valorReduzido = (valorReal * 0.7).toFixed(2)

//Saída
console.log(`70%  do valor informado é de ${valorReduzido}`)