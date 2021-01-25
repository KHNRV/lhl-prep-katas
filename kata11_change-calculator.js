//Fucntion that takes in a total amount of a bill and the total cash given to
//pay that bill. Return a new object that describes the total amount of change
//for the cashier to give back.
const calculateChange = function (total, cash) {
  //Define the change variable that will store the returned value (aka that cash
  //to give back).
  let change = {};

  //Define a variable to store the cash that has yet to be assigned to a type of
  //change
  let cashLeftToCompute = cash - total;

  //While there is cash left to compute, run the following conditionnal statment
  while (cashLeftToCompute > 0) {
    //Assign cash left to a type of change and then substract that amount from
    //cashLeftToCompute
    switch (true) {
      case cashLeftToCompute / 2000 >= 1:
        change.twentyDollars = Math.floor(cashLeftToCompute / 2000);
        cashLeftToCompute = cashLeftToCompute % 2000;
        break;

      case cashLeftToCompute / 1000 >= 1:
        change.tenDollars = Math.floor(cashLeftToCompute / 1000);
        cashLeftToCompute = cashLeftToCompute % 1000;
        break;

      case cashLeftToCompute / 500 >= 1:
        change.fiveDollars = Math.floor(cashLeftToCompute / 500);
        cashLeftToCompute = cashLeftToCompute % 500;
        break;

      case cashLeftToCompute / 200 >= 1:
        change.twoDollars = Math.floor(cashLeftToCompute / 200);
        cashLeftToCompute = cashLeftToCompute % 200;
        break;

      case cashLeftToCompute / 100 >= 1:
        change.oneDollar = Math.floor(cashLeftToCompute / 100);
        cashLeftToCompute = cashLeftToCompute % 100;
        break;

      case cashLeftToCompute / 25 >= 1:
        change.quarter = Math.floor(cashLeftToCompute / 25);
        cashLeftToCompute = cashLeftToCompute % 25;
        break;

      case cashLeftToCompute / 10 >= 1:
        change.dime = Math.floor(cashLeftToCompute / 10);
        cashLeftToCompute = cashLeftToCompute % 10;
        break;

      case cashLeftToCompute / 5 >= 1:
        change.nickel = Math.floor(cashLeftToCompute / 5);
        cashLeftToCompute = cashLeftToCompute % 5;
        break;

      case cashLeftToCompute / 1 >= 1:
        change.penny = Math.floor(cashLeftToCompute / 1);
        cashLeftToCompute = cashLeftToCompute % 1;
    }
  }

  //Return the amount and type of change to give back
  return change;
};

//Test the code
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
