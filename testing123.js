// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// ! 7. Testing 1-2-3

// * Write a function which takes a list of strings and returns each line prepended by the correct number.
// * The numbering starts at 1. 
// * The format is n: string. 
// * Notice the colon and space in between.

// * Examples: (Input --> Output)
// * [] --> []
// * ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let array = ["a", "b", "c"];

const number = (array) => {
 return array.map((item, index) => {
  return `${index + 1}: ${item}`;
 });
}

console.log(number(array));