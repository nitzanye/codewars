// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// ! 4. Descending Order

// TODO Your task is to make a function that can take any non-negative integer as an argument 
// TODO and return it with its digits in descending order. 
// TODO Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321


function descendingOrder(n){
  const sorted = Array.from(String(n), Number).sort((a, b) => b - a);
  return Number(sorted.join(""));
}

console.log(descendingOrder(1021));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
