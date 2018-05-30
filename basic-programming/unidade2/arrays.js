//Guided Exercises I
// 1. Reverse

//forma 1 de fazer: função simples

var bestPlayers = ["Joana", "Camila", "Janete", "Marcela", "Roberta"];

function reverseNewArray(array) {
  var worstPlayers = array.reverse();
  console.log(worstPlayers);
}

function reverseArray(array) {
  array.reverse();
  console.log(bestPlayers);
}

reverseNewArray(bestPlayers);
reverseArray(bestPlayers);

//forma 2 de fazer: função com pop

var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

function spliceReverse(array) {
  for (var i = 0; i < array.length; i++){
    var itemSaiu = array.pop();
    array.splice(i, 0, itemSaiu);
  }
  console.log(array);
}

spliceReverse(letras);

//forma 3 de fazer: função com push

function myReverse(array) {
  var arrayAux = [];
  var arraySize = array.length - 1;

  for(var i = 0; i < array.length; i++) {
    arrayAux.push(array[arraySize - i]);
  }

  return arrayAux;
}

var array3 = [1,2,3,4,5];
var array3Reverse = myReverse(array3);
console.log("Array3: ",array3Reverse);

// 2. Search (#2-Search)

function searchNum(array, numb) {
  var arLength = array.length;
  for (i = 0; i < arLength; i++) {
    if (array[i] === numb) {
      return array.indexOf(numb);
    }
  }
}

var randomNumbers = [4, 8, 23, 6, 4, 1, 9, 0, 56, 24];
searchNum(randomNumbers,0);

// Guided Exercises II
// 1. Sum

function range(start, end, step) {
  var array = [];

  if (start < end) {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  console.log(array);
  return array;
}

function getSum(array) {
  var sumResult = 0;

  for (var i = 0; i < array.length; i++) {
    sumResult += array[i];
  }
  return sumResult;
}

// Alternativa com comando .reduce:
// function getSum (range) {
//   function sumCommand (total, num) {
//     return total + num;
//   }
//   var sumResult = array.reduce(sumCommand);
//   return sumResult;
// }

getSum(range(10,1,-1));

// 2. Ordenação e Busca Binária

var randomNumbers = [4, 8, 23, 6, 4, 1, 9, 0, 56, 24];

function sortNumbers() {
  var compareNumbers = function compareNumbers(a, b) {
    return a - b;
  }
  randomNumbers.sort(compareNumbers);
  return randomNumbers;
}

function bsearch(array, numb) {
  var min = 0;
  var max = array.length - 1;
  var mid;

  while (min <= max) {
    mid = Math.floor((min + max)/2);

    if (array[mid] === numb) {
      return mid;
    } else if (array[mid] < numb) {
      min = mid++;
    } else if (array[mid] > numb) {
      max = mid--;
    } else {
    return -1;
    }
  }
}

sortNumbers(randomNumbers);
bsearch(randomNumbers, 9);

// 3. Remoção de duplicados:

var dirtyArray = [ 0, 1, 4, 4, 6, 6, 8, 9, 23, 24, 56];

function removeDoppelgangers(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) == -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
  console.log(newArray);
}

removeDoppelgangers(dirtyArray);

// 4. Comparação

function areArraysSame(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

var ar1 = [1, 2, 3, 4, 5];
var ar2 = [1, 2, 3, 4, 5, 6];
areArraysSame(ar1, ar2);

// Practice
// 01 - Compute Average Length of Words

function computeAverageLengthOfWords(word1, word2) {
  var wordAverage = (word1.length + word2.length) / 2
  return "O comprimento médio de " + word1 + " e " + word2 + " é de " + wordAverage + " caracteres."
}

computeAverageLengthOfWords("Paralelepípedo", "Arroz");

// 02 - Get Nth Element

function getNthElement(array, n) {

  if (array.length === 0) {
    return undefined;
  }

  for (i = 0; i < array.length; i++) {
    if (i === n) {
    return array[i];
  }
  }

}

getNthElement([1, 2, 3, 4, 5, 6, 100, 7, 9], 1)

// 03 - Convert Double Space to Single

function convertDoubleSpaceToSingle(str) {
  return str.replace(/  /g," ");
}

convertDoubleSpaceToSingle("string  with  double  spaces");

// 03 - Outra forma de resolver

function convertDoubleSpaceToSingle(str) {
  var splitWords = str.split(' ');

  console.log(splitWords);

  for (i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length === 0) {
      splitWords.splice(i, 1);
    }
  }

  var joinedWords = splitWords.join(' ');
  return joinedWords;
}

convertDoubleSpaceToSingle("string  with  double  spaces");

// 04 - Are Valid Credentials

function areValidCredentials(name, password) {
  if (name.length > 3 && password.length > 8) {
    return true;
  } else {
    return false;
  }
}

areValidCredentials('Ritu', 'mylongpassword');

// 05 - Find Pair For Sum

function findPairForSum(array, number) {
    var arrayColumn = array;
  var arrayLine = array.slice(1);

  for (i = 0; i < arrayColumn.length; i++) {
// a segunda variável tem que ser i + 1 para não repetir soma
    for (v = i + 1; v < arrayLine.length; v++) {
      if (arrayColumn[i] + arrayLine[v] === number) {
      return [arrayColumn[i], arrayLine[v]];
      }
    }
  }
}

// 06 - Filter Odd Elements

function filterOddElements(arr) {
  var tempArray = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      tempArray.push(arr[i]);
    }
  }

  arr = tempArray;
  return tempArray;
}

filterOddElements([1, 2, 3, 4, 5]);

// 07 - Find Shortest Word Among Mixed Elements

function findShortestWordAmongMixedElements(arr) {
    if (arr.length < 1) {
    return '';
  } else {

    var auxArray = [];
    for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
       auxArray.push(arr[i]);
      }
    }

    if (auxArray.length < 1) {
      return '';
    } else {

    auxArray.sort(function compareStrings(a, b) {
      if (a.length < b.length) {
        return -1;
      }
      if (a.length > b.length) {
        return 1;
      }
      return 0;
      });

    return auxArray[0];
    }
  }
}

// 07 - Outra forma de resolver:
function findShortestWordAmongMixedElements(arr) {
  if (arr.length < 1) {
    return '';
  } else {

    var auxArray = [];
    for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        auxArray.push(arr[i]);
      }
    }

    if (auxArray.length < 1) {
      return '';
    } else {

      compareStrings(auxArray);
      return auxArray[0];
    }
  }

  function compareStrings(array) {

    for(var i = 0; i < array.length; i++) {
      var indexOfShortestString = i;

      for(var v = i + 1; v < array.length; v++) {
        if(array[v].length < array[indexOfShortestString].length) {
          indexOfShortestString = v;
        }
      }

      if (i !== indexOfShortestString) {
        var temporaryArray = array[i];
        array[i] = array[indexOfShortestString];
        array[indexOfShortestString] = temporaryArray;
      }
    }
  }
}

// 08 - Find Smallest Number Among Mixed Elements

function findSmallestNumberAmongMixedElements(arr) {
    if (arr.length < 1) {
    return '';
  } else {

    var auxArray = [];
    for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
       auxArray.push(arr[i]);
      }
    }

    if (auxArray.length < 1) {
      return '';
    } else {

    auxArray.sort(function compareStrings(a, b) {return b - a;});

    return auxArray[0];
    }
  }
}

// 09 - Get Longest Word of Mixed Elements

function getLongestWordOfMixedElements(arr) {
    if (arr.length < 1) {
    return '';
  } else {

    var auxArray = [];
    for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
       auxArray.push(arr[i]);
      }
    }

    if (auxArray.length < 1) {
      return '';
    } else {

    auxArray.sort(function compareStrings(a, b) {
      if (a.length > b.length) {
        return -1;
      }
      if (a.length < b.length) {
        return 1;
      }
      return 0;
      });

    return auxArray[0];
    }
  }
}

// 11 - Compute Sum of All Elements

function computeSumOfAllElements(arr) {
  var sumArray = 0;

  for (var i = 0; i < arr.length; i++) {
    sumArray += arr[i];
  }

  return sumArray;
}

computeSumOfAllElements([1, 2, 3, 6, 12])

// 12 - Compute Sum Between

function computeSumBetween(num1, num2) {
  var rangeArray = [];
  var sumResult = 0;

  if (num1 < num2) {
    for (var i = num1; i < num2; i++) {
      rangeArray.push(i);
    }

    for (var i = 0; i < rangeArray.length; i++) {
      sumResult += rangeArray[i];
    }

    return sumResult;

  } else {
    return 0;
  }

}

computeSumBetween (0, 10)

// 13 - Get Longest of Three Words

function getLongestOfThreeWords(word1, word2, word3) {
  if (word1.length >= word2.length && word1.length >= word3.length) {
    return word1;
  }

  if (word2.length > word1.length && word2.length >= word3.length) {
    return word2;
  }

  if (word3.length > word1.length && word3.length > word2.length) {
    return word3;
  }
}

getLongestOfThreeWords('estas', 'três', 'palavras');

// 14 - Find Shortest of Three Words

function findShortestOfThreeWords(word1, word2, word3) {
  if (word1.length <= word2.length && word1.length <= word3.length) {
    return word1;
  }

  if (word2.length < word1.length && word2.length <= word3.length) {
    return word2;
  }

  if (word3.length < word1.length && word3.length < word2.length) {
    return word3;
  }
}

findShortestOfThreeWords('lapis', 'oi', 'dez');

// 15 - Calculate Bill Total

function calculateBillTotal(preTaxAndTipAmount) {
  var beforeTaxAndTip = preTaxAndTipAmount;
    var tax = 9.5 / 100;
    var tip = (15 / 100) + 1;
    var tipAmount = beforeTaxAndTip * tax;
    var billAfterTax = beforeTaxAndTip * tip;

    return Math.round((billAfterTax + tipAmount) * 1000) / 1000;
}

calculateBillTotal(20)

// 16 Convert Score to Grade

function convertScoreToGrade(score) {
  if (score > 100 || score < 0) {
    return 'PUNTUACION INVALIDA';
  }

  if (score >= 90 && score <= 100) {
    return 'A';
  }

  if (score >= 80 && score <= 89) {
    return 'B';
  }

  if (score >= 70 && score <= 79) {
    return 'C';
  }

  if (score >= 60 && score <= 69) {
    return 'D';
  }

  if (score >= 0 && score <= 59) {
    return 'F';
  }
}
