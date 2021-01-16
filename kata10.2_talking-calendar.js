//Function that takes in a date string with the format YYYY/MM/DD, and returns a
//new human readable date that looks like December 2nd, 2017.
const talkingCalendar = function(date) {
  //Split the date and assign each value to the proper year, month or day
  //variable as an integer
  const dateArray = date.split("/");
  const year = parseInt(dateArray[0]);
  const month = parseInt(dateArray[1]);
  const day = parseInt(dateArray[2]);

  //Define the variables that will store the talked version of the day or month
  let talkMonth = "";
  let talkDay = "";

  //Assign the proper talked month
  switch (month) {
    case 1:
      talkMonth = "January";
      break;
    case 2:
      talkMonth = "February";
      break;
    case 3:
      talkMonth = "March";
      break;
    case 4:
      talkMonth = "April";
      break;
    case 5:
      talkMonth = "May";
      break;
    case 6:
      talkMonth = "June";
      break;
    case 7:
      talkMonth = "July";
      break;
    case 8:
      talkMonth = "August";
      break;
    case 9:
      talkMonth = "September";
      break;
    case 10:
      talkMonth = "October";
      break;
    case 11:
      talkMonth = "November";
      break;
    case 12:
      talkMonth = "December";
      break;
    default:
      return "ERROR: Month number incorrect. Please follow YYYY/MM/DD format"
  }

  //Assign the proper talked day
  if(day >= 1 && day <= 31) {
    switch (day) {
      case 1:
        talkDay = day.toString() + "st";
        break;
      case 2:
        talkDay = day.toString() + "nd";
        break;
      case 3:
        talkDay = day.toString() + "rd";
        break;
      default:
        talkDay = day.toString() + "th";
    }
   } else {
     return "ERROR: Day number incorrect. Please follow YYYY/MM/DD format"
   }

   //Return the talked date
    return `${talkMonth} ${talkDay}, ${year}`;
};

//Test the code
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));