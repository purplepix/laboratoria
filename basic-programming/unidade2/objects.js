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

var availableCash = [
	{ value: 100, stock: 100 },
	{ value: 50, stock: 50 },
	{ value: 20, stock: 200 },
	{ value: 10, stock: 300 },
	{ value: 5, stock: 500 },
	{ value: 1, stock: 800 },
];

var cashReceived = {};
var totalCash;

do {
	var whatDoYouWant;
	var amountWanted;
	whatDoYouWant = parseFloat(
		prompt('O que você deseja fazer? 1. Sacar / 2. Sair')
	);
	if (whatDoYouWant === 1) {
		amountWanted = parseFloat(
			prompt('Quanto você deseja sacar?').replace(',', '.')
		);
		if (amountWanted > sumCash(availableCash)) {
			alert(
				'Infelizmente não tenho a quantia desejada. Dirija-se a outra máquina.'
			);
		} else {
      withdrawal(amountWanted);

      console.log('-------------------------------\n');
      console.log('Saque de ' + amountWanted + ' reais realizado com sucesso.\n');

			billsWithdrawn(cashReceived);

      console.log('-------------------------------\n');
		}
	}
} while (whatDoYouWant === 1);

function sumCash(availableCash) {
  totalCash = 0;
  console.log('Estoque da máquina:\n')
	for (i = 0; i < availableCash.length; i++) {
		totalCash += availableCash[i]['value'] * availableCash[i]['stock'];
		console.log(
			'Notas de R$ ' +
				availableCash[i]['value'] +
				': ' +
				availableCash[i]['stock']
		);
	}
  console.log('No caixa restam R$ ' + totalCash + ' reais.\n');
  return totalCash;
}


function withdrawal(amountWanted) {
	for (j = 0; j < availableCash.length; j++) {
		var numberBillsSameValue = Math.floor(
			amountWanted / availableCash[j]['value']
		);
		if (amountWanted >= availableCash[j]['value'] && availableCash[j]['stock'] >= 1) {
      if (numberBillsSameValue > availableCash[j]['stock']) {
        var yetToPay = numberBillsSameValue - availableCash[j]['stock'];
        availableCash[j]['stock'] = 0;
      numberBillsSameValue = yetToPay;
      } else {
			  availableCash[j]['stock'] -= numberBillsSameValue;
			  cashReceived[availableCash[j]['value']] = numberBillsSameValue;
			  amountWanted -= numberBillsSameValue * availableCash[j]['value'];
		  }
	  }
  }
}

function billsWithdrawn(cashReceived) {
	var billsWithdrawn = 0;
	for (var value in cashReceived) {
		billsWithdrawn += cashReceived[value];
	}

  console.log('Você rebeceu ' + billsWithdrawn + ' notas.\n');
}

// 8. Desafios de código

// addArrayProperty

function addArrayProperty(obj, key, arr) {
  var myObj = obj;
  myObj[key] = arr;
  console.log(myObj[key]);
}

var myObj = {};
var myStr = 'myProperty';
var myArray = [1 ,3];

addArrayProperty({}, 'KEY', [5, 8, 12])

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

// getElementOfArrayProperty

function getElementOfArrayProperty(obj, key, index) {
  if(obj[key] === undefined) {
    return undefined;
  }
  if(obj[key].length === 0) {
    return undefined;
  }
  if(Array.isArray(obj[key]) === false) {
    return undefined;
  }
  if(index >= obj[key].length) {
    return undefined;
  }
  return obj[key][index];
}

var obj = {
  head: [1]
};

getElementOfArrayProperty(obj, 'head', 1);

// greetCustomer

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
	  if (customerData[firstName] === undefined) {
    greeting = 'Welcome! Is this your first time?';
  } else {
    if (customerData[firstName]['visits'] === 1) {
      greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
    }
    if (customerData[firstName]['visits'] > 1) {
      greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
    }
  }
  return greeting;
}

module.exports = greetCustomer;

// transformFirstAndLast

function transformFirstAndLast(array) {
  var obj = {};
  var lastIndex = array.length - 1;
  obj[array[0]] = array[lastIndex];
  return obj;
}

transformFirstAndLast(['QUEEN', 'ELIZABETH', 'OF HEARTS', 'BEYONCE']);

// getAllKeys

function getAllKeys(obj) {
  var array = [];
  for (var key in obj) {
    array.push(key);
  }
  return array;
}

getAllKeys({ TES : 'TES', INI : 'APA',BERHASIL : 10 });

// fromListToObject

function fromListToObject(array) {
  var obj = {};
  for (i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }
  return obj;
}

fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);

// listAllValues

function listAllValues(obj) {
  var array = [];
  for (var key in obj) {
  array.push(obj[key]);
  }
  return array;
}

listAllValues({ TEZ: 'YES' });


// transformEmployeeData

function transformEmployeeData(array) {
  var newData = [];
  for (i = 0; i < array.length; i++) {
    newData.push({});
    for (j = 0; j < array[i].length; j++) {
      newData[i][array[i][j][0]] = array[i][j][1];
    }
  }
  return newData;
}

transformEmployeeData([
  [['firstName', 'Joe'],
   ['lastName', 'Blow'],
   ['age', 42],
   ['role', 'clerk']
  ],
  [['firstName', 'Mary'],
   ['lastName', 'Jenkins'],
   ['age', 36 ],
   ['role', 'manager']
  ]
]);

// convertObjectToList

function convertObjectToList(obj) {
  var array = [];
  for (var key in obj) {
    array.push([key, obj[key]]);
  }
  return array;
}

convertObjectToList({
  name: 'Holly',
  edad: 35,
  papel: 'productor'
});

// getSumOfAllElementsAtProperty

function getSumOfAllElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return 0;
  }
  if (obj[key].length === 0) {
    return 0;
  }
  if (Array.isArray(obj[key]) === false) {
    return 0;
  }
  var sumAllElementsOfObj = 0;
  for (i = 0; i < obj[key].length; i++) {
    sumAllElementsOfObj += obj[key][i];
  }
  return sumAllElementsOfObj;
}

var olar = {
  what: [1,2,3,4,5,6,7,8,9,10]
};

getSumOfAllElementsAtProperty(olar, 'what');

// getProductOfAllElementsAtProperty

function getProductOfAllElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return 0;
  }
  if (obj[key].length === 0) {
    return 0;
  }
  if (Array.isArray(obj[key]) === false) {
    return 0;
  }
  var productAllElementsOfObj = 1;
  for (i = 0; i < obj[key].length; i++) {
    productAllElementsOfObj *= obj[key][i];
  }
  return productAllElementsOfObj;
}

var olar = {
  what: [1,2,3,4,5]
};

getProductOfAllElementsAtProperty(olar, 'what');

// addObjectProperty

function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
  return obj1[key];
}

addObjectProperty({ NAME : 'MEDINA', ROLE : 'EUUUUHHH' }, 'BAWAHAN', { NAME : 'FADEL', ROLE : 'AAAAHHHH' });

// addFullNameProperty

function addFullNameProperty(obj) {
  obj.fullName = obj['firstName'] + ' ' + obj['lastName'];
  return obj.fullName;
}

addFullNameProperty({ firstName : 'KEMAL', lastName : 'MAHMUD' });
