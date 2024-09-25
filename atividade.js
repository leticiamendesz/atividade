let nome = prompt('Digite seu nome: ');
let idade = prompt('Digite sua idade: ');
console.log('Seu nome é ${nome} e voce tem ${idade} anos!');
console.log('seu nome é: '+nome+' e voce tem '+idade+' anos!');

let cidade = prompt('Digite a cidade onde voce mora: ');
console.log('${nome} mora em ${cidade}!');
console.log('${nome} + mora em '+cidade+'!');

let numb1 = parseInt(prompt('digite um numero: '));
let numb2 = parseInt(prompt('digite um segundo numero: '));
const soma = numb1 + numb2;
const sub = numb1 - numb2;
const mult = numb1 * numb2.toFixed(2);
const div = numb1 / numb2.toFixed(2);
console.log('A soma é ${soma}');
console.log('A subtração é ${sub}');
console.log('A multiplicação é ${mult}');
console.log('A divisão é ${div}');
