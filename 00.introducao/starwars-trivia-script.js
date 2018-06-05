function sendData() {
  var getName = document.getElementById("write-name").value;
  if (getName == "") {
    var welcomeStranger = document.getElementById("welcomespace").innerHTML = "Obrigada por jogar! Confira agora suas respostas:"
  } else {
    var upperUserName = getName.charAt(0).toUpperCase() + getName.slice(1);
    var welcomeMensage = document.getElementById("welcomespace").innerHTML = "Obrigada por jogar, " + upperUserName + "." + " Confira agora suas respostas:";
  }

  var firstQuestion = document.getElementById("firstQuestion").value;
    if (firstQuestion === "1977") {
      var firstAnswerCorrect = document.getElementById("lline1");
      firstAnswerCorrect.innerHTML = "Acertou! O primeiro filme de <em>Star Wars</em> chegou aos cinemas em " + firstQuestion + ".";
    } else {
      var firstAnswerWrong = document.getElementById("rline1");
      firstAnswerWrong.innerHTML = "Você errou! O primeiro filme de <em>Star Wars</em> chegou aos cinemas em 1977.";
  }

  var secondQuestion = document.getElementById("secondQuestion").value;
    var upperSecondAnswer = secondQuestion.charAt(0).toUpperCase() + secondQuestion.slice(1);
    if (upperSecondAnswer === "Roxo") {
      var secondAnswerCorrect = document.getElementById("lline2");
      secondAnswerCorrect.innerHTML = "Acertou! O sabre de Mace Windu é " + upperSecondAnswer + ".";
    } else if (upperSecondAnswer === "Roxo."){
      var secondAnswerCorrect = document.getElementById("lline2");
      secondAnswerCorrect.innerHTML = "Acertou! O sabre de Mace Windu é " + upperSecondAnswer;
    } else {
      var secondAnswerWrong = document.getElementById("rline2");
      secondAnswerWrong.innerHTML = "Você errou! O sabre de Mace Windu é roxo.";
  }

  var thirdQuestion = document.getElementById("thirdQuestion").value;
    var upperThirdAnswer = thirdQuestion.charAt(0).toUpperCase() + thirdQuestion.slice(1);
    if (upperThirdAnswer === "Dagobah") {
      var thirdAnswerCorrect = document.getElementById("lline3");
      thirdAnswerCorrect.innerHTML = "Acertou! Yoda treinou Luke no planeta " + upperThirdAnswer + ".";
    } else if (upperThirdAnswer === "Dagobah.") {
      var thirdAnswerCorrect = document.getElementById("lline3");
      thirdAnswerCorrect.innerHTML = "Acertou! Yoda treinou Luke no planeta " + upperThirdAnswer;
    } else {
      var thirdAnswerWrong = document.getElementById("rline3");
      thirdAnswerWrong.innerHTML = "Você errou! Yoda treinou Luke no planeta Dagobah.";
  }

  var fourthQuestion = document.getElementById("fourthQuestion").value;
    var upperFourthAnswer = fourthQuestion.charAt(0).toUpperCase() + fourthQuestion.slice(1);
    if (upperFourthAnswer === "Shmi") {
      var fourthAnswerCorrect = document.getElementById("lline4");
      fourthAnswerCorrect.innerHTML = "Acertou! A mãe de Anakin se chama " + upperFourthAnswer + ".";
    } else if (upperFourthAnswer === "Shmi."){
      var fourthAnswerCorrect = document.getElementById("lline4");
      fourthAnswerCorrect.innerHTML = "Acertou! A mãe de Anakin se chama " + upperFourthAnswer;
    } else {
      var fourthAnswerWrong = document.getElementById("rline4");
      fourthAnswerWrong.innerHTML = "Você errou! A mãe de Anakin se chama Shmi.";
  }

  var fifthQuestion = document.getElementById("fifthQuestion").value;
    var upperFifthAnswer = fifthQuestion.charAt(0).toUpperCase() + fifthQuestion.slice(1);
    if (upperFifthAnswer === "Luke, eu sou seu pai") {
      var fifthAnswerCorrect = document.getElementById("lline5");
      fifthAnswerCorrect.innerHTML = "Acertou! Sua frase mais famosa é \""+ upperFifthAnswer + ".\"";
    } else if (upperFifthAnswer === "Luke, eu sou seu pai."){
      var fifthAnswerCorrect = document.getElementById("lline5");
      fifthAnswerCorrect.innerHTML = "Acertou! Sua frase mais famosa é \""+ upperFifthAnswer + "\"";
    } else if (upperFifthAnswer === "Luke, eu sou seu pai!"){
      var fifthAnswerCorrect = document.getElementById("lline5");
      fifthAnswerCorrect.innerHTML = "Acertou! Sua frase mais famosa é \""+ upperFifthAnswer + "\"";
    } else if (upperFifthAnswer === "Luke, I am your father"){
      var fifthAnswerCorrect = document.getElementById("lline5");
      fifthAnswerCorrect.innerHTML = "Acertou! Sua frase mais famosa é \""+ upperFifthAnswer + ".\"";
    } else if (upperFifthAnswer === "Luke, I am your father."){
      var fifthAnswerCorrect = document.getElementById("lline5");
      fifthAnswerCorrect.innerHTML = "Acertou! Sua frase mais famosa é \""+ upperFifthAnswer + "\"";
    } else if (upperFifthAnswer === "Luke, I am your father!"){
      var fifthAnswerCorrect = document.getElementById("lline5");
      fifthAnswerCorrect.innerHTML = "Acertou! Sua frase mais famosa é \""+ upperFifthAnswer + "\"";
    } else {
      var fifthAnswerWrong = document.getElementById("rline5");
      fifthAnswerWrong.innerHTML = "Você errou! A frase mais famosa de Darth Vader é \"Luke, eu sou seu pai.\"";
    }
}
