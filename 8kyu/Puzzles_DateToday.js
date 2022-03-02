// Challenge:
Is the date today

Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.


// My Solution:
function isToday(date) {
  const today = new Date()
  return date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
}

// Other Solutions:
function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}

const isToday = date => date.toDateString() === new Date().toDateString()

function isToday(date) {
  var d = new Date();
  return (d.getDate() == date.getDate() && d.getFullYear() == date.getFullYear() && d.getMonth() == date.getMonth());
}