//programa que converte a velocidade informada pelo usuário
// de Km/h para m/s
const prompt = require('prompt-sync')()

//Entrada
const velocidadeKmh = Number(prompt('Informe a velocidade em Km/h  '))

//Processamento
const velocidadeMs  = (velocidadeKmh / 3.6).toFixed(1)

//Saída
console.log('A velocidade em m/s  é de :' , velocidadeMs )
