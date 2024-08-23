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
    
    this.addCard = function() {
      const bookCard = document.createElement('div');
      bookCard.classList.add("book");
      
  
      const bookAuthorEntry = document.createElement('p');
      bookAuthorEntry.textContent = `${this.author}`
  
      const bookTitleEntry = document.createElement('p');
      bookTitleEntry.textContent = `${this.title}`;
  
      const bookPagesEntry = document.createElement('p');
      bookPagesEntry.textContent = `${this.pages}`
  
      const bookReadEntry = document.createElement('p');
      bookReadEntry.textContent = `${this.read}`;
      
      bookCard.appendChild(bookAuthorEntry);
      bookCard.appendChild(bookTitleEntry);
      bookCard.appendChild(bookPagesEntry);
      bookCard.appendChild(bookReadEntry);

      return bookCard

    }
  // the constructor...
}

function addBookToLibrary() {
    

    const bookAuthor = document.querySelector(".bookAuthorSubmit").value;
    const bookTitle = document.querySelector(".bookTitleSubmit").value;
    const bookPage = document.querySelector(".bookPageCountSubmit").value;
    const bookRead = document.querySelector(".bookReadSubmit").value;
    const bookShelf = document.querySelector(".bookShelf");
    const bookNew = new Book (bookAuthor, bookTitle, bookPage, bookRead);
          myLibrary.push(bookNew);

          const bookCard = bookNew.addCard();

          bookShelf.appendChild(bookCard);


    


  // do stuff here

}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    submitDialog.close()
    console.log(myLibrary);
});