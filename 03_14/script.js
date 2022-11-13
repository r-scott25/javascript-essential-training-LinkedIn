/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

// Book Objects

//  Book Param Order: title, author, genre, checkedOut

const bookOne = new Book(
  "The Hitchhiker's Guide to the Galaxy",
  "Douglas Adams",
  "Science Fiction",
  true
);

const bookTwo = new Book(
  "Cackle",
  "Rachel Harrison",
  "Supernatural Fiction",
  false
);

const bookThree = new Book(
  "Gossie and Gertie",
  "Olivier Dunrea",
  "Childrens Fiction",
  true
);

console.log(bookOne);
console.log(bookTwo);
console.log(bookThree);

console.log(bookOne.availability());
console.log(bookTwo.availability());
console.log(bookThree.availability());
