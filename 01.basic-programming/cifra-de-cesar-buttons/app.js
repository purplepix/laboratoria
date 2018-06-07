var message;
var charcodedMensage;

function cypher() {
  message = askMessage();
  charcodedMessage = transformInCharChode(message);
  var cipheredCharCode = cipherCharCode(charcodedMessage);
  var encryptedMessage = transformInLetters(cipheredCharCode);
  return document.getElementById('message-result').innerHTML = '<p><font color=#303030> Esta é a sua mensagem criptografada: </font><p> "' + encryptedMessage + '"';
}

function decypher() {
  message = askMessage();
  charcodedMessage = transformInCharChode(message);
  var decipheredCharCode = decipherCharCode(charcodedMessage);
  var decryptedMessage = transformInLetters(decipheredCharCode);
  return document.getElementById('message-result').innerHTML = '<p><font color=#303030> Esta é a sua mensagem descriptografada: </font><p> "' + decryptedMessage + '"';
}

function askMessage() {
  do {
    message = prompt('Escreva uma mensagem: \n *O texto não pode conter números, pontuação, "ç" e acentos.');

    if (message.length === 0) {
      alert('Este campo não pode ficar vazio.');
    } else if (isNaN(parseInt(message)) === false) {
      alert('Este campo não aceita números.');
    } else if (message.length > 0 && isNaN(parseInt(message)) === true) {
      message.split('');
      return message;
    }
  } while (message.length === 0 || isNaN(parseInt(message)) === false);
}

function transformInCharChode(message) {
  var aux1 = [];
  for (eachLetter of message) {
    aux1.push(eachLetter.charCodeAt());
  }
  return aux1;
}

function cipherCharCode(charcodedMessage) {
  var aux2 = [];
  for (charCode of charcodedMessage) {
    if (charCode > 96) {
      aux2.push((charCode - 97 + 33) % 26 + 97);
    } else if (charCode < 91 && charCode !== 32) {
      aux2.push((charCode - 65 + 33) % 26 + 65);
    } else {
      aux2.push(32);
    }
  }
  return aux2;
}

function transformInLetters(array) {
  var aux3 = String.fromCharCode.apply(this, array);
  return aux3;
}

function decipherCharCode(charcodedMessage) {
  var aux4 = [];
  for (charCode of charcodedMessage) {
    if (charCode > 96) {
      aux4.push((charCode - 122 - 33) % 26 + 122);
    } else if (charCode < 91 && charCode !== 32) {
      aux4.push((charCode - 90 - 33) % 26 + 90);
    } else {
      aux4.push(32);
    }
  }
  return aux4;
}
