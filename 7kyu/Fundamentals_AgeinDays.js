// Challenge:
Age in days

Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"

The birthday is expected to be in the past.

Suggestions on how to improve the kata are welcome!



// My Solution:
function ageInDays(year, month, day){
  var a=new Date(year, month-1, day)
  var b=new Date()
  return 'You are '+Math.floor((b.getTime()-a.getTime())/(1000*60*60*24))+' days old'

}
// Other solutions:
const ageInDays = (y, m, d) => 'You are ' + (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000 + ' days old';

function ageInDays(y, m, d){
  var today=new Date(),birth=new Date(y,m-1,d),days=~~((today-birth)/86400000)
  return `You are ${days} days old`;
}

