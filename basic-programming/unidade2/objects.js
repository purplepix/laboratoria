// 5. Exercícios direcionados:
// 1. ARRAY PARA OBJECT:
//      Função que transforma array em object:

var carArray = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
var carObject = {}

function transformArrayInObjects(array) {
  for (i = 0; i < carArray.length; i++) {
   carObject[carArray[i][0]] = carArray[i][1];
  }
  return carObject;
}

transformArrayInObjects(carArray);

//      Função que transforma array em object com for "resumido":

var carArray = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
var carObject = {}

function transformArrayInObjects(array) {
  for (primeiro of array) {
    carObject[primeiro[0]] = primeiro[1];
  }
  return carObject;
}

transformArrayInObjects(carArray);

//      Função que transforma object em array:

var carObject = {
  make: 'Ford',
  model: 'Mustang',
  year: 1964
}
var carArray = [];

function transformObjectInArray(object) {
  for (property in carObject) {
    carArray.push([property, carObject[property]]);
  }
  return carArray;
}

transformObjectInArray(carObject);

// 7. Aula Prática

//    1. Placar

var scores = {
  Mariana: 0,
  Patrícia: 0,
  Maria: 0,
  Roberta: 0
}

var array = 10;

function scoreOfEachFriend(name, points) {
  console.log("");
  for (var player in scores) {
    if (player === name) {
      scores[player] += points;
    }
    console.log(player + ' está com ' + scores[player] + ' pontos.');
  }

  return name + ' ganhou a última rodada e recebeu ' + scores[name] + ' pontos.';
}

scoreOfEachFriend('Maria', 70);
scoreOfEachFriend('Maria', -30);
scoreOfEachFriend('Roberta', 50);
scoreOfEachFriend('Patrícia', 40);
scoreOfEachFriend('Roberta', 40);

//    2. Caixa Automático

// 1.Perguntar o que o cliente quer fazer (sacar ou sair)
//   1.1 Sair --> terminar o programa
//   1.2 Sacar --> entrar na função sacar
// 2.Qual o valor que o cliente quer sacar?
// 3.Verificar se o valor que o cliente deseja está disponível na máquina (total da máquina)
//   3.1 Se não tiver, avisar que não será possível sacar.
// 4.Verificar se o valor é maior que 100
//   4.1 Se não for maior que 100, passar para 50.
//   4.2 Se for maior que 100:
//     4.2.1 Dividir o valor por 100 e manter apenas o número inteiro
//     4.2.2 Verificar se o número inteiro está disponível para saque
//       4.2.2.1 Se não tiver disponível, segue para 50.
//       4.2.2.2 Se tiver disponível
//         4.2.2.2.1 Subtrair o número de notas que será entregue do total disponível na máquina.
//         4.2.2.2.2 Guardar o número de notas que será entregue ao cliente
//         4.2.2.2.3 Subtrair o valor pedido do valor em notas 100 que a máquina irá entregar
//         4.2.2.2.4 Mandar o resultado da subtração para 50.
//   4.3 Se for maior que 50:
//     Repetir todo o procedimento anterior.
//   4.4 Se for maior que 20:
//     Repetir todo o procedimento anterior
//   4.5 Se for maior que 10:
//     Repetir todo o procedimento anterior
//   4.6 Se for maior que 5:
//     Repetir todo o procedimento anterior
//   4.7 Se for maior que 1:
//     Repetir todo o procedimento anterior
//   4.8 Se for = 0
//     4.8.1 (Imprimir no console o total de notas de cada tipo disponível. Só para verificar, não é necessário).
//     4.8.2 Retornar número total de notas de cada tipo que o cliente irá receber.
//   4.9 Retornar à pergunta inicial.

// 8. Desafios de código
// removeStringValuesLongerThan

var perfil = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
  blablabla: 'olarolarolar'
};

function removeStringValuesLongerThan(num, obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'string' && obj[key].length > num) {
        delete obj[key];
      }
  }
  return obj;
}

removeStringValuesLongerThan(6, perfil);
