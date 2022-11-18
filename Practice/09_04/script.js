/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

//  Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
  gridContainer.style.outline = "10px solid yellow";
});

gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

// - Add an event listener to each grid cell to highlight that cell when you hover your mouse
// over it.

const gridCells = document.querySelector(".cell");

// gridCells.forEach((cell) => {
//   // Set outline when cell is hovered
//   cell.addEventListener("mouseenter", (e) => {
//     console.log(e);
//     cell.style.outline = "2px solid red";
//   });

//   cell.addEventListener("mouseleave", () => {
//     cell.style.outline = "";
//   });
// });

const cellOne = document.querySelector(".cell01");

cellOne.addEventListener("mouseenter", () => {
  cellOne.style.outline = "5px solid pink";
});

cellOne.addEventListener("mouseleave", () => {
  cellOne.style.outline = "";
});

cellOne.addEventListener("click", () => {
  if (cellOne.style.backgroundColor === "") {
    cellOne.style.backgroundColor = "orange";
  } else if (cellOne.style.backgroundColor === "orange") {
    cellOne.style.backgroundColor = "";
  }
});

// gridCells.addEventListener("click", () => {
//   if (gridCells.style.background) {
//     gridCells.style.backgroundColor = "";
//   } else {
//     gridCells.style.backgroundColor = `#${randColor()}`;
//   }
// });
