/**
 * This function eceive a message, and return the secret square code version of
 * the message.
 * @param {string} message - Enter message to encode
 * @returns {string} Outputs encoded message
 */
const squareCode = function (message) {
  //Remove all the whitespaces from the message
  message = message.replace(/\s/g, "");

  //Create the varialbe that will store the encoded message
  let encodedMessage = "";

  //Calculate the number of collumns necessary to display the message in a
  //square or square like shape
  let collumnCount = Math.ceil(Math.sqrt(message.length));

  //This for loop seperate the differents section of the encoded message
  for (let i = 0; i < collumnCount; i++) {
    //This nested for loop adds every character that as an index + 1 divisible
    //by collumnCount
    for (let y = i; y < message.length; y += collumnCount) {
      encodedMessage += message[y];
    }
    encodedMessage += " ";
  }
  return encodedMessage.trim();
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
