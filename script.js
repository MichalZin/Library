const myLibrary = [];


const fieldValue = document.querySelectorAll('field');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPage = document.getElementById('pages');
const bookRead = document.getElementById('readStatus');
const bookSubmit = document.getElementById('submit');
const bookList = document.getElementById('bookList');

function Book(title, author, pagesCount, read) {
    this.title = title;
    this.author = author;
    this.pagesCount = pagesCount;
    this.read = read; 
  // the constructor...
}
function addBookToLibrary() {
    bookSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      
      const newBook = new Book(bookTitle.value, bookAuthor.value, bookPage.value, bookRead.value);
      
      const titleField = document.createElement('p');
      titleField.textContent = `${newBook.title}`;
      bookList.appendChild(titleField);
      
      const authorField = document.createElement('p');
      authorField.textContent = `${newBook.author}`;
      bookList.appendChild(authorField);
      
      const pagesField = document.createElement('p');
      pagesField.textContent = `${newBook.pagesCount}`;
      bookList.appendChild(pagesField);
      
      const readField = document.createElement('p');
      readField.textContent = `${newBook.read}`;
      bookList.appendChild(readField);
    });
  };


window.addEventListener('load', addBookToLibrary);