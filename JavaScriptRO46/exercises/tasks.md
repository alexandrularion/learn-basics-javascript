# JavaScript Beginner Exercises

## 1. Print "Hello, World!" to the console
- **Goal**: Get familiar with printing output to the console.
- **Hint**: Use the `console.log()` function.
- **Example**: 
    ```js
    console.log("Hello, World!");
    ```

## 2. Declare variables and display them
- **Goal**: Understand variable declaration using `let`, `const`, and `var`.
- **Hint**: Declare a variable using `let` or `const`, then print it.
- **Example**: 
    ```js
    let myName = "John";
    console.log(myName);
    ```

## 3. Add two numbers together
- **Goal**: Practice basic arithmetic.
- **Hint**: Declare two variables and use the `+` operator.
- **Example**: 
    ```js
    let num1 = 5;
    let num2 = 10;
    console.log(num1 + num2);
    ```

## 4. Create a function that multiplies two numbers
- **Goal**: Get familiar with functions and parameters.
- **Hint**: Use the `function` keyword, define parameters, and return the result.
- **Example**: 
    ```js
    function multiply(a, b) {
      return a * b;
    }
    console.log(multiply(3, 4));
    ```

## 5. Check if a number is even or odd
- **Goal**: Learn to use conditionals (`if-else`) and the modulus operator (`%`).
- **Hint**: Use `% 2` to check divisibility.
- **Example**: 
    ```js
    let num = 7;
    if (num % 2 === 0) {
      console.log(num + " is even");
    } else {
      console.log(num + " is odd");
    }
    ```

## 6. Loop through an array and print each element
- **Goal**: Work with arrays and loops (`for` loop).
- **Hint**: Use a `for` loop to iterate over the array elements.
- **Example**: 
    ```js
    let fruits = ["apple", "banana", "cherry"];
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
    ```

## 7. Create an object and access its properties
- **Goal**: Understand objects and dot notation for accessing properties.
- **Hint**: Define an object with key-value pairs and access values using `object.key`.
- **Example**: 
    ```js
    let car = {
      make: "Toyota",
      model: "Corolla",
      year: 2020
    };
    console.log(car.make);  // "Toyota"
    ```

## 8. Write a function that reverses a string
- **Goal**: Learn to manipulate strings using loops or built-in methods.
- **Hint**: Use a loop or `split()`, `reverse()`, and `join()` methods.
- **Example**: 
    ```js
    function reverseString(str) {
      return str.split("").reverse().join("");
    }
    console.log(reverseString("hello"));  // "olleh"
    ```

## 9. Generate a random number between 1 and 100
- **Goal**: Use built-in Math functions.
- **Hint**: Use `Math.random()` and `Math.floor()`.
- **Example**: 
    ```js
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    ```

## 10. Create a simple calculator using prompts
- **Goal**: Practice working with user input via `prompt()`.
- **Hint**: Use `prompt()` to gather inputs and perform arithmetic operations.
- **Example**: 
    ```js
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let sum = num1 + num2;
    console.log("The sum is: " + sum);
    ```

