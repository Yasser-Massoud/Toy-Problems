/*
Given an array containing a deck of cards, implement a function that shuffles the deck. The helper function orderedDeck() is not necessary for your solution; it is provided to create an ordered deck if you debug your code in the console or using snippets.

Example:

 var deck = orderedDeck();
 // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 shuffleDeck(deck);
 // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]

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