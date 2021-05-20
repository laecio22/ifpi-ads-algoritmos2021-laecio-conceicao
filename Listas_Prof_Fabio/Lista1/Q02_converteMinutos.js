//Programa que recebe um valor correspondente a horas e outro valor
//correspondente aos minutos e mostra o resultado apenas em minutos
const prompt = require('prompt-sync')()

//Entrada
const valorHoras = Number(prompt('Informe um valor que representa as horas : '))
const valorMinutos = Number(prompt('Informe um valor que representa os minutos : '))

//Processamento
const valorTotalEmMinutos = (valorHoras * 60) + valorMinutos

//Saída
console.log('O tempo total em minutos é de ' , valorTotalEmMinutos)