// programa que recebe um valor em  minutos do usuário  e o transforma
//em  horas  e  minutos
const prompt = require('prompt-sync')()

//Entrada
const valorEmMinutos = Number(prompt('Informe um valor em minutos '))

//Processamento
const tempoEmHoras = Math.trunc(valorEmMinutos / 60)
const tempoEmMinutos = valorEmMinutos % 60

//Saída
console.log(`O tempo corresponde em ${tempoEmHoras} horas  e ${tempoEmMinutos} minutos`)
