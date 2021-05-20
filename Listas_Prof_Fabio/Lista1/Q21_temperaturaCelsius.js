//Programa que recebe o valor da temperatura em graus Fahrenheit  e o converte para Celsius
const prompt = require('prompt-sync')()

//Entrada
const temperaturaFahrenheit = Number(prompt('Informe o valor da temperatura em Fahrenheit '))

//Transforma o valor de Fahrenheit  em Celsius
const temperaturaCelsius  = (5 * temperaturaFahrenheit - 160) / 9

//Saída
console.log(`O valor da temperatura em Fahrenheit equivale a ${temperaturaCelsius} ºC`)