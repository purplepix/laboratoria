# Validador de número de cartão de crédito

O site é um validador de número de cartão de crédito. Após o usuário inserir um número a ser testado, retorna válido ou inválido, segundo o algoritmo de Luhn. 

Trabalho realizado em junho de 2018 como produto final do Sprint 1 da Laboratória e refatorado em setembro de 2018. 

## Requisitos 

Os requisitos deste desafio eram:

- Utilizar o algoritmo de Luhn no validador;
- Chamar uma única função (isValidCard) para realizar a validação;
- Não permitir o usuário deixar o input que recebe o número do cartão vazio;
- Explicar o raciocínio por trás do código por meio de um fluxograma e um pseudocódigo.

Em setembro de 2018 refatorei o código, realizando as seguintes modificações:

- Troca do prompt principal da página por um modal;
- Nova regra que não permite o usuário inserir letras no campo do número de cartão;
- Atualização do arquivo README.md.

## Conhecimentos empregados

A versão atual da página foi desenvolvida utilizando:

- ECMAScript 6;
- Jquery;
- Expressões regulares;
- Eslint;
- HTML5 e CSS3;
- Flexbox;
- Animações simples.

## Pseudocódigo

>Ao clicar no botão "Inserir número", um modal irá surgir na tela com um campo para o usuário inserir o número de cartão de crédito que deseja testar.

>Após inserir o número, o usuário irá apertar ENTER, dando início à função getCardNumer que irá verificar a informação digitada:

    EVENT LISTENER criado para executar a função getCardNumber a partir de qualquer tecla (keydown) pressionado pelo usuário.

    INÍCIO DA FUNÇÃO getCardNumber = (e) => {
      LIMPAR todos os erros exibidos no modal.

      EXECUTAR REGEX que irá tirar qualquer espaço entre caracteres que o usuário tenha inserido no input e 
      ARMAZENAR o resultado na constante cardNumber;

      SE (a tecla pressionada for ENTER (13)) {
        SE (o campo estiver vazio) {
          INSERIR o erro "Este campo não pode ficar vazio" logo abaixo do input de inserção do número do cartão, dentro do modal.
        } MAS SE (REGEX para capturar qualquer caractere que não seja um número) {
          INSERIR o erro "Este campo só aceita números" logo abaixo do input de inserção do número do cartão, dentro do modal.
        } SENÃO {
          FECHAR o modal;
          EXECUTAR a função isValidCard(cardNumber);
        }
      }
    }

>Se os dados forem inseridos corretamente, a função isValidCard, que irá validar o número do cartão de crédito, será executada:

    INÍCIO DA FUNÇÃO isValidCard = (cardNumber) => {
      DEFINIR uma constante chamada invertedCardNumberArray para ARMAZENAR o resultado das seguintes operações: 
        TRANSFORMAR o número inserido (cardNumber) em uma string,
        SEPARAR cada caractere da string (dígitos do número) em uma array,
        INVERTER a ordem dos caracteres da array,
        EXECUTAR um MAP em cada elemento da array para
        TRANSFORMAR cada caractere (string) em um número novamente;

>Portanto, invertedCardNumberArray será igual ao número do cartão de crédito em ordem inversa e separado dígito a dígito em uma array.

      DEFINIR uma constante chamada doubledCardNumber que recebe o resultado da função doubleEverySecondDigit(invertedCardNumber);

      INÍCIO DA FUNÇÃO doubleEverySecondDigit = (invertedCardNumber) =>
        EXECUTA um MAP no array invertedCardNumber (valor, index) => {
          SE (se o index for ímpar) {
            MULTIPLICA o valor por 2;
            SE (VALOR > 9 ) {
              SUBTRAIR 9 do valor;
            }
          }
          RETORNAR o valor;
        }
      FIM DA FUNÇÃO doubleEverySecondDigit

>Portanto, a array invertedCardNumber terá todos os seus elementos de índex ímpar dobrados. E, caso o resultado dessa multiplicação resulte em um número com dois dígitos, deve-se subtrair 9 do resultado (que é a mesma coisa que somar os dois dígitos). O resultado desse procedimento será armazenado na constante doubledCardNumber.

      DEFINIR uma constante chamada sumCardDigits que recebe o resultado de:
        EXECUTA um REDUCE na array doubledCardNumber => 
          SOMA todos os dígitos da array doubledCardNumber e 
          ARMAZENA o resultado na variável sum.
          RETORNA sum. 

>Portanto, a array sumCardDigits será o resultado da soma de todos os dígitos da array doubledCardNumber.

      DEFINIR uma constante chamada result que verifica
        SE (o resto da divisão de sumCardDigits por 10 for zero) {
          INSERE a mensagem "O cartão de crédito inserido é válido" no HTML.
        } SENÃO {
          INSERE a mensagem "O cartão de crédito inserido não é válido".
        }
      RETORNA result;

    FIM DA FUNÇÃO.

> Portanto, a função isValidCard(cardNumber) irá:
>  1) Separar os dígitos do número informado pelo usuário e inseri-los numa array.
>  2) Inverter a ordem dos dígitos;
>  3) Multiplicar os dígitos de index ímpar por dois.
>  4) Somar todos os dígitos.
>  5) Dividir o resultado da soma por 10 e verificar se há resto na divisão.
>  6) Se houver resto, o cartão é inválido. Se não houver, o cartão é válido.
>  7) Exibir o resultado da verificação na página para o usuário.

## Fluxograma

![Fluxograma da validação de número de cartão de crédito] (docs/fluxograma-validacao-cartao-de-credito.jpeg)
