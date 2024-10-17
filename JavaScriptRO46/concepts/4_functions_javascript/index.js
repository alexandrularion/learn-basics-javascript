// Function
// represents a block of reusable code that executes a specific task
// syntax: function functionName(param1, param2, ...paramN){ //our code return something }

const users = [
  { name: "John Doe", age: 24, occupation: "developer" },
  { name: "Will Smith", age: 30, occupation: "manager" },
  { name: "Jane Smith", age: 31, occupation: "qa_tester" },
]; // Array of objects where each object represents an user

// The function assignRole is responsible to check and update each user
// The function has one parameter named usersList is used to pass the users array
function assignRole(usersList) {
  const updatedUsers = []; // Empty array used to store each updated user (array of objects)

  // for loop - is used to iterate over the usersList array, checking each object one by one
  for (let i = 0; i < usersList.length; i++) {
    // conditional statement - is used to check if each user meet the criteria to be an administrator
    // && - AND operator - is used in condition
    // === - Comparison operator - is used to compare occupation
    // >= - Comparison operator - is used to compare age
    if (usersList[i].age >= 30 && usersList[i].occupation === "manager") {
      // when condition above is true, then we insert the updated user object in the local array
      updatedUsers.push({
        name: usersList[i].name,
        age: usersList[i].age,
        occupation: usersList[i].occupation,
        role: "administrator", // new property in the user object
      });
    }
  }

  // we return the updatedUsers array which contains only the "administrator" users
  return updatedUsers;
}

const newUsers = assignRole(users); // function call -  returns the updatedUsers variable from the function
console.log(newUsers); // [{ name: "Will Smith", age: 30, occupation: "manager", role: "administrator" }]

// The function is used to check if an user has the right access to specific data
// Storing a function inside a normal variable means that we created a function expression
// The function has two parameters named role and name which has the string type
const verifyAccess = function (name, role) {
  // role = parameter
  // name = parameter
  if (role === "administrator") {
    console.log(
      `The user ${name} does have the rights to access any information.`
    );
    // any code
  } else {
    console.log(
      `The user ${name} doesn't have the rights to access the information.`
    );
    // any code
  }
};

// how to access object keys: object.key (ex. newUsers[0].name, newUsers[0] = object and name is the key)
// newUsers[0].name = argument
// newUsers[0].role = arguemnt
verifyAccess(newUsers[0].name, newUsers[0].role); // "The user Will Smith does have the rights to access any information."
