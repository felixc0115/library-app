let myLibrary = [
  { title: `can't hurt me`, author: "David Goggins", pages: 200, isRead: true },
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

document
  .querySelector("#add-book-btn")
  .addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
  myLibrary.forEach((book) => {
    const bookSection = document.querySelector("section");
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card-container");
    for (let prop in book) {
      const p = document.createElement("p");
      p.textContent = `${prop[0].toUpperCase() + prop.slice(1, prop.length)}: 
      ${book[prop]}`;
      bookCard.append(p);
    }
    bookSection.append(bookCard);
  });
}
