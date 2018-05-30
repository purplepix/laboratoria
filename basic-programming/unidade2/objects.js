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
