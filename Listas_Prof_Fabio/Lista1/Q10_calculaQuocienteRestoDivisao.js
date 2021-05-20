//Programa que recebe dois números  e calcula o resto e o quociente do primeiro
//pelo segundo
const prompt = require('prompt-sync')()

//Entrada
const numero1 = Number(prompt('Digite o primeiro número '))
const numero2 = Number(prompt('Digite o segundo número '))

//calcular o resultado do quociente e resto da divisão do primeiro pelo segundo
const quocienteDivisao = Math.trunc(numero1 / numero2)
const restoDivisao =  numero1 % numero2

//Saída
console.log(`O quociente da divisão é ${quocienteDivisao}  e o resto é ${restoDivisao}`)