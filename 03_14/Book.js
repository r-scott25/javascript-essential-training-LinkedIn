class Book {
  constructor (
    title,
    author,
    genre,
    checkedOut
  ) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.checkedOut = checkedOut;
  }

  availability() {
    if (this.checkedOut === false) {
      return "This book is available for checkout."
    } else return "This book is not available. Please try again another day."
  }
}

export default Book;