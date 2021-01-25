//Function thar receives a URL encoded string, and return the a JavaScript
//object that represents that data.
const urlDecode = function (text) {
  //Define the varibale that will store the returned object
  let objectReturned = {};

  //Store each key=value pair individually in an array and replace %20 by
  //whitespaces
  let arrayOfKeyValue = text.replace(/%20/g, " ").split("&");

  //Add each key-value pair to the returned object
  for (let i = 0; i < arrayOfKeyValue.length; i++) {
    arrayOfKeyValue[i] = arrayOfKeyValue[i].split("=");
    objectReturned[arrayOfKeyValue[i][0]] = arrayOfKeyValue[i][1].toString();
  }

  //Return the object
  return objectReturned;
};

//Test the code
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
