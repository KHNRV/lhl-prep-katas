//Allows input from the user in CLI
let prompt = require("prompt-sync")();

/**
 * This is a guessing game where the user has to guess a secret number. After
 * every guess the program tells the user whether their number was too large or
 * too small. At the end, the number of tries needed should be printed.
 * @param {number} maxNumber - Enter an integer to choose the highest possible
 * @returns {string} Outpouts a victory message with the number of attempts
 */
function numberGuesser(maxNumber) {
  //Generate the number to guess
  const numberToGuess = Math.ceil(Math.random() * maxNumber);

  //Variable to track if a number already been provided
  const historyOfAnswers = [];

  //Variable to track the number of attempts
  let numberOfAttempts = 0;

  //Variable that will store the last answer
  let answer;

  //Keep asking for a number while the random number haven't been gueesed
  while (Number(answer) !== numberToGuess) {
    //Ask the user for a guess
    answer = prompt("Guess a number: ");

    //Quit the application
    if (answer === "quit") {
      return "Goodbye";
    }

    //Verify if the answer is a number
    if (isNaN(answer)) {
      console.log("Not a number! Try again!");
      continue;
    }

    //Verify if the number have already been given
    if (historyOfAnswers.indexOf(answer) >= 0) {
      console.log("Already Guessed!");
      continue;
    }

    //Evaluate if the guess is too low or too high
    if (answer < numberToGuess) {
      console.log("Too Low!");
    } else if (answer > numberToGuess) {
      console.log("Too High!");
    }

    //Only the guess is a number that have not been given before:
    // - Push the guess to the history
    // - Count the attempt
    historyOfAnswers.push(answer);
    numberOfAttempts++;
  }

  //Return the victory message with the number of attempts
  return `You got it! You took ${numberOfAttempts} attempts!`;
}

//Create a varaible to store the hisghest random number for the game
let maxNumber;

//Ask for a maxNumber as long as a valid number as not been given
do {
  maxNumber = Number(
    prompt("What is the highest number you want to be able to find: ")
  );
} while (isNaN(maxNumber));

//Display the game
console.log(numberGuesser(maxNumber));
// let answer = prompt("Guess a number: ");
// console.log("You answered: " + answer);
