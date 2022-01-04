// Challenge:
Billiards triangle

Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

For more examples,

pyramid(1) == 1

pyramid(3) == 2

pyramid(6) == 3

pyramid(10) == 4

pyramid(15) == 5

Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.



// My Solution:
function pyramid(balls) {
  return Math.floor((Math.sqrt(balls * 8 + 1) - 1) / 2);
}


// Other solutions:
function pyramid(balls) {
  let count = 0;
  let ballsPerRow = 0;
  
  for(let x=0; x<balls; x++) {
    count++;
    ballsPerRow = ballsPerRow + count;
    if(ballsPerRow == balls) {
      return count;
    }
    if(balls < ballsPerRow) {
      return count - 1;
    }
  }
}


function pyramid(balls) {
    let count = 0;
   let ballsPerRow = 0;
   
   for(let x=0; x<balls; x++) {
      // count per row    
     count++;// count = 1
     
     // count balls per row
     ballsPerRow = ballsPerRow + count;
     
     // is balls per row is equal to input
     if(ballsPerRow == balls) {
       // if true return count per row
       return count;
       //return 1
     };
     // is input less than balls per row
     if(balls < ballsPerRow) {
       // if true return count per row then minus one
       return count - 1;
       //return 0
     }
   }
  }