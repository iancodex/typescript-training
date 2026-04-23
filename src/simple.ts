import promptSync from "prompt-sync";

const input = promptSync();
let name:string = input('Digite seu nome: ')
let age:number = Number(input('Digite sua idade: '))
console.log(`${name} its ${age} years old`)

