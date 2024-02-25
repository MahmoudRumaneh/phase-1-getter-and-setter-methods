class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    // Getter methods
    get radius() {
      return this._radius;
    }
  
    get diameter() {
      return this._radius * 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    get area() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    // Setter methods
    set radius(newRadius) {
      this._radius = newRadius;
    }
  
    set diameter(newDiameter) {
      this._radius = newDiameter / 2;
    }
  
    set circumference(newCircumference) {
      this._radius = newCircumference / (2 * Math.PI);
    }
  
    set area(newArea) {
      this._radius = Math.sqrt(newArea / Math.PI);
    }
  }
  
  module.exports = Circle;
  