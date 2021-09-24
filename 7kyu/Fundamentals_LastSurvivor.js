// Challenge
Last Survivor

You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'

Notes

    The given string will never be empty.
    The length of the array is always one less than the length of the string.
    All numbers are valid.
    There can be duplicate letters and numbers.



console.log(lastSurvivor('abc', [1, 1]), 'a')
console.log(lastSurvivor('kbc', [0, 1]), 'b')   

// My Solution:
function lastSurvivor(letters, coords) {
  letters = letters.split('');
  for (let i = 0; i < coords.length; i++) {
    letters.splice(coords[i], 1)
  }
  return letters.join('')
}

// Other Solutions:
function lastSurvivor(letters, coords) {
  let result = letters.split('');
  for (let i of coords) {
      result.splice(i, 1);
  }
  
  return result.join('');
}


function lastSurvivor(string, indices) {
  const arr = [...string];
  for (const i of indices) arr.splice(i, 1)
  return arr[0];
}