// Arrays, Funcions, Objects
// Objects - key/value pairs methods
// dot notation

// Objects Example

const person = {
  name: "john",
  lastName: "peters",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  greeting: function () {
    console.log("Hello my name is JOHN");
  },
};

const age = person.age;
console.log(age);
person.name = "bob"; // this is an example of a dot.notation.
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

/* 
## Challenge 06 Objects 

1.Create car object
2. Add make, model, year, colors (array), hybrid (boolean) keys
3. Add two methods (drive and stop)
4. In the function body setup log with random text
5. Log make
6. Log first color
7. Invoke both methods

*/

const car = {
  make: "ford",
  model: "focus",
  year: 2010,
  color: ["blue", "red", "green", "orange"],
  hybrid: false,
  //the following code below is two methods (old way and new way)
  drive: function () {
    console.log("driving...");
  },
  stop() {
    console.log("stopped!!!");
  },
};

console.log(car.make);
console.log(car.color[1]);

// below is code to invoke both methods with dot notation

car.drive();
car.stop();
