// In TypeScript, abstraction is achieved through the use of abstract classes and interfaces. An abstract class is a class that cannot be instantiated directly, but can be used as a base class for other classes. An abstract class can contain abstract methods, which are declared but not defined, and must be implemented by the derived classes. Interfaces are similar to abstract classes in that they define a set of methods and properties that a class must implement, but they cannot contain any implementation details.
abstract class Animals {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    abstract makeSound(): void;
  }
  
  class Dog extends Animals {
    constructor(name: string) {
      super(name);
    }
    makeSound(): void {
      console.log(`${this.name} barks`);
    }
  }
  
  class Cat extends Animals {
    constructor(name: string) {
      super(name);
    }
    makeSound(): void {
      console.log(`${this.name} meows`);
    }
  }
  
  const dog = new Dog("Fido");
  const cat = new Cat("Whiskers");
  
  dog.makeSound(); 
  cat.makeSound(); 