//Programa que recebe  3 notas de um aluno  e 3 pesos e que calcula
//a  média ponderada de suas notas
const prompt = require('prompt-sync')()

//Entrada
const nota1 = Number(prompt('Qual foi sua primeira nota ? '))
const nota2 = Number(prompt('Qual foi sua segunda nota ? '))
const nota3 = Number(prompt('Qual foi sua terceira nota ? '))
const peso1 = Number(prompt('Qual o peso de sua primeira nota ? '))
const peso2 = Number(prompt('Qual o peso de sua segunda nota ? '))
const peso3 = Number(prompt('Qual o peso de sua terceira nota ? '))

//realiza o cálculo da média ponderada das notas do aluno
const media =  (peso1 * nota1 + peso2 * nota2 + peso3 * nota3 )/ (peso1 + peso2 + peso3)

//Saída
console.log('A média ponderada das notas é de ', media)
