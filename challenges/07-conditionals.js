// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !==

// example 1
// if (2 > 1) {
//   console.log("hello world");
// }

// example 2
// const value = true;

// if (value) {
//   console.log("hi world");
// }
// console.log(typeof value);

// example 3
// const num1 = 4;
// const num2 = 6;

// if (num1 > num2) {
//   console.log("first number is bigger than second");
// } else {
//   console.log("second number is bigger than first");
// }

// example 4
// const num1 = 6;
// const num2 = 6;
// const result = num1 >= num2;

// if (num1 > num2) {
//   console.log("first number is bigger than second");
// } else if (result) {
//   console.log("first number equal to second");
// } else {
//   console.log("second number is bigger than first");
// }

// Equality
// == checks only value
// === checks value and type

// const num1 = 6;
// const num2 = 6;

// const value = num1 == num2;
// const value2 = num1 === num2;

// console.log(value);
// console.log(value2);

// // Logical Operators
// // (|| - OR), (&& - AND), !

// const name = "peter";
// const age = 24;

// if (name !== "bob" && age 24) {
//   console.log("hello there user");
// } else {
//   console.log("wrong values");
// }

/*
Switch Statements possibly instead of else if....

Conditional Statements #7 Challenge

1. Create two objects "person1", "person2"
2. Setup name, age (15-25),
  status ("resident", "tourist",) keys

3. Setup if else, condition where 
  age must be bigger than 18 and status must be equal to "resident"
4. test with both objects
*/

const person1 = {
  name: "susan",
  age: 25,
  status: "resident",
};
const person2 = {
  name: "bobo",
  age: 17,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you are not eligible ");
}
