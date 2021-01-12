//Function that returns the coordinates of an available parking spot for the
//vehicle, or returns false if there is no available spot.
const whereCanIPark = function (spots, vehicleType) {

  //Loop through all the parking spaces
  for (let y = 0; spots.length > y; y++) {
    for (let x = 0; spots[y].length > x; x++) {
      //Establish what kind of parking space to look for according to vehicule
      //type
      switch (vehicleType) {
        case "regular":
          if (spots[y][x] === "R") {
            return [x, y];
          }
          break;

        case "small":
          if ((spots[y][x] === "R") || (spots[y][x] === "S")) {
            return [x, y];
          }
          break;

        case "motorcycle":
          if (spots[y][x] === spots[y][x].toUpperCase()) {
            return [x, y];
          }
      }
    }
  }
  //Return false if not parking space available found
  return false;
};

//Print examples to the console
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
