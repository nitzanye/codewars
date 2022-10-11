// https://www.codewars.com/kata/56747fd5cb988479af000028

// ! 3. Get the Middle Character 
//           You are going to be given a word. 
// TODO       Your job is to return the middle character of the word. 
// TODO       If the word's length is odd, return the middle character. 
// TODO       If the word's length is even, return the middle 2 characters. 

// Examples
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  return s.split().map((word) => {
    let middle = word.length / 2 ;
    if (word.length % 2 !== 0) {
      return word.charAt(middle);
    } else {
      return word.slice(middle-1, middle+1);    
    } 
  }).toString();
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));