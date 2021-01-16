//Function that return the sum of the two largest numbers of a given array
function sumLargestNumbers(array) {
  //Define variable for the two largest numbers
  let largestNumber = 0;
  let secondLargestNumber = 0;

  //Find the largest number in the array
  for (let number of array) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  //Find the second largest number in array
  for (let number of array) {
    if (number > secondLargestNumber && number < largestNumber) {
      secondLargestNumber = number;
    }
  }
  //Return the sum of the two largest number
  return largestNumber + secondLargestNumber;
}

//Log example results to the console
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));