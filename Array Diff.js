/*
Array Diff

Your goal in this kata is to implement an difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b.

difference([1,2],[1]) == [2]

*/

///Solution///

function arrayDiff(a, b) {
  return a.filter(function (item) {
    return b.indexOf(item) < 0;
  });
}


