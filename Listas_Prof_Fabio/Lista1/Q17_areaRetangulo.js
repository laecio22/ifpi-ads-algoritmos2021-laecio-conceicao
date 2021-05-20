//Programa que recebe o valor da base  e da altura de um retângulo e calcula sua área
const prompt = require('prompt-sync')()

//Entrada
const base = Number(prompt('Informe o valor da base do  retângulo '))
const altura = Number(prompt('Informe o valor da altura do  retângulo ')) 

//Calcula a área do triângulo
const area =  base * altura 

//Saída
console.log(`A área do retângulo é de   ${area} m²`)
