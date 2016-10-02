/*
Longest Palindrome

Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

Examples

Input														Output

string:
"aibohphobia"										"aibohphobia"

string:
"My dad is a racecar athlete"		"a racecar a"

*/

///Solution///

function longestPalindrome (string) {
  var largest = "";

  // Check if each letter is the "center" of a palindrome.
  for(var i=0; i<string.length; i++) {
    var offset = 1;
    
    
    // The super long while loop statements are checking if the 
    // letter on each side is the same.
    // If it is the same
    //   check against the longest (submitPalindrome)
    //   increase offset to check more letters
    
    // Odd     >>>    ababa
    while(string.charAt(i-offset) && string.charAt(i+offset) 
     && string.charAt(i-offset) === string.charAt(i+offset)){
      submitPalindrome(string.slice(i-offset, i+offset+1));
      offset++;
    }

    // Evens   >>>     abba
    while(string.charAt(i-offset) && string.charAt(i+1+offset) 
     && string.charAt(i-offset) === string.charAt(i+1+offset)){
      submitPalindrome(string.slice(i-offset, i+1+offset+1));
      offset++;
    }
  }
  
  return largest;
  
  function submitPalindrome(newPal){
    // If new palindrome is bigger or as long as current longest
    // replace the current longest palindrome
    if(newPal.length >= largest.length)
      largest = newPal;
  }
}

