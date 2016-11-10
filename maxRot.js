/*
Rotate for a max

Description:

Take a number: 56789. Rotate left, you get 67895.

Keep the first digit in place and rotate left the other digits: 68957.

Keep the first two digits in place and rotate the other ones: 68579.

Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers:

56789 -> 67895 -> 68957 -> 68579 -> 68597

and you must return the greatest: 68957.

Calling this function max_rot (or maxRot or ... depending on the language)

max_rot(56789) should return 68957

*/

function maxRot(n){
  var arr = [n];
  var str = n.toString();
  var len = str.length;
  for(var i = 2; i <= len;i++) {
    var hold = str.slice(0,i-2);
    var shift = str.slice(i-2,i-1);
    var remain = str.slice(i-1);
    str = hold+remain+ shift;
    arr.push(Number(str));
  }
  return Math.max.apply(null, arr);
}