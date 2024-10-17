// This is a JavaScript comment
// variables keywords: const, let, var

// constant variable
// syntax: const variableName = value;
// (=) is assign operator
const userName = "John Doe";

// Print the message in the browser console
console.log(userName); // "John Doe"

// let variable
// it allows us to reassign any value after declaration
// syntax: let variableName = value;
let user = {
  name: "John",
  lastName: "Doe",
  age: 30,
};

// reassign new value to let variable
user = {
  lastName: "Doe",
  age: 21,
};

// Print the message in the browser console
console.log(user); // { lastName: "Doe", age: 21 }

// var variable
// it allows us to reassign any value after declaration
// syntax: var variableName = value;
// it has hoisting
var car = "Daweo Matiz";

// reassign a new value for car variable
car = "BMW";

// Window object where all the variables created with 'var' keyword are placed
console.log(window); // {.... car: "Audi"}

console.log(window); // {.... car: "Audi" }

// reassign a new value for car variable
car = "Audi";

// Data types
// Primitive: string, number, undefined, boolean, null, bigint, symbol
// Non-Primitive: object, array, function, date, regex

// string
// "", '', `` - represent a string (text)
const productName = "Iphone 16 ProMax";

console.log(typeof productName);
console.log(productName); // "Iphone 16 ProMax"

// number
// 1,2,3,4,5...etc
const productPrice = 7000;

// undefined
// the absence of a value
// can be explicit or implicit
const productDescription = undefined; //explicit
let productReviews; // implicit

// boolean
// true or false
const isProductNew = true;

// null
// the intentional absence of a value
const productQuantity = null;

// BigInt
// represents an integer larger than the Number
// 2^53 - 1
const productOrders = 1234567890123456789012345678901234567890n;

// Symbol
// represents a unique and immutable primitive value to avoid name collisions
const productInfo = Symbol("Lorem ipsum...");

// Object
// represents a collection of key:value pairs
// key is often named property
// the property name can be a string or symbol
const product = {
  // syntax: key:value,
  name: "Iphone 16 ProMax", // string
  price: 7000, // number
  isNew: true, // boolean
  quantity: null, // null
  orders: 1234567890123456789012345678901234567890n, // BigInt
};

// Array
// represents a collection of elements, usually of the same type in a single variable
// allows us to organize and access multiple elements using an index which starts from 0
// syntax: [element,element,element,element - 1]
const products = ["Iphone 16 ProMax", "Macbook Pro M3", "Ipad"];

// print the entire array
console.log(products); // ["Iphone 16 ProMax", "Macbook Pro M3", "Ipad"]

// access specific element from array
// syntax: variableName[index]
// variableName = products
// index = 1
console.log(products[1]); // "Macbook Pro M3"

// Function
// represents a block of reusable code that executes a specific task
// syntax: function functionName(){ //our code }
function doAverage(a, b) {
  // a, b = parameters = input
  // our code
  console.log(a, b); // 9.8 7.7

  return (a + b) / 2;
}

// doAverage fn returns 8.75
// the value returned is assigned to the result variable
const result = doAverage(9.8, 7.7);

console.log(result); // 8.75

// Date
// the date object is used to work with dates and time
// work = format different types of date and time based on localisation (ro/en/en-bg/it)

const today = new Date();

console.log(today); // Tue Oct 15 2024 19:16:41 GMT+0300 (Eastern European Summer Time)

console.log(
  today.toLocaleDateString("ro", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
); // 15 octombrie 2024
