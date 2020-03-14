/*
Description:

Task:

Write a function `add` which takes two binary numbers as strings and returns their sum as a string.

Note:

You are not allowed to convert binary to decimal & vice versa.
The sum should contain No leading zeroes.
*/

/*
*Pseudo code
small operation of adding binaries
  1. add the two ints starting from the right
      set a var to remainder = 0
      if there is a remainder add it as well 
  2. from the solution:
      a) 0 unshift 0
      b) 1 unshift 1
      c) 2 unshift 1 set remainder to 1
While there are still integers to add together from the binary numbers perform the operation above      
  else 
  check to see if the remainder is 1 then add it to the remaining binary number
  else unshift the rest of the remaining integers in the longer binary number
*/

///Solution///
function add(a, b) {
  // Happy Coding ^_^
  num1 = a.split('');
  num2 = b.split('');

  while (num1.length != num2.length) {
    if (num1.length > num2.length) num2.unshift('0');
    else num1.unshift('0');
  }
  var temp = 0;
  var res = [];

  for (var i = num1.length - 1; i >= 0; i--) {
    var temp2 = Number(num1[i]) + Number(num2[i]) + Number(temp);
    if (temp2 > 2) {
      temp2 = 1;
      temp = 1;
    } else if (temp2 == 2) {
      temp2 = 0;
      temp = 1;
    } else temp = 0;
    res.unshift(temp2);
  }

  if (temp == 1) res.unshift('1');

  while (res[0] != 1 && res.length > 1) {
    res.shift();
  }
  return res.join('');
}

function add(a, b) {
  a = trim0(a);
  b = trim0(b);

  if (b.length > a.length) {
    tmp = a;
    a = b;
    b = tmp;
  }

  result = '';
  carry = false;

  for (i = 1; i <= a.length; i++) {
    if (a[a.length - i] === '1' && b[b.length - i] === '1') {
      if (carry) result = '1' + result;
      else result = '0' + result;
      carry = true;
    } else if (a[a.length - i] === '1' || b[b.length - i] === '1') {
      if (carry) {
        result = '0' + result;
        carry = true;
      } else {
        result = '1' + result;
        carry = false;
      }
    } else {
      if (carry) result = '1' + result;
      else result = '0' + result;
      carry = false;
    }
  }

  if (carry) result = '1' + result;

  return result;
}

function trim0(str) {
  if (str.length === 1) {
    return str;
  }

  while (str[0] === '0') {
    str = str.substr(1);
  }

  return str;
}
