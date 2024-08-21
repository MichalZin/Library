const submitDialog = document.querySelector(".addBook");
const buttonForm = document.querySelector(".submitForm");
const buttonClose = document.querySelector(".closeDialog");
const submitButton = document.querySelector(".submitBook");



buttonForm.addEventListener("click", () => {
    submitDialog.showModal();
})

buttonClose.addEventListener("click", () => {
    submitDialog.close()
})

const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    
  // the constructor...
}

function addBookToLibrary() {
    

    const bookAuthor = document.querySelector(".bookAuthorSubmit").value;
    const bookTitle = document.querySelector(".bookTitleSubmit").value;
    const bookPage = document.querySelector(".bookPageCountSubmit").value;
    const bookRead = document.querySelector(".bookReadSubmit").value;
    const bookShelf = document.querySelector(".bookShelf");
    const bookNew = new Book (bookAuthor, bookTitle, bookPage, bookRead);


    const bookCard = document.createElement('div');
    bookCard.classList.add("book");
    bookShelf.appendChild(bookCard);

    const bookAuthorEntry = document.createElement('p');
    //bookAuthorEntry.classList.add("bookAuthor")
    bookAuthorEntry.textContent = `${bookNew.author}`

    const bookTitleEntry = document.createElement('p');
    bookTitleEntry.textContent = `${bookNew.title}`;

    const bookPagesEntry = document.createElement('p');
    bookPagesEntry.textContent = `${bookNew.pages}`

    const bookReadEntry = document.createElement('p');
    bookReadEntry.textContent = `${bookNew.read}`;



    bookCard.appendChild(bookAuthorEntry);
    bookCard.appendChild(bookTitleEntry);
    bookCard.appendChild(bookPagesEntry);
    bookCard.appendChild(bookReadEntry);

    console.log(bookNew.author);
    console.log(bookNew.read)
  // do stuff here

}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    submitDialog.close()
});