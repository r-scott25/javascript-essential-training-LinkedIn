/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// *********************************************************** //
// ******************** Class Manipulation ******************* //
// *********************************************************** //

//  className - can be problematic  //
console.log(document.querySelector("h1").className);
console.log((document.querySelector("h1").className = "new-class"));

//  classList - better for class manipulation  //
console.log(document.querySelector("main li:first-child").classList);
console.log(
  document.querySelector("main li:first-child").classList.add("new-class")
);
console.log(
  document.querySelector("main li:nth-of-type(2n)").classList.add("new-class")
);

console.log(
  document
    .querySelector("main li:nth-of-type(2n)")
    .classList.remove("new-class")
);

console.log(
  document
    .querySelector("main li:nth-of-type(2n)")
    .classList.toggle("new-class")
);

console.log(
  document
    .querySelector("main li:nth-of-type(2n)")
    .classList.replace("feature", "new-class")
);
// *********************************************************** //
// *************** Attribute Manipulation ******************** //
// *********************************************************** //

console.log(document.querySelector("img").hasAttribute("src"));

console.log(document.querySelector("img").getAttribute("src"));

console.log(
  document.querySelector("img").setAttribute("alt", "drawing of a backpack")
);

console.log(
  document
    .querySelector("img")
    .setAttribute("title", "Images shouldn't have titles")
);

console.log(document.querySelector("img").removeAttribute("title"));

console.log(
  document
    .querySelector("input")
    .setAttribute("placeholder", "Extra new left strap length")
);

console.log(
  document
    .querySelector("input")
    .setAttribute("placeholder", "New strap length")
);



// *********************************************************** //
// ************* Inline Style Manipulation ******************* //
// *********************************************************** //

console.log(document.querySelector(".site-title").style);
console.log(document.querySelector(".site-title").style.color);
console.log(document.querySelector(".site-title").style.color = "rebeccapurple");
console.log(document.querySelector(".site-title").style.backgroundColor = "orange");