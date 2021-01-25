/**
 * Function that receive an input string and one or more casing options then return a new string that is formatted based on casing options
 * @param  {string} input - String to convert
 * @param  {[string]} parameters - Case conversion parameters : camel; pascal; snake; kebab; title; vowel; consonanr; upper; lower.
 * @returns {string} String case converted according to given parameters.
 */
const makeCase = function (input, parameters) {
  /**
   * This function organise the given parameter by order of priority
   * @param {[string]} parameters - Array of parameters to organise
   * @returns {array} Array of parameters organise by order of priority
   */
  function parametersPriority(parameters) {
    //Priority hierachy of parameters
    const priority = {
      high: ["camel", "pascal", "snake", "kebab", "title"],
      medium: ["vowel", "consonant"],
      low: ["upper", "lower"],
    };
    let orderedParameters = new Array();
    for (const level in priority) {
      for (const parameter of priority[level]) {
        if (parameters.includes(parameter)) {
          orderedParameters.push(parameter);
        }
      }
    }
    return orderedParameters;
  }

  /**
   * This function outputs camelCase strings.
   * @param  {string} str - String to convert
   * @returns {string} String in camelCase
   */
  function camel(str) {
    let arrayOfWords = str.split(" ");
    let returnedStr = arrayOfWords[0];
    for (let i = 1; i < arrayOfWords.length; i++) {
      returnedStr +=
        arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
    }
    return returnedStr;
  }

  /**
   * This function outputs PascalCase strings.
   * @param  {string} str - String to convert
   * @returns {string} String in PascalCase
   */
    function pascal(str) {
    let arrayOfWords = str.split(" ");
    let returnedStr = "";
    for (let i = 0; i < arrayOfWords.length; i++) {
      returnedStr +=
        arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
    }
    return returnedStr;
  }

  /**
   * This function outputs snake_case strings.
   * @param  {string} str - String to convert
   * @returns {string} String in snake_case
   */
  function snake(str) {
    str = str.replace(/\s/g, "_");
    return str;
  }

  /**
   * This function outputs kebab-case strings.
   * @param  {string} str - String to convert
   * @returns {string} String in kebab-case
   */
  function kebab(str) {
    str = str.replace(/\s/g, "-");
    return str;
  }

  /**
   * This function outputs Title Case strings.
   * @param  {string} str - String to convert
   * @returns {string} String in Title Case
   */
  function title(str) {
    let arrayOfWords = str.split(" ");
    str = "";
    for (let i = 0; i < arrayOfWords.length; i++) {
      str +=
        arrayOfWords[i].charAt(0).toUpperCase() +
        arrayOfWords[i].slice(1) +
        " ";
    }
    str = str.trim();
    return str;
  }

  /**
   * This function outputs vOwEl UppEr cAsE strings.
   * @param  {string} str - String to convert
   * @returns {string} String in vOwEl UppEr cAsE
   */
  function vowelUpper(str) {
    str = str.replace(/[aeiou]/g, function (x) {
      return x.toUpperCase();
    });
    return str;
  }

  /**
   * This function outputs CoNSoNaNT uPPeR CaSe strings.
   * @param  {string} str - String to convert
   * @returns {string} String in CoNSoNaNT uPPeR CaSe
   */
  function consonantUpper(str) {
    str = str.replace(/[bcdfghjklmnpqrstvwxzy]/g, function (x) {
      return x.toUpperCase();
    });
    return str;
  }

  //Clean the input string and assign it to a variable string
  let str = input.trim();

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
        str = camel(str);
        break;

      //Convert to pascal case
      case "pascal":
        str = pascal(str);
        break;

      //Convert to snake case
      case "snake":
        str = snake(str);
        break;

      //Convert to kebab case
      case "kebab":
        str = kebab(str);
        break;

      //Convert to title case
      case "title":
        str = title(str);
        break;

      //Convert to vowel upper case
      case "vowel":
        str = vowelUpper(str);
        break;

      //Convert to consonant upper case
      case "consonant":
        str = consonantUpper(str);
        break;

      //Convert to upper case
      case "upper":
        str = str.toUpperCase();
        break;

      //Convert to lower case
      case "lower":
        str = str.toLowerCase();
        break;
    }
  }
  return str;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("  this is a  string  ", ["vowel", "camel"]));
