//programa que faz a conversão de um valor em Dólar para Reais 

const prompt = require('prompt-sync')()

//Entrada
const valorDoDolar = Number(prompt('Informe o valor do Dólar em Reais '))
const quantidadeDolar = Number(prompt('Informe a quantidade de Dólar  a ser convertido em Reais '))

//Processamento
const valorEmReais = valorDoDolar * quantidadeDolar

//Saída
console.log(`O valor em reais é de ${valorEmReais}`)