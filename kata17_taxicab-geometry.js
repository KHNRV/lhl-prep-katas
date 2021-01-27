/**
 * Receive an array of directions, and return an object that calculates how far
 * north and east those directions will take someone.
 *
 * @param {array} directions - Input an array of where every even parameters is
 * a turn left or right and the uneven parameters are the number of blocks
 * traveled after that turn.
 *
 * @returns {object} Returns how far East and North the passenger traveled.
 */
const blocksAway = function (directions) {
  /**
   * This function outpout the new cardinal orientation of the taxi after it
   * took a left or right turn.
   * @param {string} leftOrRight - Is the taxi taking a right or a left turn?
   * @param {string} taxiOrientation - What is the cardinal orientation of the
   * taxi before taking the turn?
   * @returns {string} Returns the new cardinal orientation of the taxi after
   * taking it's turn
   */
  function taxiCompass(leftOrRight, taxiOrientation) {
    //Define an array with all the cardinal directions
    let cardinalArray = ["north", "east", "south", "west"];

    //Define the index of the orientation in the cardinalArray
    let taxiOrientationIndex = cardinalArray.indexOf(taxiOrientation);

    //If the taxi turns right, go to the next cardinal point
    if (leftOrRight === "right") {
      taxiOrientationIndex++;
      //If the taxi turns left, go to the previous cardinal point
    } else if (leftOrRight === "left") {
      taxiOrientationIndex--;
    }

    //North is after West
    if (taxiOrientationIndex === 4) {
      taxiOrientationIndex = 0;
    }

    //West is before North
    if (taxiOrientationIndex === -1) {
      taxiOrientationIndex = 3;
    }

    //Return the new orientation
    return cardinalArray[taxiOrientationIndex];
  }

  // Define the variable tracking the coordinates of the taxi. The taxi always
  // starts at [0, 0]. This variable will be the one returned by the function.
  let taxiCoordinates = {
    east: 0,
    north: 0,
  };

  // Define the variable tracking the movements of the taxi for n amount of
  // blocks in a cardinal direction
  let taxiMeter = {
    north: 0,
    east: 0,
    south: 0,
    west: 0,
  };

  let taxiOrientation = "";

  //Register the first movement since the first turn is techically not a 90 degrees one.
  if (directions[0] === "right") {
    taxiMeter.east += directions[1];
    taxiOrientation = "east";
  } else if (directions[0] === "left") {
    taxiMeter.north += directions[1];
    taxiOrientation = "north";
  }

  //Loop through all the given movement but the first.
  for (let i = 3; i < directions.length; i += 2) {
    //Set the new orientation of the taxi
    taxiOrientation = taxiCompass(directions[i - 1], taxiOrientation);

    //Register the movement in the taxiMeter
    taxiMeter[taxiOrientation] += directions[i];
  }

  //Calculate the final coordinates of the taxi
  taxiCoordinates.east = taxiMeter.east - taxiMeter.west;
  taxiCoordinates.north = taxiMeter.north - taxiMeter.south;

  return taxiCoordinates;
};

//TEST THE CODE
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/* EXPECTED OUTPOUT
    {east: 1, north: 3}
    {east: 3, north: 3}
    {east: 0, north: 0}
 */
/**
 * Receive an array of directions, and return an object that calculates how far
 * north and east those directions will take someone.
 *
 * @param {array} directions - Input an array of where every even parameters is
 * a turn left or right and the uneven parameters are the number of blocks
 * traveled after that turn.
 *
 * @returns {object} Returns how far East and North the passenger traveled.
 */
const blocksAway = function (directions) {
  /**
   * This function outpout the new cardinal orientation of the taxi after it
   * took a left or right turn.
   * @param {string} leftOrRight - Is the taxi taking a right or a left turn?
   * @param {string} taxiOrientation - What is the cardinal orientation of the
   * taxi before taking the turn?
   * @returns {string} Returns the new cardinal orientation of the taxi after
   * taking it's turn
   */
  function taxiCompass(leftOrRight, taxiOrientation) {
    //Define an array with all the cardinal directions
    let cardinalArray = ["north", "east", "south", "west"];

    //Define the index of the orientation in the cardinalArray
    let taxiOrientationIndex = cardinalArray.indexOf(taxiOrientation);

    //If the taxi turns right, go to the next cardinal point
    if (leftOrRight === "right") {
      taxiOrientationIndex++;
      //If the taxi turns left, go to the previous cardinal point
    } else if (leftOrRight === "left") {
      taxiOrientationIndex--;
    }

    //North is after West
    if (taxiOrientationIndex === 4) {
      taxiOrientationIndex = 0;
    }

    //West is before North
    if (taxiOrientationIndex === -1) {
      taxiOrientationIndex = 3;
    }

    //Return the new orientation
    return cardinalArray[taxiOrientationIndex];
  }

  // Define the variable tracking the coordinates of the taxi. The taxi always
  // starts at [0, 0]. This variable will be the one returned by the function.
  let taxiCoordinates = {
    east: 0,
    north: 0,
  };

  // Define the variable tracking the movements of the taxi for n amount of
  // blocks in a cardinal direction
  let taxiMeter = {
    north: 0,
    east: 0,
    south: 0,
    west: 0,
  };

  let taxiOrientation = "";

  //Register the first movement since the first turn is techically not a 90 degrees one.
  if (directions[0] === "right") {
    taxiMeter.east += directions[1];
    taxiOrientation = "east";
  } else if (directions[0] === "left") {
    taxiMeter.north += directions[1];
    taxiOrientation = "north";
  }

  //Loop through all the given movement but the first.
  for (let i = 3; i < directions.length; i += 2) {
    //Set the new orientation of the taxi
    taxiOrientation = taxiCompass(directions[i - 1], taxiOrientation);

    //Register the movement in the taxiMeter
    taxiMeter[taxiOrientation] += directions[i];
  }

  //Calculate the final coordinates of the taxi
  taxiCoordinates.east = taxiMeter.east - taxiMeter.west;
  taxiCoordinates.north = taxiMeter.north - taxiMeter.south;

  return taxiCoordinates;
};

//TEST THE CODE
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/* EXPECTED OUTPOUT
    {east: 1, north: 3}
    {east: 3, north: 3}
    {east: 0, north: 0}
 */
