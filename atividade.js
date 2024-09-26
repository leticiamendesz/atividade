const prompt=require('prompt-sync')();
let nome = prompt('Digite seu nome: ');
let idade = prompt('Digite sua idade: ');
console.log(`Seu nome é ${nome} e voce tem ${idade} anos!`);
console.log('seu nome é: '+nome+' e voce tem '+idade+' anos!');

let cidade = (prompt('Digite a cidade onde voce mora: '));
console.log(`${nome} mora em ${cidade}!`);
console.log(''+nome+' mora em '+cidade+'');

let numb1 = parseInt(prompt('digite um numero: '));
let numb2 = parseInt(prompt('digite um segundo numero: '));
const soma = numb1 + numb2;
const sub = numb1 - numb2;
const mult = numb1 * numb2.toFixed(2);
const div = numb1  / numb2.toFixed(2);
console.log(`A soma é ${soma}`);
console.log(`A subtração é ${sub}`);
console.log(`A multiplicação é ${mult}`);
console.log(`A divisão é ${div}`);

let base = parseInt(prompt('digite a base do triangulo: '));
let altura = parseInt(prompt('Digite a altura do triangulo: '));
const area = ((base * altura)/2).toFixed(2);
console.log(`A base do triangulo é: ${base}`);
console.log(`A altura altura do triangulo é: ${altura}`);
console.log(`A área do triangulo é: ${area}`);

let not1 = parseInt(prompt('digite a nota 1: '));
let not2 = parseInt(prompt('digite a nota 2: '));
let not3 = parseInt(prompt('digite a nota 3: '));
const media = ((not1 + not2 + not3)/3).toFixed(3)
console.log(`A média é ${media}!`);
