let myLibrary = [
  { title: "cant hurt me", author: "David Goggins", pages: 200, isRead: "off" },
  { title: "green eggs & ham", author: "Dr. Suess", pages: 100, isRead: "on" },
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = +pages;
  this.isRead = isRead;
}

addBookToLibrary();

const addBookBtn = document.querySelector("#add-book-btn");
const submitBookBtn = document.querySelector("#submit-book-btn");

submitBookBtn.addEventListener("click", saveInputForm);

addBookBtn.addEventListener("click", openForm);

function openForm() {
  document.querySelector(`#myForm`).style.display = "block";
}

function removeBookFromLibrary(e) {
  const title = e.target.parentNode.firstChild.textContent;
  const newLibrary = myLibrary.filter((book) => {
    return !title.includes(book.title);
  });
  myLibrary = newLibrary;
  addBookToLibrary();
}

function toggleRead(e) {
  const title = e.target.parentNode.firstChild.textContent;
  const bookObj = myLibrary.find((book) => title.includes(book.title));
  e.target.textContent === "Read"
    ? (e.target.textContent = "Not Read")
    : (e.target.textContent = "Read");
  bookObj.isRead === "on" ? (bookObj.isRead = "off") : (bookObj.isRead = "on");
}

function saveInputForm(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#is-read").value;
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  addBookToLibrary();
}

function closeForm() {
  document.querySelector("#myForm").style.display = "none";
}

function addBookToLibrary() {
  const bookSection = document.querySelector("section");
  bookSection.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card-container");
    for (let prop in book) {
      const p = document.createElement("p");
      p.textContent = `${prop[0].toUpperCase()}${prop.slice(1, prop.length)}: ${
        book[prop]
      }`;
      p.classList.add("book-card");
      bookCard.append(p);
    }
    const lastPChild = document.querySelectorAll("p");
    console.log(lastPChild);
    const removeButton = document.createElement("button");
    const readStatusButton = document.createElement("button");
    readStatusButton.textContent = book.isRead === "on" ? "Read" : "Not Read";
    removeButton.textContent = "remove";
    removeButton.style.display = "block";
    removeButton.addEventListener("click", removeBookFromLibrary);
    readStatusButton.addEventListener("click", toggleRead);
    bookCard.append(readStatusButton, removeButton);
    bookSection.append(bookCard);
  });
}
