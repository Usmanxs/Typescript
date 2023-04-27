// Polymorphism is the ability to create a class with more than one form. Or in other words, classes have the same methods but different implementations.
class Shape {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    area(): number {
      return 0;
    }
  }
  
  class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(name: string, width: number, height: number) {
      super(name);
      this.width = width;
      this.height = height;
    }
    area(): number {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    radius: number;
    constructor(name: string, radius: number) {
      super(name);
      this.radius = radius;
    }
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const shapes: Shape[] = [
    new Rectangle("Rectangle", 10, 5),
    new Circle("Circle", 7),
  ];
  
  for (const shape of shapes) {
    console.log(`${shape.name} area: ${shape.area()}`);
  }
  