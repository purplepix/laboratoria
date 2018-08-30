$( document ).ready(function() {
  $('button').on('click', showModal);
  $('.close').on('click', closeModal);
  $('#cardnumber-input').on('keydown', getCardNumber); 
});

const showModal = () => {
  $('.result').remove();
  $('.error').remove();
  $('#modal').css('display', 'block');
};
const closeModal = () => $('#modal').css('display', 'none');
const emptyInput = () => $('#cardnumber-input').val('');

const getCardNumber = (e) => {
  const cardNumber = $('#cardnumber-input').val().replace(/ +/g, '');
  if (e.which === 13) {
    emptyInput();
    if (cardNumber.trim().length === 0) {
      $('.error').remove();
      $('#cardnumber-input').after('<p class="error w-100">Este campo não pode ficar vazio.</p>');
    } else if (cardNumber.match(/[^\d]+/)) { 
      $('.error').remove();
      $('#cardnumber-input').after('<p class="error w-100">Este campo só aceita números.</p>');
    } else {
      closeModal();
      $('.error').remove();
      isValidCard(cardNumber);
    }
  }
} 

const isValidCard = cardNumber => {
  const invertedCardNumberArray = cardNumber.toString().split('').reverse().map(n => parseInt(n));
  const doubledCardNumber = doubleEverySecondDigit(invertedCardNumberArray);
  const sumCardDigits = doubledCardNumber.reduce((sum, n) => sum + n, 0);

  const result = (sumCardDigits % 10 === 0) ? 
    $('#result').html('<p class="result">O cartão de crédito inserido é <span class="true">válido</span>.</p>') : 
    $('#result').html('<p class="result">O cartão de crédito inserido <span class="false">não é válido</span>.</p>');
  return result;
};

const doubleEverySecondDigit = array => array.map((n, index) => {
  if (index % 2 !== 0) 
    n *= 2;
    if (n > 9) n -=9;
  return n;  
});
