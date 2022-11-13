/* Creating Classes

Two Ways:
Class declaration: class Name {}
Class expression: const Name = class {}
*/



class Chair {
  constructor (
    // Define parameters
    color,
    material,
    armrests,
    wheels,
    occupied
    
  ){
    // Define properties
    this.color = color;
    this.material = material;
    this.armrests = armrests;
    this.wheels = wheels;
    this.occupied = occupied;
  }
    sitDown(occupiedStatus) {
     if (this.occupied === false) {
      return "Vacant";
     }
      else return "Occupied"
    }
  }

  export default Chair;
  
  
 