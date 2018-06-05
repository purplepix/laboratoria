var num1;
var num2;
var num3;

var a;
var b;
var c;

function result (num1,num2,num3) {

  a = num1 <= 5;
  b = num2 >= 5;
  c = num3 % 2 === 0;


  if ((isNaN(num1) || isNaN(num2) || isNaN(num3)) === true) {
    return null;
  } else if (a && b && c) {
    return (num1 + num2) / num3;
  } else if (a && b) {
    return num1 + num2;
  } else if (a && c) {
    return num1 + num3;
  } else if (b && c) {
    return num2 + num3;
  } else if (a === true) {
    return num1;
  } else if (b === true) {
    return num2;
  } else if (c === true) {
    return num3;
  } else if ((a || b || c) === false) {
    return false;
  }

}

//testar com qualquer
//result(8,3,7);
