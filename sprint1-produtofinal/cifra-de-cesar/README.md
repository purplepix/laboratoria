# Criptografia e Descriptografia com Cifra de César

>Este programa tem por objetivo criptografar uma palavra inserida pelo usuário e descriptografá-la em seguida utilizando a Cifra de César.

## PASSO A PASSO

    INÍCIO DO LOOP {
      PERGUNTAR a mensagem que o usuário deseja criptografar;
      DEFINIR uma variável chamada message com a mensagem digitada pelo usuário;

      SE (o comprimento de message for === 0) {
        ALERTAR 'Este campo não pode ficar vazio.';
      } MAS SE (message convertido em números for diferente de NaN) {
        ALERTAR 'Este campo não aceita números.';
      } SENÃO {
        DECLARAR a variável encryptedMessage;
        EXECUTAR a função cipher(message), com message como argumento;
        EXECUTAR a função decipher(encryptedMessage), com encryptedMessage como argumento;
      }
    } EXECUTAR LOOP ENQUANTO (o comprimento de message === 0 ou message convertido em números for diferente de NaN);
    FIM DO LOOP.

> Portanto, o programa irá pedir que o usuário insira uma mensagem em um prompt. Se o usuário não inserir nada ou inserir uma mensagem com números, surgirão alertas dizendo que o campo não pode ficar vazio e não pode conter números, respectivamente, e a pergunta para inserir uma mensagem será feita novamente. Se o campo for preenchido corretamente, será executada a função para encriptar a mensagem, seguida da função para descriptografar a mensagem.

    INÍCIO DA FUNÇÃO cipher(message) {
      DEFINIR uma variável chamada charcodedMessage como o resultado da função transformInCharChode(array), com message como argumento;

        INÍCIO DA FUNÇÃO transformInCharChode(message) {
          DEFINIR uma array auxiliar vazia chamada aux1;
          PARA CADA (letra DE message) {
            INSERIR o charcode da letra no final da array aux1;
          }
          RETORNAR a array aux1;
        }
        FIM DA FUNÇÃO.

>Portanto, a função transformInCharChode transformará a mensagem digitada pelo usuário em uma array composta pelo charCode de cada letra da mensagem em sequência. Essa array é retornada como resultado da função e é definida como a variável charcodedMessage.

      DEFINIR uma variável chamada cipheredCharCode que é o resultado da função cipherCharCode(charcodedMessage), com charcodedMessage como argumento;

        INÍCIO DA FUNÇÃO cipherCharCode(charcodedMessage) {
          DEFINIR uma array auxiliar vazia chamada aux2;
          PARA CADA (elemento DE charcodedMessage) {
            SE (o número for > 96) {
              INSERIR o resultado da fórmula "(charCode - 97 + 33) % 26 + 97" no final de aux2;
            } MAS SE (o número for < 91 e diferente de 32) {
              INSERIR o resultado da fórmula "(charCode - 65 + 33) % 26 + 65)" no final de aux2;
            } SENÃO {
              INSERIR no final de aux2 o charcode "32";
            }
          RETORNAR array aux2;
        }
        FIM DA FUNÇÃO.

>Portanto, a função cipherCharCode irá criptografar a array de charcodes (charcodedMessage) seguindo a fórmula do algorítmo de Luhn fornecida. O resultado da criptografia será inserido na variável cipheredCharCode.

      DEFINIR a variável encryptedMessage como o resultado da função transformInLetters(array), com cipheredCharCode como argumento;

        INÍCIO DA FUNÇÃO transformInLetters(cipheredCharCode) {
          DEFINIR uma variável chamada aux3 como uma string formada a partir da sequênciade charCodes da array cipheredCharCode;
          RETORNAR a array aux3;
        }
        FIM DA FUNÇÃO.

>Portanto, a função transformInLetters transformará o charcode criptografado (cipheredCharCode) em uma string trocando cada charcode da array por sua letra correspondente na tabela ASCII. A mensagem criptografada em forma de letras será armazenada na variável encryptedMessage.

      IMPRIMIR na página a mensagem "Esta é a sua mensagem criptografada " + encryptedMessage;
    }
    FIM DA FUNÇÃO.

>Portanto, a função cipher(message):
>1) Transforma a mensagem digitada pelo usuário em uma array composta pelo charcode de cada letra da mensagem;
>2) Criptografa os charcodes da array;
>3) Transforma os charcodes criptografados novamente em letras e os junta em uma string.
>4) Imprime na página a mensagem do usuário criptografada.

    INÍCIO DA FUNÇÃO decipher(encryptedMessage) {

      DEFINIR charcodedMessage como o resultado da função transformInCharChode(array), com encryptedMessage como argumento;

        INÍCIO DA FUNÇÃO transformInCharChode(message) {
          DEFINIR uma array auxiliar vazia chamada aux1;
          PARA CADA (letra DE message) {
            INSERIR o charcode da letra no final da array aux1;
          }
          RETORNAR a array aux1;
        }
        FIM DA FUNÇÃO.

>Portanto, a função transformInCharChode transformará a mensagem criptografada pelo usuário (encryptedMessage) uma array composta pelo charCode de cada letra da mensagem em sequência. Essa array é retornada como resultado da função e é definida como a variável charcodedMessage.

      DEFINIR uma variável chamada decipheredCharCode como o resultado da função decipherCharCode(charcodedMessage), com charcodedMessage como argumento;

        INÍCIO DA FUNÇÃO decipherCharCode(charcodedMessage) {
          DEFINIR uma array auxiliar vazia chamada aux4;
          PARA CADA (elemento DE charcodedMessage) {
            SE (o número for > 96) {
              INSERIR o resultado da fórmula "(charCode - 122 - 33) % 26 + 122)" no final de aux4;
            } MAS SE (o número for < 91 e diferente de 32) {
              INSERIR o resultado da fórmula "(charCode - 90 - 33) % 26 + 90)" no final de aux4;
            } SENÃO {
              INSERIR no final de aux4 o charcode "32";
            }
            RETORNAR array aux4;
        }
        FIM DA FUNÇÃO.

>Portanto, a função decipherCharCode irá descriptografar a array de charcodes (charcodedMessage) seguindo a fórmula do algorítmo de Luhn fornecida. O resultado da descriptografia será inserido na variável decipheredCharCode.

      DEFINIR uma variável chamada decryptedMessage como o resultado da função transformInLetters(array), com decipheredCharCode como argumento;

        INÍCIO DA FUNÇÃO transformInLetters(cipheredCharCode) {
          DEFINIR uma variável chamada aux3 como uma string formada a partir da sequênciade charCodes da array cipheredCharCode;
          RETORNAR a array aux3;
        }
        FIM DA FUNÇÃO.

>Portanto, a função transformInLetters transformará o charcode descriptografado (decipheredCharCode) em uma string trocando cada charcode da array por sua letra correspondente na tabela ASCII. A mensagem descriptografada em forma de letras será armazenada na variável decryptedMessage.

      IMPRIMIR na página a mensagem "Esta é a sua mensagem descriptografada " + decryptedMessage;
    }
    FIM DA FUNÇÃO.

>Portanto, a função decipher(encryptedMessage):
>1) Transforma a mensagem criptografada pelo usuário em uma array composta pelo charcode de cada letra da mensagem;
>2) Descriptografa os charcodes da array;
>3) Transforma os charcodes descriptografados novamente em letras e os junta em uma string.
>4) Imprime na página a mensagem do usuário descriptografada.

## FLUXOGRAMA

![Fluxograma da validação de número de cartão de crédito] (https://raw.github.com/purplepix/laboratoria/master/__imagens/fluxograma-cifra-de-cesar.jpeg)
