// Create a function named urlEncode that will receive a string of words, and
// return that string with all of the whitespace characters converted to %20. If
// there is whitespace on the outside of the string, like in our second example
// above, you should only replace the whitespace within the string.
const urlEncode = function(text) {
  //Define variable that will store the URL encoded string
  let urlEncodedString = "";

  //Loop through all the characters of the string to find whitespaces. Trim the
  //whitespaces at the begining and end of string.
  for (let character of text.trim()) {
    //Check whether character is a whitespace. If true, replace by "%20"
    switch (character) {
      case " ":
        urlEncodedString += "%20";
        break;
      
      default:
        urlEncodedString += character;
    }
  }
  //return the URL encoded string
  return urlEncodedString
};

//Print examples to the console
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));