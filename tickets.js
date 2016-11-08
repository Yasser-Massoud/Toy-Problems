/*
tickets

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. 
A "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. 
He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

Examples:

// === JavaScript ==  //

tickets([25, 25, 50]) // => YES 
tickets([25, 100])    
        // => NO. Vasya will not have enough money to give change 

*/

///Solution///

function tickets(peopleInLine){
	var x = {
		one: 0,
		two: 0,
		three: 0
	}
	var result = 'YES';
	for(var i = 0; i<peopleInLine.length; i++){
		var money = peopleInLine[i];
		if (money === 25){
			x.one += 1;
		}
		if (money > 25){
			if(x.one < 1){
			  result = 'NO';
			}
			
		}
		if (money === 50){
			x.two += 1;
			x.one -= 1;
		}
		if (money === 100){
			x.three += 1;
			if (x.two > 0){
				x.two -= 1;
				x.one -=1;
			}else if (x.one >= 3){
				x.one -= 3;
			}else{
				result = 'NO'
			} 
		}
	}
	return result;
}