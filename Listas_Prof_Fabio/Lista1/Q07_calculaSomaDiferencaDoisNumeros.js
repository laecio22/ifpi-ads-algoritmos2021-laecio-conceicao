//programa que dado 3 números, realiza o cálculo da soma dos  2 primeiros números
// e o cálculo da diferença dos 2 últimos números

const prompt = require('prompt-sync')()

//Entrada
const numero1 = Number(prompt('Informe o primeiro número '))
const numero2 = Number(prompt('Informe o segundo número '))
const numero3 = Number(prompt('Informe o terceiro número '))

//Processamento
const somaDoisPrimeiros = numero1 + numero2
const subtracaoDoisUltimos = numero2 - numero3

//Saída
console.log(`A soma dos 2 primeiros números é ${somaDoisPrimeiros}  e a diferença
entre os 2 últimos é ${subtracaoDoisUltimos} `)

