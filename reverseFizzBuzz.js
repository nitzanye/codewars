// FizzBuzz in Reversed Version

// Fizz = number devided by 3
// Buzz = number devided by 5
// FizzBuzz = number devided by 3 and 5

let testArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const fizzbuzz = (array) => {
  return array
    .map((num) => {
      let fizz = num % 3 === 0;
      let buzz = num % 5 === 0;
      let fizzbuzz = fizz && buzz;
      if (fizzbuzz) {
        return 'FizzBuzz';
      } else if (fizz) {
        return 'Buzz';
      } else if (buzz) {
        return 'Fizz';
      } else return num;
    })
    .reverse();
};

console.log(fizzbuzz(testArray));
