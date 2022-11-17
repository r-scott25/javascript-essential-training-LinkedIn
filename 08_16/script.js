/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";

import backpackObjectArray from "./components/data.js"

// Map through the arran and make a new array
const content = backpackObjectArray.map((backpack) => {
// "backpack" now holes  asingle backpack object


// Create new article
let backpackArticle = document.createElement("article");
backpackArticle.classList.add("backpack");


//  Set article ID to the backpack.id property
backpackArticle.setAttribute("id", backpack.id);


// Set the innerHTML of backpackArticle using the backpack object.
backpackArticle.innerHTML = `
<figure class="backpack_image">
<img src=${backpack.image} alt="" loading="lazy" />
</figure>
<h1 class="backpack_name">${backpack.name}></h1>
<ul class="backpack_features">
<li class="feature backpack_volume">Volume:<span> ${backpack.volume}l</span></li>
<li class="feature backpack_color">Color:<span> ${backpack.color}</span></li>
<li class="feature backpack_age">Age:<span> ${backpack.backpackAge()} days old</span></li>
<li class="feature backpack_pockets">Number of pockets:<span> ${backpack.pocketNum}</span></li>
<li class="feature backpack_strap">Left strap length:<span> ${backpack.strapLength.left} inches</span></li>
<li class="feature backpack_strap">Right strap length:<span> ${backpack.strapLength.right} inches</span></li>
<li class="feature backpack_lid">Lid status:<span> ${backpack.lidOpen ? "open" : "closed"}</span></li>
</ul>

`;

// Return the backpackArticle to the content array.
return backpackArticle;

});


// Get the main
const main = document.querySelector(".maincontent");

// Loop through th econtent array to append each backpack article.
content.forEach((backpack) => {
  main.append(backpack);
})














// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../assets/images/everyday.svg"
// );

// const content = `
//     <figure class="backpack__image">
//       <img src=${everydayPack.image} alt="" />
//     </figure>
//     <h1 class="backpack__name">${everydayPack.name}</h1>
//     <ul class="backpack__features">
//       <li class="packprop backpack__volume">Volume:<span> ${
//         everydayPack.volume
//       }l</span></li>
//       <li class="packprop backpack__color">Color:<span> ${
//         everydayPack.color
//       }</span></li>
//       <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
//       <li class="packprop backpack__pockets">Number of pockets:<span> ${
//         everydayPack.pocketNum
//       }</span></li>
//       <li class="packprop backpack__strap">Left strap length:<span> ${
//         everydayPack.strapLength.left
//       } inches</span></li>
//       <li class="packprop backpack__strap">Right strap length:<span> ${
//         everydayPack.strapLength.right
//       } inches</span></li>
//       <li class="feature backpack__lid">Lid status:<span> ${
//         everydayPack.lidOpen ? "open" : "closed"
//       }</span></li>
//     </ul>
  
// `;

// const main = document.querySelector(".maincontent");

// const newArticle = document.createElement("article");
// newArticle.classList.add("backpack");
// newArticle.setAttribute("id", "everyday");
// newArticle.innerHTML = content;

// main.append(newArticle);
