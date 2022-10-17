// https://www.codewars.com/kata/56069d0c4af7f633910000d3

// !5. Filter Coffee

// * You love coffee and want to know what beans you can afford to buy it.
// * The first argument to your search function will be a number which represents your budget.
// * The second argument will be an array of coffee bean prices.
// * Your 'search' function should return the stores that sell coffee within your budget.
// * The search function should return a string of prices for the coffees beans you can afford. 
// * The prices in this string are to be sorted in ascending order.

let prices = [2, 4, 10, 40, 50, 65, 3];

// My Solution
function search(budget, prices) {
  return prices.filter((price) => (price <= budget)).sort((a, b) => a-b).toString();
  }

  console.log(search(10, prices));
