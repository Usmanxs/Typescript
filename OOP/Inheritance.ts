            //   Inheritance 
// Inheritance allows a new class to be based on an existing class, inheriting its properties and methods. The existing class is called the base or parent class, and the new class is called the derived or child class.
class Animal {
    name: string;
    protected size: number;
    constructor(name: string
) {
      this.name = name;
    
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
  class Snake extends Animal {
    constructor(name: string) {
      super(name);
    }
    setsize(size: number){
        this.size = 3

    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
  
  class Horse extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }
  
  const sam = new Snake("Sammy the Python");
  const tom: Animal = new Horse("Tommy the Palomino");
  
  sam.move(3);
  tom.move(34);
  