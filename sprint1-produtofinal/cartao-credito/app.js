
do {
  var cardNumber = prompt('Insira o número do cartão de crédito:').split('');

  if (cardNumber.length > 0) {
    isValidCard(cardNumber);
  } else {
    alert('Este campo não pode ficar vazio.');
  }
} while (cardNumber.length === 0);


function isValidCard(cardNumber) {

  var invertedCardNumber = invertArray(cardNumber);

  var doubledCardNumber = doubleEverySecondDigit(invertedCardNumber);

  var sumResult = sumCardDigits(doubledCardNumber);

  if (sumResult % 10 === 0) {
    return document.getElementById('result').innerHTML = 'O cartão de crédito inserido é <font color=#5eed2f>válido</font>.';
  } else {
    return document.getElementById('result').innerHTML = 'O cartão de crédito inserido <font color=#ff5e5e>não é válido</font>.';
  }
}

function invertArray(cardNumber) {
  var aux1 = [];
  for (var eachNumber of cardNumber) {
    aux1.unshift(parseInt(eachNumber));
  }
  return aux1;
}

function doubleEverySecondDigit(invertedCardNumber) {
  for (i = 1; i < invertedCardNumber.length; i += 2) {
    invertedCardNumber[i] *= 2;
    if (invertedCardNumber[i] > 9) {
        invertedCardNumber[i] -= 9;
    }
  }
  return invertedCardNumber;
}

function sumCardDigits(doubledCardNumber) {
  var aux2 = 0;
  for (var eachNumber of doubledCardNumber) {
    aux2 += eachNumber;
  }
  return aux2;
}
