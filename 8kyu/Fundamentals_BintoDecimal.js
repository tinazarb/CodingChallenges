// Challenge
Bin to Decimal

Complete the function which converts a binary number (given as a string) to a decimal number.


// My Solution:
function binToDec(bin){
  return parseInt(bin, 2);
}


// Top Solutions:
function binToDec(bin){
  return parseInt(bin,2);
}

const binToDec = bin => parseInt(bin,2);

const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);