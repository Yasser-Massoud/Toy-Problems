/*
Words within Words

Given an array of unique words, find the word that contains the greatest number of other words.
A word must be at least two letters long. 
For an added challenge, try for O(n).


Examples

Input														Output

wordList: 	 
["gray", "grays",
"ray", "rays", "strays"]				"grays"

*/

///Solution///

function nestedWordCount (wordList) {
  let count, result, highestCount = 0;
  //Loop through wordList
  for(let i=0; i<wordList.length; i++){
    count = 0;
    //Compare all other words to the current word
    for (let j=0; j<wordList.length; j++){
      if (wordList[i].includes(wordList[j])){
        count++; //Increase count if true
      }
    }
    //Retain the highest count and associated word
    if (count > highestCount) {
      highestCount = count;
      result = wordList[i];
    }
  }
  return result;
}