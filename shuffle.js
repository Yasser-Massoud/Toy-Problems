/*
Shuffle Deck

Given an array containing a deck of cards, implement a function that shuffles the deck.
 */

 ///Solution///

 var shuffleDeck = function(deck) {
  var i = deck.length;
  while (i !== 0) {
    var randomNumber = Math.random() * i;
    var roundedNumber = Math.floor(randomNumber);
    var nextItem = deck[i - 1];
    deck[i - 1] = deck[roundedNumber];
    deck[roundedNumber] = nextItem;
    i--;
  }
  return deck;
}

