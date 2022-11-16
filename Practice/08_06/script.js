/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
class Book {
  constructor(title, author, genre, publisher, pubYear) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publisher = publisher;
    this.pubYear = pubYear;
  }
}
const splendidSuns = new Book
  ("A Thousand Splendid Suns",
  "Khaled Hosseini",
  "Fiction",
  "Riverhead Books",
  2008);

const alchemist = new Book
  ("The Alchemist", "Paulo Coelho", "Fiction", "Harper Torch", 1988);

const noPics = new Book
  ("The Book With No Pictures",
  "B.J. Novak",
  "Children's Fiction",
  "Dial Books for Young Readers",
  2014);


  // FUNTION DECLARATION //
function funcDeclaration(book) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
  <h1>${book.title}</h1>
  <h3>Product Details</h3>
  <ul>
  <li>Author: ${book.author}</li>
  <li>Genre: ${book.genre}</li>
  <li>Publisher: ${book.publisher}</li>
  <li>Publication Year: ${book.pubYear}</li>
  </ul>
  `;

  return newArticle;
}
console.log(funcDeclaration(splendidSuns));


// FUNCTION EXPRESSION //
const funcExpression = function (book) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
 <h1>${book.title}</h1>
 <h3>Product Details</h3>
 <ul>
  <li>Author: ${book.author}</li>
  <li>Genre: ${book.genre}</li>
  <li>Publisher: ${book.publisher}</li>
  <li>Publication Year: ${book.pubYear}</li>
  </ul>
  `;
  return newArticle;
};

console.log(funcExpression(alchemist));


// ARROW FUNCTION //
const arrowFunc = (book) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
  <h1>${book.title}</h1>
  <h3>Product Details</h3>
  <ul>
  <li>Author: ${book.author}</li>
  <li>Genre: ${book.genre}</li>
  <li>Publisher: ${book.publisher}</li>
  <li>Publication Year: ${book.pubYear}</li>
  </ul>
  `;
  return newArticle;
};

console.log(funcExpression(noPics));

const main = document.querySelector("main");
main.append(funcDeclaration(splendidSuns));
main.append(funcExpression(alchemist));
main.append(arrowFunc(noPics));
