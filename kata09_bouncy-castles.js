//Function that calculate the volume of a sphere given a radius
const sphereVolume = function (radius) {
  return (4 / 3) * Math.PI * radius ** 3;
};

//Function that calculate the volume of a cone given a radius and a height
const coneVolume = function (radius, height) {
  return (1 / 3) * Math.PI * radius ** 2 * height;
};

//Function that calculate the volume of a of a prism given a height, a width,
//and a depth
const prismVolume = function (height, width, depth) {
  return height * width * depth;
};

//Function that calculate the total volume of an attraction
const totalVolume = function (solids) {
  //Define the variable that will be used to store the volume of the attraction
  let returnedVolume = 0;

  //Loop through every solid of the attraction and return the volume
  for (let solid of solids) {
    switch (solid.type) {
      case "sphere":
        returnedVolume += sphereVolume(solid.radius);
        break;
      case "cone":
        returnedVolume += coneVolume(solid.radius, solid.height);
        break;
      case "prism":
        returnedVolume += prismVolume(solid.height, solid.width, solid.depth);
        break;
      default:
        return "ERROR: Your object contain an unknown shape";
        break;
    }
  }
  //Return the volume of the attraction
  return returnedVolume;
};

//Define the solids
const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

//Define the solids composing the attraction
const duck = [largeSphere, smallSphere, cone];

//Test the code
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189); //True
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49); //True
console.log(prismVolume(3, 4, 5) === 60); //True
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000); //True
