             // Types 
            //  1)Primitive type
            //  2)object type
            //  3)other type

                                                   //typeAnnotation
// Type annotations in TypeScript are used to specify the type of a variable, function parameter, or function return value.
//  premitive type contain  string , number , boolean ,undefine ,null and void
let myVar: string = "Hello, world!";
let fName :string = "usman";
let salary :number = 23;
let programe: boolean = true;
let prof :undefined
let jobs :null = null;

// Object type contain  interface,enum, array, tuples , classes
//  other type contain any, never, unknown

                                            // Union Types
// Union Types in TypeScript allow you to specify multiple possible types for a single variable or parameter. A union type is written as a vertical bar | separated list of types.
let vars: string | number;

function displayValue(value: string | number) {
    console.log(value);
  }

                               // enum
//    Enums are a useful feature when you need to define a set of related values that represent different options or states.
 enum Direction {
    Up,
    Down,
    Right,
    Left
 }
 let direction: Direction = Direction.Up;
 console.log(direction); // Output: 0
 
 direction = Direction.Right;
 console.log(direction); // Output: 3


                                  // tuples
 //   In TypeScript, a tuple is a fixed-length array that allows you to specify the types of its elements
 let myTuple: [string, number];
myTuple = ["hello", 42];



                                  // type aliases
          // 1)type
          // 2)interface
                                    //Type
// It allows you to create a type alias for a complex type, making it easier to refer to the type in your code.
type Add = (a: number, b: number) => number;

                                 // Interface
// Interfaces provide a way to define reusable types that can be used throughout your codebase, making it easier to write more maintainable and readable code.
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void;
  }
  
let person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    },
  };
     

                                // type vs interface
//  The key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

interface Animal {
    name: string
  }
  
  interface Bear extends Animal {
    honey: boolean
  }
//    while type cannot  duplicated
          