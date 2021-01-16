//Function that receive an input string and one or more casing options then
//return a new string that is formatted based on casing options
const makeCase = function(input, caseParameters) {
  
  //SETTING UP THE FUNCTION VARIABLES
  //Clean the input string and assign it to a variable string
  let string = input.trim();

  //Devide the string in an array of words
  let arrayOfWords = string.split(" ");

  //Array that will store all the case parameters 
  let parameters = [];
  
  //EVALUATING THE TYPE OF INPUT 
  //If the input is a string, push it in the parameter index. Otherwise,
  //transfer the array to the parameters variable
  if (typeof(caseParameters) === "string") {
    parameters.push(caseParameters);
  } else if (typeof(caseParameters) === "object") {
    parameters = caseParameters
  } else {
    return "ERROR: Wrong input for case seeting. Please provide a string or an array of strings"
  }

  //Loop through the parameters to apply them one by one
  for (let parameter of parameters) {
    switch (parameter) {
      
      //Convert to camel case
      case "camel":
        string = arrayOfWords[0]
        for (let i = 1; i < arrayOfWords.length; i++) {
          string += arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
        }
        break;

      //Convert to pascal case
      case "pascal":
        string = "";
        for (let i = 0; i < arrayOfWords.length; i++) {
          string += arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
        }
        break;

      //Convert to snake case
      case "snake":
        string = string.replace(/\s/g, "_");
        break;

      //Convert to kebab case
      case "kebab":
        string = string.replace(/\s/g, "-");
        break;
      
      //Convert to title case
      case "title":
        string = "";
        for (let i = 0; i < arrayOfWords.length; i++) {
          string += arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1) + " ";
        }
        string = string.trim()
        break;

      //Convert to vowel upper case
      case "vowel":
        string = string.replace(/[aeiou]/g, function(x) {
          return x.toUpperCase();
        })
        break;

      //Convert to consonant upper case
      case "consonant":
        string = string.replace(/[bcdfghjklmnpqrstvwxzy]/g, function(x) {
          return x.toUpperCase();
        })
        break;

      //Convert to upper case
      case "upper":
        string = string.toUpperCase()
        break;

      //Convert to lower case
      case "lower":
        string = string.toLowerCase()
        break;
    }
  }
 return string;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));