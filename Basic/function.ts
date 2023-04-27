      
                                                       //functions
//   TypeScript allows you to specify the types of function parameters, return types, and even the function itself.
      //returning string
     function greet(name?: string): string {
        if (name) {
          return `Hello, ${name}!`;
        } else {
          return `Hello!`;
        }
      }
       // returning number
      function mymath(num:number):number {
      return num*num;
      }
      
      // void type
       function annoys ():void{
          console.log("it dose not reture any thing")
       }
        
    function greeting (name?:string, age?:number, programe?:boolean){
    if(name) { 
        return console.log(`hi ${name} your age is ${age} and you are good programmer ${programe} `)

    }
    else {
     console.log("bye")

    }
    }  
                                      //  function overload
//Function Overloading in TypeScript allows multiple functions with the same name but with different parameters to be defined. The correct function to call is determined based on the number, type, and order of the arguments passed to the function at runtime. 


function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('Hello', ' World')); // "Hello World"


// type narrowing
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}