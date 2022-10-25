// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript

// ! 8. Convert an array of strings to array of nembers

let array = ["1", "2", "3"];

const toNumberArray = (stringarray) => stringarray.map((string) => Number(string));

console.log(toNumberArray(array));


// output [1, 2, 3];