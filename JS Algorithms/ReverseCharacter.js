// Challenge:

Given a phrase, reverse the order of the characters of each word.

describe("Reverse Words", () => {
 it("Should reverse words", () => {
  assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
 });
});

No Reverse Method! Unless that is your brute force...

// My Solution:
function reverseWords(str){
  const revWords = [];
  str.split(" ").forEach(w=> {
    let currentWordRev = "";
    for (let i = w.length -1; i>=0; i--) {
      currentWordRev += w[i]
    }
    revWords.push(currentWordRev)
  })
  return revWords.join(" ")
}

//Alternate solution:
function reverseWords(str){
  return str.split(" ")
  .map ( w =>
    w.split("")
    .reverse()
    .join("")
    )
    .join(" ")
}