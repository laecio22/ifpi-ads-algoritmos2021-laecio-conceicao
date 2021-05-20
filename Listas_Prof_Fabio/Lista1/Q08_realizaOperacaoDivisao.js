//Programa que recebe dois números e realiza a divisão da soma deles
//pela subtração deles

const prompt = require('prompt-sync')()

//Entrada
const primeiroNumero = Number(prompt('Digite o valor do primeiro número '))
const segundoNumero = Number(prompt('Digite o valor do segundo número '))

//Realiza a soma dos 2 números  e divide pela subtração desses números
const resultadoOperação = (primeiroNumero + segundoNumero) / (primeiroNumero - segundoNumero)

//Saída
console.log(`O resultado da divisão da soma de dois números pela subtração desses números é ${resultadoOperação.toFixed(1)}`)

