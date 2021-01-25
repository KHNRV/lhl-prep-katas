//Function that receive an input string and one or more casing options then
//return a new string that is formatted based on casing options
const makeCase = function (input, parameters) {
  //PRIORITY FUNCTION
  function parametersPriority(parameters) {
    const priority = {
      high: ["camel", "pascal", "snake", "kebab", "title"],
      medium: ["vowel", "consonant"],
      low: ["upper", "lower"],
    };
    let orderedParameters = new Array();
    for (const level in priority) {
      for (const parameter of level) {
        if (parameters.includes(parameter)) {
          orderedParameters.push(parameter);
        }
      }
    }
    return orderedParameters;
  }

  /*
  CASE FUNCTIONS
  Function to convert to camel case
  */
  /**
   * This function outputs camelCase strings.
   * @param  {} string
   */
  function camel(string) {
    let arrayOfWords = string.split(" ");
    let returnedString = arrayOfWords[0];
    for (let i = 1; i < arrayOfWords.length; i++) {
      returnedString +=
        arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
    }
    return returnedString;
  }

  //Function to convert to pascal case
  function pascal(string) {
    let arrayOfWords = string.split(" ");
    let returnedString = "";
    for (let i = 0; i < arrayOfWords.length; i++) {
      returnedString +=
        arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
    }
    return returnedString;
  }

  //Function to convert to snake case
  function snake(string) {
    string = string.replace(/\s/g, "_");
    return string;
  }

  //Function to convert to kebab case
  function kebab(string) {
    string = string.replace(/\s/g, "-");
    return string;
  }

  //Function to convert to title case
  function title(string) {
    let arrayOfWords = string.split(" ");
    string = "";
    for (let i = 0; i < arrayOfWords.length; i++) {
      string +=
        arrayOfWords[i].charAt(0).toUpperCase() +
        arrayOfWords[i].slice(1) +
        " ";
    }
    string = string.trim();
    return string;
  }

  //Function to convert to vowel upper case
  function vowelUpper(string) {
    string = string.replace(/[aeiou]/g, function (x) {
      return x.toUpperCase();
    });
    return string;
  }

  //Function to convert to consonant upper case
  function consonantUpper(string) {
    string = string.replace(/[bcdfghjklmnpqrstvwxzy]/g, function (x) {
      return x.toUpperCase();
    });
    return string;
  }

  //SETTING UP THE FUNCTION VARIABLES
  //Clean the input string and assign it to a variable string
  let string = input.trim();

  //EVALUATING THE TYPE OF INPUT
  //If the input is a string, push it in the parameter index. Otherwise,
  //transfer the array to the parameters variable
  if (typeof parameters === "string") {
    parameters = [parameters];
  } else if (typeof parameters === "object") {
    parameters = parametersPriority(parameters);
  }

  //Loop through the parameters to apply them one by one
  for (let parameter of parameters) {
    switch (parameter) {
      //Convert to camel case
      case "camel":
        string = camel(string);
        break;

      //Convert to pascal case
      case "pascal":
        string = pascal(string);
        break;

      //Convert to snake case
      case "snake":
        string = snake(string);
        break;

      //Convert to kebab case
      case "kebab":
        string = kebab(string);
        break;

      //Convert to title case
      case "title":
        string = title(string);
        break;

      //Convert to vowel upper case
      case "vowel":
        string = vowelUpper(string);
        break;

      //Convert to consonant upper case
      case "consonant":
        string = consonantUpper(string);
        break;

      //Convert to upper case
      case "upper":
        string = string.toUpperCase();
        break;

      //Convert to lower case
      case "lower":
        string = string.toLowerCase();
        break;
    }
  }
  return string;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
