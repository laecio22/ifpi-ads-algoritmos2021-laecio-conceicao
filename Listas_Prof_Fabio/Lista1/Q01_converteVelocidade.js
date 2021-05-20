//programa que converte a velocidade informada pelo usuário
// de m/s para Km/h
const prompt = require('prompt-sync')()

//Entrada
const velocidadeMs = Number(prompt('Informe a velocidade em m/s  '))

//Processamento
const velocidadeKmh = velocidadeMs * 3.6

//Saída
console.log('A velocidade em Km/h  é de :' , velocidadeKmh )


