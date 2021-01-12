//Function that will receive a string and return the number of vowels in that
//string.
const numberOfVowels = function(string) {
  //Define varibale sum that will store the number of vowels
  let sum = 0;

  //Define an array that store vowels for references
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  //For...Of loop that will go through all the letters of the given string
  for (let letter of string) {
    if (vowels.indexOf(letter) != -1) {
      sum++;
    }
  }
  //Return the sum of vowels
  return sum;
};

//Print examples to the console
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));