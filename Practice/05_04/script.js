/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

document.querySelector("main .backpack .backpack__name").style.color = "rosybrown";

document
  .querySelectorAll("main li")
  .forEach((item) => (item.style.color = "green"));
