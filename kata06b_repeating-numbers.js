//Define function will return a string with each of the given values repeated
//the appropriate number of times, if there are multiple sets of values each set
//should be separated by a comma. If there is only one set of values then you
//should omit the comma.
const repeatNumbers = function (numbers) {
  //Define variable that will store the returned string
  let repeatedNumbers = "";

  //Loop through the array of pairs
  for (let j = 0; j < numbers.length; j++) {
    //Concatenate the number to the string stored in the repeatedNumbers
    //variable for i amout of time.
    for (let i = numbers[j][1]; i > 0; i--) {
      repeatedNumbers += numbers[j][0];
    }

    //Add a comma if the previous iteration of the inner loop was not the final
    //one
    if (j < numbers.length - 1) {
      repeatedNumbers += ", ";
    }
  }

  //Return the final string
  return repeatedNumbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
