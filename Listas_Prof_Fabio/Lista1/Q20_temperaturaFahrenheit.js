//Programa que recebe o valor da temperatura em graus Celsius  e o converte para Fahrenheit
const prompt = require('prompt-sync')()

//Entrada
const temperaturaCelsius = Number(prompt('Informe o valor da temperatura em Celsius '))

//Transforma o valor de Celsius  em Fahrenheit
const temperaturaFahrenheit = (9 * temperaturaCelsius + 160) / 5

//Saída
console.log(`O valor da temperatura em Celsius equivale a ${temperaturaFahrenheit} ºF`)