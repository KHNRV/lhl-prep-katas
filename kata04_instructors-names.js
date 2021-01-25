//Create a function named instructorWithLongestName that will receive an array
//of instructor objects, and return the object that has the longest name. If
//there are two instructors with the longest name, return the first one.
const instructorWithLongestName = function (instructors) {
  //Define variables to store the largest name and its index in the instructors
  //array
  let largestName = "";
  let largestNameIndex;
  // console.log(largestName.length)

  //For loop that go through all the names and save the largest one to the
  //variable largest name
  for (let i = 0; instructors.length > i; i++) {
    if (instructors[i].name.length > largestName.length) {
      largestName = instructors[i].name;
      largestNameIndex = i;
    }
  }

  //Return the detailed file of the person with the largest name
  return instructors[largestNameIndex];
};

//Print examples to the console
console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
