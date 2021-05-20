//Programa que recebe  o salário de um trabalhador e acrescenta um aumento de 25%
const prompt = require('prompt-sync')()

//Entrada
const salario = Number(prompt('Qual é o seu salário ? '))

//adicionar um  acréscimo de 25% do salário
const novoSalario = (salario + (salario * 0.25)).toFixed(2)

//Saída
console.log(`Seu novo salário será de ${novoSalario}`)