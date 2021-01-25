// Function that receives a number maxValue as input and creates a square
// multiplication table where maxValue is the largest value in the table. User
// can toggle the table formating true or false.
const multiplicationTable = function (maxValue, tableFormatingToggle) {
  // Define the variable where the table is going to be stored
  let returnedTable = "";

  // Define the formating settings of the table
  let tableFormating = {
    // Toogle table formating
    activated: tableFormatingToggle,

    // Adjust collumn width automaticly to the longest number
    columnWidth: (maxValue ** 2).toString().length,
  };

  // Build the table
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      // Add a space before all entry but the first in line
      if (j > 1) {
        returnedTable += " ";
      }

      // If formating ON
      if (tableFormating.activated === true) {
        // Calculate the multiplication and convert to string
        let tmp = (i * j).toString();

        // Add whitespace to the string to reach the formating requirement
        for (let k = tmp.length; k < tableFormating.columnWidth; k++) {
          tmp += " ";
        }

        // Append the string to the table
        returnedTable += tmp;

        // If formating Off
      } else {
        // Calculate the multiplication and convert to string and append to the table
        returnedTable += (i * j).toString();
      }
    }
    // Start a new line after multiplicating with the maxValue
    returnedTable += "\n";
  }

  // return the multiplication table
  return returnedTable;
};

console.log(multiplicationTable(1, true));
console.log(multiplicationTable(5, true));
console.log(multiplicationTable(10, true));
