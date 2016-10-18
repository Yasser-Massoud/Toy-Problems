/*
Roman Numeral Converter

Convert the given number into a roman numeral.
*/

///Solution///

function convertToRoman(num) {
  var decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';
  
  for (var i = 0; i < decimal.length; i+=1){
    while(decimal[i] <= num){
      romanized += roman[i];
      num -= decimal[i];
    }
  }
  
 return romanized;
}
