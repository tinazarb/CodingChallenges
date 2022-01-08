// Challenge:
Deodorant Evaporator

This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.
Example:

evaporator(10, 10, 5) -> 29

Note:

Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.


// My Solution:
function evaporator(content, evap_per_day, threshold){ 
  let i = 0
  let current = content
  while (current >= content * threshold/100.0){
    current = current * (1 - evap_per_day/100.0)
        i += 1
  } return i
}



// Other Solutions:
function evaporator(content, evap_per_day, threshold){ 
  threshold = threshold / 100
  evap_per_day = evap_per_day / 100
  return  Math.ceil(Math.log(threshold) / Math.log(1-evap_per_day))
}

function evaporator(content, evap_per_day, threshold){ 
var days = 0;
var gas = 100;
  while(gas >= threshold){
    gas -= gas * evap_per_day / 100;
    days++;
}
  return days;
}

function evaporator(content, evap_per_day, threshold){ 
var byvol = content*(threshold/100);
var result = content;
var i = 0;
while (result > byvol){
  result = result - (result*(evap_per_day/100));
  i++;
}
return i;
}