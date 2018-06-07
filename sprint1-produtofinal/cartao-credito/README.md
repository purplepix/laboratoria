# Validador de número de cartão de crédito

>Este programa tem por objetivo avaliar o número de um cartão de crédito e retornar se ele é válido ou não.

## PASSO A PASSO

    INÍCIO DO LOOP {
      PERGUNTAR o número do cartão;
      TRANSFORMAR cada dígito do número do cartão em um elemento do tipo 'string' de uma array;
      INSERIR a array numa variável chamada cardNumber;

      SE (o comprimento de cardNumber === 0) {
        ALERTAR 'Este campo não pode ficar vazio.';
      } SENÃO {
        EXECUTAR a função isValidCard(cardNumber) com cardNumber como argumento;
      }
    } EXECUTAR LOOP ENQUANTO (o comprimento de cardNumber === 0);
    FIM DO LOOP

>Portanto, o programa irá perguntar o número do cartão ao usuário. Se o usuário não preencher o campo, um alerta surgirá dizendo que o campo não pode ficar vazio e a pergunta para inserir o número será feita novamente. Se os dados forem inseridos corretamente, a função para validar o número será executada.

    INÍCIO DA FUNÇÃO isValidCard(cardNumber) {
      DEFINIR uma variável chamada invertedCardNumber que recebe o resultado da função invertArray(cardNumber) com cardNumber como seu argumento;

      INÍCIO DA FUNÇÃO invertArray(cardNumber) {
        DEFINIR uma array auxiliar chamada aux1 vazia;
        PARA CADA (elemento DA array cardNumber) {
          TRANSFORMAR o elemento em número;
          INSERIR o número no início da array aux1;
        }
        RETORNAR a array aux1;
      }
      FIM DA FUNÇÃO

>Portanto, invertedCardNumber será igual a array aux1 que é o número dos cartão de crédito separado dígito a dígito em uma array de números em ordem inversa.

      DEFINIR uma variável chamada doubledCardNumber que recebe o resultado da função doubleEverySecondDigit(invertedCardNumber) com invertedCardNumber como seu argumento;

      INÍCIO DA FUNÇÃO doubleEverySecondDigit(invertedCardNumber) {
        PARA CADA (elemento de index ímpar DA array invertedCardNumber) {
          MULTIPLICAR o elemento (número) por 2.
          SE (o elemento for > 9) {
            SUBTRAIR 9 do elemento.
          }
        }
        RETORNAR a array invertedCardNumber;
      }
      FIM DA FUNÇÃO

>Portanto, a array invertedCardNumber terá todos os seus elementos de índex ímpar dobrados. E, caso o resultado dessa multiplicação resulte em um número com dois dígitos, deve-se subtrair 9 do resultado (que é a mesma coisa que somar os dois dígitos). A variável doubledCardNumber será igual a array invertedCardNumber após essa multiplicação.

      DEFINIR uma variável sumResult que recebe o resultado da função sumCardDigits(doubledCardNumber) com doubledCardNumber como argumento;

      INÍCIO DA FUNÇÃO sumCardDigits(doubledCardNumber) {
        DEFINIR uma variável chamada aux2 com o valor zero;
        PARA CADA (elemento DA array doubledCardNumber) {
          SOMAR o elemento ao número contido na array aux2;
          DEFINIR aux2 para ser o resultado dessa soma;
        }
        RETORNAR a array aux2;
      }
      FIM DA FUNÇÃO.

>Portanto, a array sumResult será o resultado da soma de todos os dígitos da array doubledCardNumber.

      SE (o resto da divisão de sumResult por 10 === 0) {
        IMPRIMIR no html da página a mensagem 'O cartão de crédito inserido é válido.';
      } SENÃO {
        IMPRIMIR no html da página a mensagem 'O cartão de crédito inserido não é válido';
      }
    }
    FIM DA FUNÇÃO.

> Portanto, a função isValidCard(cardNumber) irá:
>  1) Transformar em números os dígitos separados individualmente dentro de uma array.
>  2) Inverter a ordem dos dígitos.
>  3) Multiplicar os dígitos pares por dois.
>  4) Somar todos os dígitos.
>  5) Dividir o resultado da soma por 10 e verificar se há resto na divisão.
>  6) Se houver resto, o cartão é inválido. Se não houver, o cartão é válido.
>  7) Imprimir o resultado da verificação na página para o usuário.

## FLUXOGRAMA

![Fluxograma da validação de número de cartão de crédito] (https://raw.github.com/purplepix/laboratoria/master/__imagens/fluxograma-validacao-cartao-de-credito.jpeg)
