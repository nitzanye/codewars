// https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

// ! 6. esreveR

// * Write a function reverse which reverses a list 
// * (or in clojure's case, any list-like data structure)
// * (the dedicated builtin(s) functionalities are deactivated)

// Testing: 
let array = [ 14, 1, null, 'two' ];
// let array = [1, 2, 3];

reverse = (array) => array.map(array.pop, [...array]);

console.log(reverse(array));