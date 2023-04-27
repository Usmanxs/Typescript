//  Objects are used extensively in both languages, as they provide a way to group related data and functionality into a single unit.
const person = {
  firstName: "usman",
  lastName: "sheikh",
  age: 23,
  address: {
    street: "11",
    city: "multan",
    state: "punjab",
    zip: "60000"
  },
  hobbies: ["reading", "football", "coding"],
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
  }
};

// A class is a blueprint for creating objects that share the same properties and methods. It provides a way to organize and encapsulate related data and behavior into a single unit.
class Person {
    firstName: string;
    lastName: string;
    age: number;
  
    constructor(firstName: string, lastName: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    }
  }
  const usman = new Person("usman", "sheikh", 23);

