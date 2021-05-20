//Programa que recebe o valor da base  e da altura de um triângulo e calcula sua área
const prompt = require('prompt-sync')()

//Entrada
const base = Number(prompt('Informe o valor da base do  triângulo '))
const altura = Number(prompt('Informe o valor da altura do  triângulo ')) 

//Calcula a área do triângulo
const area =  base * (altura / 2)

//Saída
console.log(`O triângulo possui área de  ${area} m²`)
