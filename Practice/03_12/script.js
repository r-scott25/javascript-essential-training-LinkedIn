/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Chair from "./Chair.js";

const officeChair = new Chair (
  "brown",
  "leather" ,
   true,
   4,
   true
);

console.log("Office Chair Details:", officeChair);
console.log(officeChair.sitDown());


officeChair.occupied = false;
console.log(officeChair.sitDown());