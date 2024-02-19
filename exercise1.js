// 1) Implement a class that describes a circle. It must have the following components:

//     a field that stores the radius of the circle;
//     get-property that returns the radius of the circle;
//     set-property that sets the radius of the circle;
//     get-property that returns the diameter of the circle;
//     a method that calculates the area of a circle;
//     a method that calculates the length of the circle.
//     Demonstrate the work of properties and methods.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value >= 0) {
      this._radius = value;
    } else {
      console.error("Radius must be a positive number.");
    }
  }

  get diameter() {
    return 2 * this.radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(5);
console.log("Radius:", circle.radius);
console.log("Diameter:", circle.diameter);
console.log("Area:", circle.getArea());
console.log("Circumference:", circle.getCircumference());
