//Define a function that will be given an array of numbers and a condition, in
//this case odd or even. Given this condition, add up only the values which
//match that condition. If no values match the condition, return 0.
const conditionalSum = function (array, condition) {
  //Define a sum variable that will store the sum of the numbers
  let sum = 0;
  //Switch statment that evaluate if the 'odd' or 'even' scenario should run. A
  //default scenario has bee added in case a wrong condition as been given.
  switch (condition) {
    case "even":
      for (let number of array) {
        if (number % 2 === 0) {
          sum += number;
        }
      }
      return sum;
      break;

    case "odd":
      for (let number of array) {
        if (number % 2 === 1) {
          sum += number;
        }
      }
      return sum;
      break;

    default:
      return "Sorry, your condition is not valid. Please enter 'odd' or 'even'.";
  }
};
//Print examples to the console
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
