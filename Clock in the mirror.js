/*
Description:

Clock in Mirror

Peter can see a clock in the mirror from the place he sits in the office. 
When he saw the clock shows 12:22
He knows that the time is 11:38
in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the method which is provided with mirror time as string, 
and return the real time as string.
*/


function WhatIsTheTime(timeInMirror) {
    var hourHand, minuteHand, realTime;
    timeInMirror = timeInMirror.split("");
    timeInMirror[2] = '.'
    minuteHand = timeInMirror.slice(2).join('')
    if(parseFloat(minuteHand)> 0){
      minuteHand = 0.60 - parseFloat(minuteHand);
    }else{
      minuteHand = 0.00
    }
    
    hourHand = timeInMirror.slice(0,2).join('');
    hourHand = 12 - parseInt(hourHand);
    if (minuteHand > 0) {
        if (hourHand === 1){
            hourHand = 12;
            realTime = hourHand + minuteHand;
        }
        else if (hourHand === 0) {
            hourHand = 11;
            realTime = hourHand + minuteHand;
        }else{
            realTime = hourHand - 1 + minuteHand;
        }
        
    }else{
        realTime = hourHand +".00";
    }
    realTime = realTime + "";
    realTime = realTime.split('');
    if(realTime.length != 5){
        realTime.unshift('0');
    }
    if(realTime.length != 5) {
        realTime.push('0');
    }
    realTime[2] = ':';
    return realTime.join('')==='00:00'? '12:00': realTime.join(''); 
}
