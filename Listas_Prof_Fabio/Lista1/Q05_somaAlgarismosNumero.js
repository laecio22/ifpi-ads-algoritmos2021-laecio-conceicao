//programa que o usuário informa um número inteiro de 3 dígitos
// e realiza a soma deles.
const prompt = require('prompt-sync')()

//Entrada
const numero = Number(prompt('Informe um número inteiro com 3 dígitos '))

//Processamento
const centena = Math.trunc(numero / 100)
const dezena =  Math.trunc((numero % 100) / 10)
const unidade = (numero % 100) % 10
const soma = centena + dezena + unidade

// Saída
console.log(`A soma dos algarismos do número é ${soma}`)

