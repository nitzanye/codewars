// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

// ! 2. Remove the minimum 

// Given an array of integers, 
// remove the smallest value. 
// Do not mutate the original array/list. 
// If there are multiple elements with the same value, 
// remove the one with a lower index. 
// If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

// Examples: 
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

let numbers = [1,2,3,4,5];
let numbers2 = [5,3,2,1,4];
let numbers3 = [2,2,1,2,1];
let numbers1 = [1];

function removeSmallest(numbers) {
  const smallest = Math.min(...numbers);
  const index = numbers.indexOf(smallest);
  const results = numbers.filter((n, i) => i !== index);
  return results;
}

console.log(removeSmallest(numbers3));