/*
Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Example

[
  '  *  ', 
  ' *** ', 
  '*****'
]

*/

///Solution///

function towerBuilder(floors) {
  var tower = [], width = (floors - 1) * 2 + 1;
  for (var i = 0; i < floors; i++) {
    var space = ' '.repeat(Math.floor(width / 2) - i);
    tower.push(space + '*'.repeat(i * 2 + 1) + space);
  }
    
  return tower;
}