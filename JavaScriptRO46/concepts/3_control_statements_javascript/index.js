// If Statement
// syntax: if(condition) {}
if (4 > 7) {
  // condition = 4 > 7 = false
  // my code will not be executed because condition is false
  console.log(4 > 7); // false
}

if (7 > 4) {
  // condition = 7 > 4 = true
  // my code will be executed because condition is true
  console.log(7 > 4); // true
  console.log(
    "Because 7 > 4 and the condition is true, this block of code was executed."
  );
}

// condition is always a boolean or a truthy/falsy value
// truthy values: true, any non-zero numbers ( -10, 1, 1000), any non-empty string ("hello")
// any object including {}, []
// falsy values: false, 0, -0, "", null, undefined, NaN(not a number)

// If Else Statement
// syntax:
/*
    if(condition) { 
        //mycode 
    } else { 
        //elsecode 
    }
*/
const totalFollowers = 0; // 0 = falsy value
if (totalFollowers) {
  console.log(`You have ${totalFollowers} followers.`);
} else {
  console.log("You don't have any folowers.");
}

// If - Else If - Else Statement
// syntax:
/*
    if(condition){
        // mycode
    } else if(condition){
        // mycode 
    } else {
        // mycode 
    }
*/

const studentType = "fiesc"; // fiesc, fsa, fed

if (studentType === "fiesc") {
  console.log("You are part of fiesc.");
} else if (studentType === "fsa") {
  console.log("You are part of fsa.");
} else {
  console.log("You are part of fed.");
}

// Switch Statement
// break keyword is used to mark the end of the case
// the default case is used only when the cases above are false
// syntax:
/* 
switch(value) {
  case value:
    // my code
    break;
  case value:
    // my code
    break;
  default:
    // my code
    break;
}
*/

const month = 5; // number

switch (month) {
  case 5:
    console.log("The current month is May.");
    break;
  case 6:
    console.log("The current month is June.");
    break;
  case 7:
    console.log("The current month is July.");
    break;
  case 8:
    console.log("The current month is August.");
    break;
  default:
    console.log("The month is not valid.");
    break;
}

// For Loop Statement
// allows us to do repetitive instructions based on certain conditions
// syntax:
/*
  for(initialization; condition; updated) {
    // my code
  }
*/

for (let i = 0; i < 10; i++) {
  console.log("For loop", i);
}

const grades = [8, 9, 6, 10, 9, 8, 8];
let sum = 0;

for (let j = 0; j < grades.length; j++) {
  sum = sum + grades[j];
  // j = 0
  // sum = 8

  // j = 1
  // sum = 17

  // j = 2
  // sum = 23
}

console.log("grades sum = ", sum);
console.log("grades average = ", sum / grades.length);
