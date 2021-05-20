//Programa que recebe o valor do lado de um quadrado e calcula sua área
const prompt = require('prompt-sync')()

//Entrada
const lado = Number(prompt('Informe o valor do lado do quadrado '))

//Calcula a área do quadrado
const area =  lado * lado

//Saída
console.log(`O quadradi possui área de  ${area} m²`)
