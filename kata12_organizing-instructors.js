//Function that, given a list of instructors, create a single object to organize
//them based on their course.
const organizeInstructors = function (instructors) {
  //Define the object that will store the returned value (the instructor list)
  let instructorList = {};

  //Loop through the instructors
  for (let instructor of instructors) {
    //If the course type exist in instructorList:
    if (instructorList[instructor["course"]]) {
      // [1] push the instructor to the list
      instructorList[instructor["course"]].push(instructor.name);

      //If the course type does not exist in instructorList:  push the instructor to the
    } else {
      // [1] create an empty array named after the course type
      instructorList[instructor["course"]] = [];

      // [2] push the instructor to the list
      instructorList[instructor["course"]].push(instructor.name);
    }
  }
  //Return the instructor list
  return instructorList;
};

//Test the code
console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
