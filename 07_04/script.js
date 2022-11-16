/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// Build an array with 8 items
let deskItems = [
  "mug",
  "succulent",
  "flowers",
  "laptop",
  "planner",
  "journal",
  "rose quartz",
  "tiger's eye",
];

console.log(deskItems);

// Remove the last item
// deskItems.pop();
// console.log(deskItems);

// Add the las item as the first item on the array
// deskItems.unshift(deskItems.pop());
// console.log(deskItems);

// Sort the items in alphabetical order
// deskItems.sort();

// Use the find() method to find a specific item in the array
const foundItem = deskItems.find((item) => item === "flowers");
console.log("Found Item: ", foundItem);

// Remove the item you found using the find method from the array.
let remove = "flowers";
deskItems.splice(deskItems.indexOf(remove), 1);
console.log(`Item: "${remove}" removed:`, deskItems);


var numbers=[1, 2, 3, 4, 5];
numbers.push(6);
numbers.unshift(7);
numbers.pop();
numbers.shift();
console.log(numbers);