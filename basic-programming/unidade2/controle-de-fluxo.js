// Exercícios de Controle de FLuxos
// 1. FizzBuzz

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Exercícios Guiados
// 1. Funções Matemáticas

function add(x, y) {
  return x + y;
}

function multiply(v1, v2) {
  return v1 * v2;
}

multiply(36325, add(9824, 777));

// 2. Organizando Comida

var comida;
comida = prompt('O que você deseja comer?');

switch (comida) {
  case 'ceviche':
    text = "Desejo pedir um " + comida + ".";
    break;
  case 'tacos al pastor':
    text = "Desejo pedir " + comida + ".";
    break;
  case 'empanada chilena':
    text = "Desejo pedir uma " + comida + ".";
    break;
  default:
    text = "Desejo pedir um hamburguer.";
}

// 3. Idades e Etapas

var idade = parseFloat(prompt("Qual é a sua idade?").replace(",","."));

if (Number.isInteger(idade) == false || isNaN(idade) == true || idade === 0 || idade == "") {
  alert("Insira apenas números inteiros!");
} else if (idade <= 3) {
  alert("Você é um toddler!");
} else if (idade <= 6) {
  alert("Você está no prézinho ainda!");
} else if (idade <= 13) {
  alert("Você ainda está no fundamental!");
} else if (idade <= 20) {
  alert("Você ainda é um adolescente!");
} else if (idade <= 29) {
  alert("Você já é um jovem adulto! Vá pode pagar seus próprios boletos!");
} else {
  alert("Parabéns! Você se tornou um adulto responsável e seguro das suas escolhas na vida! -sqn");
}
