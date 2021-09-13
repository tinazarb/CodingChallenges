// Challenge
USD => CNY

Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

For Example:

  usdcny(15)  => '101.25 Chinese Yuan'
  usdcny(465) => '3138.75 Chinese Yuan'

The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")


// My Solution:
function usdcny(usd) {
  return (usd *  6.75).toFixed(2) + ' Chinese Yuan'
}

// Other Solutions:
usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;

const usdcny = usd => `${(usd*6.75).toFixed(2)} Chinese Yuan`;

function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + " Chinese Yuan";
}