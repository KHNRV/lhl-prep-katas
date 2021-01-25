//Function that will convert a string to camel case, and return the result.
const camelCase = function (string) {
  //Define the variable that will store the string in camel case
  let encoded = "";

  //Clean the string before use by deleting superfluous whitespaces
  let cleanString = string.trim();
  cleanString = cleanString.replace(/\s+/g, " ");

  //Loop through every character of the string
  for (let i = 0; i < cleanString.length; i++) {
    //check if the character is a white space
    if (cleanString[i] === " ") {
      //if character is white space, append the following character to the string
      encoded += cleanString[i + 1].toUpperCase();

      //and skip the next character
      i++;

      //otherwise, just append the character to the string
    } else {
      encoded += cleanString[i];
    }
  }

  //return camel cased string
  return encoded;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("       loopy     lighthouse    "));
